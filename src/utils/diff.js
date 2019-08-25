const {logger} = require("./logger");
const startSymbol = '####----$$$$----Managed By Hosts Manager';
const endSymbol = '####----!!!!----End Managed By Hosts Manager';

const compare = (localHosts, remoteHosts) => {
  let startIndex = -1;
  let endIndex = -1;

  // compare these 2 files
  localHosts.map(
    (l, i) => {
      if (l === startSymbol) {
        startIndex = i;
      } else if (l === endSymbol) {
        endIndex = i;
      }
    }
  );

  if (startIndex === -1 || endIndex === -1) {
    return localHosts.concat([startSymbol], remoteHosts, [endSymbol]);
  } else {
    let beginning;
    let ending;
    try {
      beginning = localHosts.slice(0, startIndex + 1);
      ending = localHosts.slice(endIndex, localHosts.length);
    } catch (e) {
      logger.error(e);
    }
    return beginning.concat(remoteHosts, ending);
  }
};

module.exports = {
  compare,
  startSymbol,
  endSymbol
};
