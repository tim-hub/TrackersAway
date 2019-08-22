const {writeToFile, getLocalHosts, getHosts} = require("./utils/io");
const {logger} = require("./utils/logger");

const optPath = "/opt/hosts";
const hostsDefaultUrl =
  "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts";

const main = async (hostsPath = '/etc/hosts', url = hostsDefaultUrl, ) => {
  let localHosts;
  try{
    localHosts = (await getLocalHosts(
      // hostsPath === '/opt/hosts' ?'/etc/hosts': hostsPath
      hostsPath
    )).split(/\r?\n/);
    logger.info(localHosts);
  }catch (e) {
    logger.error(e);
    throw e;
  }

  let remoteHosts;
  try{
    remoteHosts = (await getHosts(url)).data
      .replace(/'/g, " ")
      .replace(/"/g, " ")
      .replace(/\\/g, ' ')
      .replace(/\//g, " ")
      .trim().split(/\r?\n/);
  }catch (e) {
    logger.error(e);
    throw e;
  }
  try{
    await writeToFile(remoteHosts.join('\n').trim(), hostsPath);
  }catch (e) {
    throw e;
  }
};

module.exports = {main};
