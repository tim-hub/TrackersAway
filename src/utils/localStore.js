const Store = require('electron-store');
const store = new Store();

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

if (store.get('options', false)) {
  store.set(options);
}

if (store.get('config', false)) {
  store.set(config);
}

