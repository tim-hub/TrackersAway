const {logger} = require("./utils/logger");
const {main} = require('./main');
const {store, toggleLoading} = require('../store/dispatches');

var valueEl = document.getElementById('btn-loading')

function render() {
  logger.info('renderer through electron loading -- '+store.getState().ui.isLoading);
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
  try{
    await main('/tmp/hosts');
  }catch (e) {
    logger.info('error when wait main in electron')
    toggleLoading();
    throw e;
  }
  toggleLoading();
}, false);
