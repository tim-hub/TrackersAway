const Store = require('electron-store');
const localStore = new Store();

const options = [
  {
    id: 0,
    name: 'StevenBlack Unified',
    raw: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts',
    url: 'https://github.com/StevenBlack/hosts',
    md5: 'F95172EAE2C3663E88628C3BE4C3E68B71EDA72B',
    sha: '291f1afda54eaa9548e7d15e73b11da908188b5f5a1cd5b955bb6af38b88eebe',
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

module.exports = {
  localStore: localStore,
  getSelectedOptions: () => {
    return localStore.get('options').filter(
        (o)=>localStore.get('config').selected.includes(o.id)
    );
  },
};

