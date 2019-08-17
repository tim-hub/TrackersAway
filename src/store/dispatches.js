const {store} = require("./store");
const {toggleLoading} = require("./actions");

const toggleLoadingDispatch = () => {
  store.dispatch(toggleLoading());
};

module.exports={
  store,
  toggleLoading: toggleLoadingDispatch
};
