const {logger} = require("./utils/logger");
const {main} = require('./utils/io');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const sudo = require("sudo-prompt");

const addPermission = async() => {
  console.log('change permission');
  const { stdout, stderr } = await exec('chmod +x utils/fs-writer/index-macos');
  return new Promise((resolve, reject)=>{
    if (stderr) {
      console.error(`error: ${stderr}`);
      reject();
    }
    console.log(`Number of files ${stdout}`);
    resolve();
  })

};

const writeToFile = async (content)=>{
  console.log('write to file');
  var options = {
    name: "Write to Hosts"
  };

  return new Promise((resolve, reject)=>{
    sudo.exec(`utils/fs-writer/index-macos ${content} ${'/opt/hosts'}`,
      options,
      (error, stdout, stderr) => {
        if (error){
          reject();
          throw error;
        }
        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
        resolve();
      }
    )
  })
};


const btn = document.getElementById("new-window");

btn.addEventListener("click", async (event) => {
  logger.debug("button clicked");

  // main()

  await addPermission();
  await writeToFile('asdjjjdf');





  // axios.get(hostsDefaultUrl).then(data => {
  //   const lines = data.data.split(/\r?\n/);
  //   console.log(lines);
  //
  //   var sudo = require("sudo-prompt");
  //   var options = {
  //     name: "Write to Hosts"
  //   };
  //   const hostsPath = "/opt/hostsDefaultUrl";
  //   sudo.exec(`chmod 777 ${hostsPath}`, options, (error, stdout, stderr) => {
  //     if (error) throw error;
  //     console.log("stdout: " + stdout);
  //     console.log("stderr: " + stderr);
  //
  //     fs.writeFile(hostsPath, data.data)
  //       .then(r => console.log(r))
  //       .catch(e => console.log(e));
  //
  //     sudo.exec(`chmod 644 ${hostsPath}`, options, (error, stdout, stderr) => {
  //       if (error) throw error;
  //       console.log("stdout: " + stdout);
  //       console.log("stderr: " + stderr);
  //     });
  //   });
  // });
});
