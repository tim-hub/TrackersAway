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
  if (!localStore.get('options', false)) {
    localStore.set({'options': options});
  }
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
  setOptionSha: (id, sha) => {
    localStore.set('options', options.map( (o) => {
      return id===o.id ? {...o, sha: sha} : o;
    }));
  },
};

