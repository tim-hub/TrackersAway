const {logger} = require("./utils/logger");
const {main} = require('./index');
const {store, CONSTANTS} = require('./store');

var valueEl = document.getElementById('new-window')

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

const btn = document.getElementById("new-window");

btn.addEventListener("click", async (event) => {
  logger.debug("button clicked");
  // main('/tmp/hosts');
  console.log(store.getState());
  store.dispatch({
    type: CONSTANTS.TOGGLE_LOADING,
    isLoading: store.getState().ui.isLoading
  })
});
