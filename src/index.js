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
    )).trim().split(/\r?\n/);
    // logger.debug(localHosts);
  }catch (e) {
    logger.error(e);
    throw e;
  }

  const startSymbol = '####----$$$$----Managed By Hosts Manager';
  const endSymbol = '####----!!!!----End Managed By Hosts Manager';
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

  // compare these 2 files
  localHosts.map(
    (l,i)=>{
      if (l===startSymbol){

      } else if (l===endSymbol){

      }
    }
  );


  try{
    await writeToFile(startSymbol.concat('\n',remoteHosts.join('\n').trim(),'\n', endSymbol), hostsPath);
  }catch (e) {
    throw e;
  }
};

module.exports = {main};
