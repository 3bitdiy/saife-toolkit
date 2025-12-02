import {promises as fs} from "fs";
import path from "path";

export const mkdir = async (target: string) => {
  await fs.mkdir(target, {recursive: true});
};
// Move a file locally.
export const moveFile = async (file: string, dir: string): Promise<void> => {
  const f = path.basename(file);
  const dest = path.resolve(dir, f);

  await fs.rename(file, dest);
};

export const writeJsonFile =
  (target: string): ((d: unknown) => Promise<void>) =>
  async (data: unknown): Promise<void> => {
    await fs.writeFile(path.join(process.cwd(), target), JSON.stringify(data));
  };
