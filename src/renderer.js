const {logger} = require('./utils/logger');
const {main} = require('./index');
const {
  store,
  toggleLoading,
  updateFetchingState,
  FETCHING_STATE,
} = require('./store');

const valueEl = document.getElementById('apply-button');
const logEl = document.getElementById('log-area');

const render = () => {
  if (store.getState().ui.isLoading) {
    valueEl.classList.add('is-loading');
    logEl.innerHTML='Fetching and updating the hosts';
  } else {
    valueEl.classList.remove('is-loading');
    if (store.getState().fetching.state === FETCHING_STATE.error) {
      logEl.innerHTML = 'ERROR,' +
        'Sudo permission is required to update hosts file';
    }
    if (store.getState().fetching.state === FETCHING_STATE.done) {
      logEl.innerHTML='Done';
    }
  }
};

render();
store.subscribe(render);

const btn = document.getElementById('apply-button');

btn.addEventListener('click', async (event) => {
  logger.debug('button clicked');
  toggleLoading();
  updateFetchingState(FETCHING_STATE.fetching);
  try {
    await main('/etc/hosts');
    toggleLoading();
    updateFetchingState(FETCHING_STATE.done);
  } catch (e) {
    toggleLoading();
    updateFetchingState(FETCHING_STATE.error);
    logger.error(e);
  }
});
