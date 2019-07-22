const fs = require("fs").promises;

const readHosts = async (hosts = "/etc/hosts") => {
  return await fs.readFile(hosts);
};

module.exports = { readHosts };
