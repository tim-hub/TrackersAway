const axios = require("axios");
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
    console.log(data.data);
    // const fs = require("fs");
    // fs.writeFile("/tmp/hosts", data.data, err => {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   console.log("The file was saved!");
    // });
    const lines = data.data.split(/\r?\n/);

    var sudo = require("sudo-prompt");
    var options = {
      name: "Write to Hosts"
    };

    const getCmd = line => `echo ${line} >> /tmp/tmp111 && `;
    const writing = `${lines.reduce((a, b) => {
      return getCmd(a) + "" + getCmd(b);
    })}`;

    sudo.exec(
      writing.substring(writing.length - 3, writing.length),
      options,
      function(error, stdout, stderr) {
        if (error) throw error;
        console.log("stdout: " + stdout);
      }
    );
  });
});
// let myNotification = new Notification("Title", {
//   body: "Lorem Ipsum Dolor Sit Amet"
// });
//
// myNotification.onclick = () => {
//   console.log("Notification clicked");
// };
