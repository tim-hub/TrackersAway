const {logger} = require('./utils/logger');
const {main} = require('./index');
const {store, toggleLoading} = require('./store');

const valueEl = document.getElementById('apply-button');

const render = () => {
  if (store.getState().ui.isLoading) {
    valueEl.classList.add('is-loading');
  } else {
    valueEl.classList.remove('is-loading');
  }
};

render();
store.subscribe(render);

const btn = document.getElementById('apply-button');

btn.addEventListener('click', async (event) => {
  logger.debug('button clicked');
  toggleLoading();
  try {
    await main('/etc/hosts');
    toggleLoading();
  } catch (e) {
    toggleLoading();
    logger.error(e);
  }
});
