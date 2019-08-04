const fs = require("fs").promises;
const axios = require("axios");
const {logger} = require("./logger");
const optPath = "/opt/hosts";
const hostsDefaultUrl =
  "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts";

const readHosts = async (hosts = "/etc/hostsDefaultUrl") => {
  return await fs.readFile(hosts);
};


const getHosts = async (url = hostsDefaultUrl) => {
  return await axios.get(url);
};

const getLocalHosts = async (path = "/opt/hosts", charset='utf8') => {
  return await fs.readFile(path, charset);
};

const main = async (url = hostsDefaultUrl, path = optPath) => {
  // logger.info((await getHosts()).data.split(/\r?\n/));
  logger.info((await getLocalHosts()).split(/\r?\n/));
};

module.exports = {main, readHosts};
