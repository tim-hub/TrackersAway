// const { Notification } = require("electron");

const btn = document.getElementById("new-window");

btn.addEventListener("click", event => {
  console.log("hi");
});
let myNotification = new Notification("Title", {
  body: "Lorem Ipsum Dolor Sit Amet"
});

myNotification.onclick = () => {
  console.log("Notification clicked");
};
