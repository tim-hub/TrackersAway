const {store} = require("./store");
const {CONSTANTS} = require("./constants");

const enableLoading = ()=>{
  return {
    type: CONSTANTS.ENABLE_LOADING
  }
};

const disableLoading = () => {
  return {
    type: CONSTANTS.DISABLE_LOADING
  }
};

const toggleLoading = (isLoading) => {
  //
  // if (isLoading) {
  //   return disableLoading();
  // }else {
  //   return enableLoading();
  // }

  return {
    type: CONSTANTS.TOGGLE_LOADING,
    isLoading: store.getState().ui.isLoading
  }
};

const toggleClicked = (isClicked)=>{
  return {
    type: CONSTANTS.TOGGLE_CLICK,
    isClicked: store.getState().ui.isClicked
  }
};


module.exports = {
  toggleLoading: toggleLoading,
  toggleClicked
};
