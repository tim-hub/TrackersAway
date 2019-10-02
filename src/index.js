const {writeToFile, getLocalHosts, getHosts} = require('./utils/io');
const {logger} = require('./utils/logger');
const {compare} = require('./utils/diff');
const {localStore, getSelectedOptions, setOptionSha} = require('./utils/localStore');
const {hash} = require('./utils/hash');

const main = async (hostsPath = '/etc/hosts') => {
  let localHosts;
  try {
    localHosts = (await getLocalHosts(
        // hostsPath === '/opt/hosts' ?'/etc/hosts': hostsPath
        hostsPath
    )).trim().split(/\r?\n/);
    // logger.debug(localHosts);
  } catch (e) {
    logger.error(e);
    throw e;
  }


  let remoteHosts;
  const options = localStore.get('options');
  console.log(options);
  const config = localStore.get('config');
  const urls = options.filter((o, i)=> config.selected.includes(i));
  const url = urls[0].raw;
  try {
    remoteHosts = (await getHosts(url)).data
        .replace(/'/g, ' ')
        .replace(/"/g, ' ')
        .replace(/\\/g, ' ')
        .replace(/\//g, ' ')
        .trim().split(/\r?\n/);
  } catch (e) {
    logger.error(e);
    throw e;
  }

  const sha = hash(remoteHosts);
  console.log(sha, getSelectedOptions()[0].sha);

  if (sha === getSelectedOptions()[0].sha) {
    console.log('no update');
  } else {
    setOptionSha(getSelectedOptions()[0].id, sha);
    console.log(sha, getSelectedOptions()[0].sha);
  }

  const results = compare(localHosts, remoteHosts);

  try {
    await writeToFile(results.join('\n'), hostsPath);
  } catch (e) {
    throw e;
  }
};

module.exports = {main};
