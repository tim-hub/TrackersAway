// const { Notification } = require("electron");
const fs = require("fs");

const readHosts = async hosts => {
  return await fs.promises.readFile(hosts);
};

const btn = document.getElementById("new-window");

btn.addEventListener("click", event => {
  console.log("hi");
  console.log(readHosts("/etc/hosts"));
});
let myNotification = new Notification("Title", {
  body: "Lorem Ipsum Dolor Sit Amet"
});

myNotification.onclick = () => {
  console.log("Notification clicked");
};
