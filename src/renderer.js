const {logger} = require("./utils/logger");
const {main} = require('./index');

const btn = document.getElementById("new-window");

btn.addEventListener("click", async (event) => {
  logger.debug("button clicked");
  main('/tmp/hosts');
});
