import {parse} from "csv-parse";
import fs from "fs";
import {Auth, drive_v3, google} from "googleapis";
import camelCase from "lodash/camelCase";
import path from "path";
import unzipper from "unzipper";

import type {Glossary} from "../types";
import {glossary, processHtml} from "./formatter";
import {isString, memoize, unreachable} from "./utils";

type GoogleDocDownload = {
  target: string;
  mimeType:
    | "text/html"
    | "text/csv"
    | "application/zip"
    | "application/json"
    | "image/jpeg"
    | "image/png";
  images?: string[];
};

type GoogleDocKind = "document" | "spreadsheet" | "image";

export type GoogleDoc = {
  id: string;
  name: string;
  kind: GoogleDocKind;
  download?: GoogleDocDownload;
};

type SheetRecord = Record<string, unknown>;

type Document = {
  id: string;
  name: string;
  kind: "document";
  src: string;
};

/*
 * The ID's of the Google Drive folders. Maybe move this into some
 * configuration file?
 */
// const rootFolder = "1kxJTx35-_MbpmcKUfb4yPGiE6X6rElGm";
// const glossaryFolder = "1G_o3zLDfOFvRitGrewgBxb9iOywkdCHn";
const rootFolder = "1QzCMN39Qy_nVMORAmFiIJy8aVOoJCVmu";
const glossaryFolder = "1z1_vUY0B413zU2BOZA3JtELaSZQ_yOQA";

// The scopes we require to have the right permissions.
const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

// FIXME: I don't want to hard code this path.
process.env.GOOGLE_APPLICATION_CREDENTIALS = path.join(process.cwd(), ".auth.json");

export const getAuth = memoize<() => Auth.GoogleAuth>(() => {
  const credentialPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  const auth = new google.auth.GoogleAuth({
    keyFile: credentialPath,
    scopes: SCOPES,
  });

  google.options({auth});
  return auth;
});

const isFile = (file: drive_v3.Schema$File): file is drive_v3.Schema$File => {
  const {id, name, mimeType} = file;
  if (
    id &&
    name && // We have a document.
    (mimeType === "application/vnd.google-apps.document" ||
      mimeType === "application/vnd.google-apps.spreadsheet")
  )
    return true;

  return false;
};

const mimeToKind = (mimeType: string): GoogleDocKind => {
  if (mimeType === "application/vnd.google-apps.document") return "document";
  if (mimeType === "application/vnd.google-apps.spreadsheet") return "spreadsheet";
  if (mimeType.startsWith("image")) return "image";

  return unreachable(`Unable to map mime-type ${mimeType} to a file kind.`);
};

const fileIdFromUrl = (url: string): string => {
  const u = new URL(url);
  const re = /^\/file\/d\/([\w-]+)\/?(view)?$/;
  const match = u.pathname.match(re);
  if (!match) {
    throw new Error(`${url} is not a valid Google Document URL.`);
  }

  return match[1];
};

export const listFiles = async (auth: Auth.GoogleAuth, parent: string): Promise<GoogleDoc[]> => {
  const iter = async (pageToken?: string): Promise<drive_v3.Schema$File[]> => {
    const drive = google.drive({version: "v3", auth});
    const {
      data: {files, nextPageToken},
    } = await drive.files.list({
      q: `'${parent}' in parents`,
      pageSize: 10,
      fields: "nextPageToken, files(id,name,mimeType)",
      ...(pageToken ? {pageToken} : undefined),
    });

    if (!files) return [];

    if (nextPageToken) {
      const nextDocs = await iter(nextPageToken);
      return [...files, ...nextDocs];
    }

    return files;
  };

  const files = await iter();
  const docs: GoogleDoc[] = [];

  files.forEach((file) => {
    if (isFile(file)) {
      const {id, name, mimeType} = file;
      docs.push({id: id ?? "NO ID", name: name ?? "NO NAME", kind: mimeToKind(mimeType || "")});
    }
  });

  return docs;
};

/*
 * Fetch a google doc by it's file id and export the document and any
 * associated images as a ZIP file. The document itself is a HTML and images
 * are linked as a relative file path to the media directory within the ZIP
 * file. Use this one if you want to handle images embedded inside of
 * documents.
 */
export const fetchDocumentZip = async (
  auth: Auth.GoogleAuth,
  targetDir: string,
  {id, name, kind}: GoogleDoc,
): Promise<GoogleDoc> => {
  let target: string;
  const drive = google.drive({version: "v3", auth});
  const images: string[] = [];

  const res = await drive.files.export(
    {
      fileId: id,
      mimeType: "application/zip",
    },
    {responseType: "stream"},
  );

  return new Promise((resolve, reject) => {
    res.data
      .on("error", reject)
      .pipe(unzipper.Parse())
      .on("entry", (entry) => {
        const entryName = entry.path;
        const targetFile = path.join(targetDir, entryName);

        fs.mkdirSync(path.dirname(targetFile), {recursive: true});

        // We register any downloaded images.
        if (entryName.startsWith("images")) {
          images.push(targetFile);
        }

        // We assume there is only one HTML file per zip file. In our case this
        // is true.
        if (path.extname(entryName) === ".html") {
          target = targetFile;
        }

        // Write out the file to the temporary location.
        entry.pipe(fs.createWriteStream(targetFile));
      })
      .on("error", reject)
      .on("finish", () => {
        if (!target) throw new Error(`No HTML file downloaded for ${id}/${name}`);

        const download: GoogleDocDownload = {
          target,
          images,
          mimeType: "text/html",
        };
        resolve({id, name, kind, download});
      });
  });
};

