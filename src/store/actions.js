const {store} = require("./store");
const {CONSTANTS} = require("./constants");

const toggleButton = ()=>{
  return {
    type: CONSTANTS.TOGGLE_LOADING,
    isLoading: store.getState().ui.isLoading
  }
};


module.exports = {
  toggleButton
}
