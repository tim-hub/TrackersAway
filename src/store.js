const {createStore, combineReducers} = require('redux');

const CONSTANTS = {
  TOGGLE_LOADING: 'TOGGLE_LOADING',
  UPDATE_STATE: 'UPDATE_STATING',
};

const defaultState ={
  isLoading: false,
};

const FETCHING_STATE ={
  init: 'init',
  fetching: 'fetching',
  doneFetching: 'doneFetching',
  noupdate: 'noupdate',
  buildHosts: 'buildHosts',
  done: 'done',
  error: 'error',
};


const ui = (state = defaultState, action)=> {
  switch (action.type) {
    case CONSTANTS.TOGGLE_LOADING:
      console.log('change ui status'+action.isLoading + action.type);
      return Object.assign({}, state, {isLoading: !action.isLoading});
    case 'DECREMENT':
      return state;
    default:
      return state;
  }
};

const fetching = (state = {state: 'init'}, action)=> {
  switch (action.type) {
    case CONSTANTS.UPDATE_STATE:
      console.log('change fetching status'+action.state + action.type);
      return Object.assign({}, state, {state: action.state});
    default:
      return state;
  }
};

// Create a Redux localStore holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore( combineReducers({
  ui: ui,
  fetching: fetching,
}));

const toggleLoading = ()=>{
  store.dispatch({
    type: CONSTANTS.TOGGLE_LOADING,
    isLoading: store.getState().ui.isLoading,
  });
};

const updateFetchingState = (state) => {
  store.dispatch({
    type: CONSTANTS.UPDATE_STATE,
    state: state,
  });
};

module.exports={
  store,
  CONSTANTS,
  FETCHING_STATE,
  toggleLoading,
  updateFetchingState,
};
