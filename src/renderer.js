const {logger} = require("./utils/logger");
const {main} = require('./index');
const {store} = require('./store');

var valueEl = document.getElementById('new-window')

function render() {
  valueEl.innerHTML = store.getState().toString()
}

render();
store.subscribe(render);

const btn = document.getElementById("new-window");

btn.addEventListener("click", async (event) => {
  logger.debug("button clicked");
  // main('/tmp/hosts');
  store.dispatch({ type: 'INCREMENT' })
});
