const fs = require('fs').promises;
const axios = require('axios');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const sudo = require('sudo-prompt');
const defaultHostPath = '/etc/hosts';
const {logger} = require('./logger');

const getHosts = async (url) => {
  return await axios.get(url);
};

const getLocalHosts = async (path = defaultHostPath, charset='utf8') => {
  return await fs.readFile(path, charset);
};

const addPermission = async (path = 'utils/fs-writer/index-macos') => {
  logger.info('change permission');
  const {stdout, stderr} = await exec('chmod +x '+path);
  return new Promise((resolve, reject)=>{
    if (stderr) {
      const message = `failed to add +x permission, error: ${stderr}`;
      logger.error(message);
      reject(new Error(message));
    }
    logger.info(`change permission successfully ${stdout}`);
    resolve();
  });
};


const writeToFile = async (content, hostsPath=defaultHostPath)=>{
  logger.info('start to write to file '+hostsPath);
  const options = {
    name: 'Write to Hosts',
  };

  return new Promise((resolve, reject)=>{
    sudo.exec(`: > '${hostsPath}'  && echo -e '${content}' >> '${hostsPath}'`,
        options,
        (error, stdout, stderr) => {
          if (error || stderr) {
            const message = `failed to write to the file + ${error}`;
            logger.error(message);
            logger.error(stderr);
            new Notification('The Sudo Permission is Required', {
              body: 'to save the newer hosts file.',
            });
            reject(new Error(message));
            throw error;
          }
          logger.info('write to successfully: ' + stdout);
          resolve();
        },
    );
  });
};

module.exports = {
  getHosts,
  getLocalHosts,
  writeToFile,
  addPermission,
};
