const {createStore, combineReducers} = require('redux');
const {CONSTANTS} = require("./constants");

const defaultState = {
  isLoading: false,
  isClicked: false
};
const ui = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.TOGGLE_LOADING:
      console.log('change loading status' + action.isLoading + action.type);
      return Object.assign(state, {isLoading: !action.isLoading});
    case CONSTANTS.TOGGLE_CLICK:
      console.log('clicked status in action '+action.isClicked);
      console.log(state);
      // console.log(Object.assign(state, {isClicked: !action.isClicked}));
      return Object.assign(state, {isClicked: !action.isClicked});
    default:
      return state
  }
};

const test = (state = [1,2], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "DELETE_ITEM":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

const app = (state = {isLoading: false}, action) =>{
  switch (action.type) {
    case 'TOGGLE':
      return Object.assign({}, state, {isLoading: !action.loadingStatus});
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(combineReducers({
  ui: ui,
  test,
  app
}));

//action creator
const addItem = (i) => {
  return {
    type: "ADD_ITEM",
    item: i
  };
};

const deleteItem = index => {
  return {
    type: "DELETE_ITEM",
    index: index
  };
};

const toggle1 = (loadingStatus) => {
  return {
    type: 'TOGGLE',
    loadingStatus: loadingStatus
  }
}

module.exports = {
  store,
  addItem,
  deleteItem,
  toggle1
};
