const {logger} = require("./utils/logger");
const {main} = require('./utils/io');



const btn = document.getElementById("new-window");

btn.addEventListener("click", event => {
  logger.debug("button clicked");

  main()

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
