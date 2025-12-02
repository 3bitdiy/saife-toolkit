/* eslint no-console: off, no-restricted-syntax: off */
import path from "path";
import {hideBin} from "yargs/helpers";
import yargs from "yargs/yargs";

import {mkdir, writeJsonFile} from "./lib/fs";
import {dosAndDonts, fetchImage, glossaries, type GoogleDoc,resources} from "./lib/google";

const dataDir = "src/data";
const resourcesDir = path.join(dataDir, "resources");

const run = async (): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  yargs(hideBin(process.argv))
    .scriptName("indexctl")
    .command("google", "pull content from Google docs.", async () => {
      await mkdir(path.join(process.cwd(), dataDir));

      const dosAndDontsTarget = path.join(dataDir, "dosAndDonts.json");
      const resourcesTarget = path.join(dataDir, "resources.json");
      const glossaryTarget = path.join(dataDir, "glossary.json");

      // Generating Dos and Don'ts.
      console.log(`Pull content for: ${dosAndDontsTarget}`);
      await dosAndDonts().then(writeJsonFile(dosAndDontsTarget));

      // Generating Resources.
      console.log(`Pull content for: ${resourcesTarget}`);
      let records = (await resources()) as {image?: GoogleDoc; [key: string]: unknown};

      await mkdir(path.join(process.cwd(), resourcesDir));
      records = await Promise.all(
        records.map(async ({image, ...resource}) => {
          let imagePath;

          if (image) {
            console.log(` Downloading ${image.id}/${image.name} for resource #${resource.nr}`);
            await fetchImage(resourcesDir, image);
            imagePath = path.join(resourcesDir, image.name).replace("src/", "");
          }

          return {image: imagePath, ...resource};
        }),
      );

      await writeJsonFile(resourcesTarget)(
        records.map(({tag1, tag2, tag3, tag4, tag5, ...rest}) => ({
          ...rest,
          tags: [tag1, tag2, tag3, tag4, tag5].filter((t) => t && t !== ""),
        })),
      );

      // Fetching glossary items
      console.log(`Pull content for: ${glossaryTarget}`);
      await glossaries().then(writeJsonFile(glossaryTarget));
    })
    .demandCommand(1)
    .help()
    .alias("help", "h")
    .hide("version").argv;
};

await run();
