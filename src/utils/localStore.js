const Store = require('electron-store');
const localStore = new Store();

const options = [
  {
    id: 0,
    name: 'StevenBlack Unified',
    raw: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts',
    url: 'https://github.com/StevenBlack/hosts',
    md5: 'F95172EAE2C3663E88628C3BE4C3E68B71EDA72B',
  },
];

const config = {
  selected: [0],
};

const initStore = () => {
  console.log('init store', localStore.get('options', false));
  if (!localStore.get('options', false)) {
    localStore.set({'options': options});
  }
  console.log('after init options', localStore.get('options', false));
  if (!localStore.get('config', false)) {
    localStore.set({'config': config});
  }
};
initStore();

module.exports = {localStore: localStore};

