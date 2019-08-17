const {store} = require("./store");
const {CONSTANTS} = require("./constants");

const toggleLoading = ()=>{
  return {
    type: CONSTANTS.TOGGLE_LOADING,
    isLoading: store.getState().ui.isLoading
  }
};

const toggleClicked = (isClicked)=>{
  return {
    type: CONSTANTS.TOGGLE_CLICK,
    isClicked: isClicked
  }
};


module.exports = {
  toggleLoading: toggleLoading,
  toggleClicked
};
