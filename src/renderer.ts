const fs = require("fs").promises;
const axios = require("axios");

const hosts =
  "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts";

const btn = document.getElementById("new-window");

btn.addEventListener("click", event => {
  console.log("button clicked");
  axios.get(hosts).then(data => {
    const lines = data.data.split(/\r?\n/);
    console.log(lines);

    var sudo = require("sudo-prompt");
    var options = {
      name: "Write to Hosts"
    };
    const hostsPath = "/opt/hosts";
    sudo.exec(`chmod 777 ${hostsPath}`, options, (error, stdout, stderr) => {
      if (error) throw error;
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);

      fs.writeFile(hostsPath, data.data)
        .then(r => console.log(r))
        .catch(e => console.log(e));

      sudo.exec(`chmod 644 ${hostsPath}`, options, (error, stdout, stderr) => {
        if (error) throw error;
        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
      });
    });
  });
});
