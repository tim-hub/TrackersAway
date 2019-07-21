import * as fs from "fs";

export const readHosts = async hosts => {
  return await fs.promises.readFile(hosts);
};
