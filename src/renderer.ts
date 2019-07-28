const fs = require("fs").promises;
const axios = require("axios");
// import axios from "axios";
const { readHosts } = require("./utils/io");

const hosts =
  "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts";

const btn = document.getElementById("new-window");

btn.addEventListener("click", event => {
  console.log("hi");
  // readHosts("/etc/hosts")
  //   .then(r => console.log(r.toString()))
  //   .catch(e => console.log(e));
  axios.get(hosts).then(data => {
    // console.log(data.data);
    // const fs = require("fs");
    // fs.writeFile("/tmp/hosts", data.data, err => {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   console.log("The file was saved!");
    // });
    const lines = data.data.split(/\r?\n/);
    console.log(lines);

    var sudo = require("sudo-prompt");
    var options = {
      name: "Write to Hosts"
    };

    const getCmd = line => `echo ` + line + ` >> /tmp/tmp111 && `;
    // console.log(getCmd("a"));
    let cmds = "";

    lines.forEach(x => {
      cmds += getCmd(x);
    });

    console.log(cmds.substring(0, cmds.length - 3));

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

    // sudo.exec(cmds.substring(0, cmds.length - 3), options, function(
    //   error,
    //   stdout,
    //   stderr
    // ) {
    //   if (error) throw error;
    //   console.log("err: " + error);
    //   console.log("stdout: " + stdout);
    //   console.log("stderr: " + stderr);
    // });
  });
});
// let myNotification = new Notification("Title", {
//   body: "Lorem Ipsum Dolor Sit Amet"
// });
//
// myNotification.onclick = () => {
//   console.log("Notification clicked");
// };
