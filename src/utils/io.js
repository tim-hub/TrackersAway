const fs = require("fs").promises;
const axios = require("axios");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const sudo = require("sudo-prompt");
const {logger} = require("./logger");

const getHosts = async (url) => {
  return await axios.get(url);
};

const getLocalHosts = async (path = "/opt/hosts", charset='utf8') => {
  return await fs.readFile(path, charset);
};

const addPermission = async(path = 'utils/fs-writer/index-macos') => {
  logger.info('change permission');
  const { stdout, stderr } = await exec('chmod +x '+path);
  return new Promise((resolve, reject)=>{
    if (stderr) {
      logger.error(`failed to add +x permission, error: ${stderr}`);
      reject();
    }
    logger.info(`change permission successfully ${stdout}`);
    resolve();
  })

};


const writeToFile = async (content, hostsPath='/etc/hosts')=>{
  logger.info('start to write to file '+hostsPath);
  var options = {
    name: "Write to Hosts"
  };

  return new Promise((resolve, reject)=>{
    sudo.exec(`: > '${hostsPath}'  && echo -e '${content}' >> '${hostsPath}'`,
      options,
      (error, stdout, stderr) => {
        if (error || stderr){
          logger.error(`failed to write to the file` + error);
          logger.error(stderr);
          new Notification('The Sudo Permission is Required', {
            body: 'to save the newer hosts file.'
          });

          reject();
          throw error;
        }
        logger.info("write to successfully: " + stdout);
        resolve();
      }
    )
  })
};

module.exports = {
  getHosts,
  getLocalHosts,
  writeToFile,
  addPermission
}