export const fetchSpreadsheetCsv = async (
  auth: Auth.GoogleAuth,
  {id}: GoogleDoc,
): Promise<SheetRecord[]> => {
  const records: SheetRecord[] = [];
  // const target = path.join(targetDir, `${name}.html`);
  // const dest = fs.createWriteStream(target);
  const drive = google.drive({version: "v3", auth});

  const res = await drive.files.export(
    {
      fileId: id,
      mimeType: "text/csv",
    },
    {responseType: "stream"},
  );

  const parser = parse({
    delimiter: ",",
    columns: true,
  });

  parser.on("readable", () => {
    let record;
    // eslint-disable-next-line no-cond-assign
    while ((record = parser.read()) !== null) {
      records.push(
        Object.fromEntries(
          Object.entries(record).map(([key, value]) => [`${camelCase(key)}`, value || undefined]),
        ),
      );
    }
  });

  parser.on("error", (err) => {
    console.error(err.message);
  });

  return new Promise((resolve, reject) => {
    res.data
      .on("error", reject)
      .pipe(parser)
      .on("error", reject)
      .on("finish", () => {
        // const download: GoogleDownload = {target, mimeType: "text/csv"};
        resolve(records);
      });
  });
};

/*
 * Fetch a google doc by it's file id and export it as HTML. Any images
 * included are links to Google. Use this one if your documents have no images
 * embedded, e.g. companies.
 */
export const fetchDocumentHtml = async (
  auth: Auth.GoogleAuth,
  // targetDir: string,
  {id, name}: GoogleDoc,
): Promise<Document> => {
  // const target = path.join(targetDir, `${name}.html`);
  // const dest = fs.createWriteStream(target);
  const drive = google.drive({version: "v3", auth});

  const res = await drive.files.export({
    fileId: id,
    mimeType: "text/html",
  });

  return {
    id,
    name,
    kind: "document",
    src: res.data as string,
  };
};

/*
 * Show details for a file from a Google Drive
 */
const showFile = async (
  auth: Auth.GoogleAuth,
  {id: fileId}: Pick<GoogleDoc, "id">,
): Promise<GoogleDoc> => {
  // log.trace(`showFile({${fileId}})`);

  const drive = google.drive({version: "v3", auth});
  const {
    data: {id, name, mimeType},
  } = await drive.files.get({fileId});

  return {
    id: id ?? "NO ID",
    name: name ?? "NO NAME",
    kind: mimeToKind(mimeType || ""),
  };
};

/*
 * Download a file from a Google Drive to a local target. Use this function to
 * download images and other types of files. For Google Docs or Spreadsheets use
 * `fetchDocumentHtml` and `fetchSheet` respectively.
 */
const fetchFile = async (
  auth: Auth.GoogleAuth,
  targetDir: string,
  {id, name, ...rest}: GoogleDoc,
): Promise<GoogleDoc> => {
  // log.trace(`fetchFile({${id}})`);

  const drive = google.drive({version: "v3", auth});
  const {data, headers} = await drive.files.get(
    {
      fileId: id,
      alt: "media",
    },
    {responseType: "stream"},
  );

  const target = path.join(targetDir, name);
  const file = fs.createWriteStream(target);

  return new Promise((resolve, reject) => {
    data
      .on("error", reject)
      .pipe(file)
      .on("error", reject)
      .on("finish", () => {
        const download: GoogleDocDownload = {
          target,
          mimeType: headers["content-type"],
        };
        resolve({id, name, download, ...rest});
      });
  });
};

/*
 * Download an image.
 */
export const fetchImage = async (target: string, file: GoogleDoc): Promise<void> => {
  const auth = getAuth();
  await fetchFile(auth, target, file);
};

export const dosAndDonts = async (): Promise<SheetRecord[]> => {
  const auth = getAuth();
  const googleDocs = await listFiles(auth, rootFolder);

  // checking for errors
  console.log(
    "Files in rootFolder:",
    googleDocs.map((d) => `${d.kind}:${d.name}`),
  );

  const sheet = googleDocs.find(({name}) => name === "Dos and Don'ts");

  if (!sheet) {
    throw new Error("'Dos and Don'ts' spreadsheet not found.");
  }

  return fetchSpreadsheetCsv(auth, sheet);
};

export const glossaries = async (): Promise<Glossary[]> => {
  const auth = getAuth();
  const googleDocs = await listFiles(auth, glossaryFolder);

  return Promise.all(
    googleDocs.map(async (googleDoc) => {
      const doc = await fetchDocumentHtml(auth, googleDoc);

      // return unreachable(`unable to fetch glossaru '${name}'`);
      // const src = await fsP.readFile(doc.download.target, "utf-8");
      const html = processHtml(doc.src);

      // console.log(html);

      return glossary(googleDoc.name, html);
    }),
  );
};

// changed name === "Resources" to "Resources Image URL Fixed"
export const resources = async (): Promise<SheetRecord[]> => {
  const auth = getAuth();
  const googleDocs = await listFiles(auth, rootFolder);

  const sheet = googleDocs.find(({name}) => name === "Resources");

  if (!sheet) {
    throw new Error("'Resources' spreadsheet not found.");
  }

  const csv = await fetchSpreadsheetCsv(auth, sheet);

  const data = await Promise.all(
    csv.map(async ({imageUrl, ...rest}) => {
      let image;

      if (isString(imageUrl)) {
        const imageId = fileIdFromUrl(imageUrl);
        image = await showFile(auth, {id: imageId});
      }

      return {image, ...rest};
    }),
  );

  return data;
};
