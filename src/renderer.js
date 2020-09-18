const {logger} = require('./utils/logger');
const {applyHostsUpdate} = require('./index');
const {
  store,
  toggleLoading,
  FETCHING_STATE,
} = require('./store');

const valueEl = document.getElementById('apply-button');
const logEl = document.getElementById('log-area');

const render = () => {
  if (store.getState().ui.isLoading) {
    valueEl.classList.add('is-loading');
    switch (store.getState().fetching.state) {
      case FETCHING_STATE.fetching:
        logEl.innerHTML='Fetching remote hosts file';
        break;
      case FETCHING_STATE.init:
        logEl.innerHTML='init';
        break;
      case FETCHING_STATE.buildHosts:
        logEl.innerHTML='compare and update the hosts at /etc/hosts';
        break;
      case FETCHING_STATE.noupdate:
        logEl.innerHTML='No hosts update, update is not required';
        break;
      default:
        logEl.innerHTML='Fetching is done';
    }
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
  logger.debug('hosts apply button clicked');
  toggleLoading();

  try {
    await applyHostsUpdate('/etc/hosts');
    toggleLoading();
  } catch (e) {
    toggleLoading();
    logger.error(e);
  }
});
