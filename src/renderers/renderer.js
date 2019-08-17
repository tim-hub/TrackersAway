const {logger} = require("./utils/logger");
const {main} = require('./main');
const {store, CONSTANTS, toggleLoading} = require('../store');

var valueEl = document.getElementById('btn-loading')

function render() {
  valueEl.innerHTML = 'btn';
  if (store.getState().ui.isLoading) {
    valueEl.classList.add("is-loading");
  }else {
    valueEl.classList.remove("is-loading");
  }

}

render();
store.subscribe(render);

const btn = document.getElementById("btn-loading");

btn.addEventListener("click", async (event) => {
  logger.debug("button clicked");
  toggleLoading();
  await main('/tmp/hosts');
  toggleLoading();
});
