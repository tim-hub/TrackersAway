const {store} = require("./store");
const {toggleButton} = require("./actions");

const toggleLoading = () => {
  store.dispatch(toggleButton());
};

module.exports={
  store,
  toggleLoading
};
