// const { Notification } = require("electron");
// const fs = require("fs");
const { readHosts } = require("./utils/readHosts");

// const readHosts = async hosts => {
//   return await fs.promises.readFile(hosts);
// };

// const readHosts = async (hostsPath = "/etc/hosts") => {
//     return await fs.promises.readFile(hostsPath);
// };

const btn = document.getElementById("new-window");

btn.addEventListener("click", event => {
  console.log("hi");
  readHosts("/etc/hosts")
    .then(r => console.log(r.toString()))
    .catch(e => console.log(e));
  // console.log(readHosts());
});
// let myNotification = new Notification("Title", {
//   body: "Lorem Ipsum Dolor Sit Amet"
// });
//
// myNotification.onclick = () => {
//   console.log("Notification clicked");
// };
