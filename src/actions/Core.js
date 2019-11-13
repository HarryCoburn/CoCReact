// The core actions of the engine
import store from "../store/store";
import * as CoreMsg from "./coreMsg";

// Here are our actions

function _stateStore() {
  let oldState = store.getState();
  return {
    type: CoreMsg.STATE_STORE,
    payload: oldState
  };
}

function _updateTime(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("Core._updateTime did not receive an object");
  }
  return {
    type: CoreMsg.UPDATE_TIME,
    payload: payload
  };
}

/**
 * Message sender for updating the text in the view.
 * @param {JSX} payload
 * @return {object} Redux action
 */
function _updateView(payload) {
  if (payload === undefined || payload === null) {
    throw Error("Core._updateView recevied undefined or null text ouput");
  }
  return {
    type: CoreMsg.UPDATE_VIEW,
    payload
  };
}

/**
 * Message sender for updating the buttons in the lower part of the UI
 * Shape of object: { b1: { // button info } }
 * All buttons must have the nextScene property set!
 * @param {object} payload
 * @return {object} Redux action
 */
function _buttonChange(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("Core._buttonChange did not receive an object");
  }
  let state = store.getState();
  let array = state.buttons.lowerIDs;
  //TODO Check for all required button properties before sending message
  return {
    type: CoreMsg.UPDATE_BUTTONS,
    payload,
    array
  };
}

/**
 * Message sender for updating the buttons in the upper part of the UI
 * Shape of object: { u1: { //button info} }
 * All buttons must have the nextScene property set!
 * @param {object} payload
 * @return {object} Redux action
 */
function _menuChange(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("UI.menuChange did not receive an object");
  }
  let state = store.getState();
  let array = state.buttons.upperIDs;
  //TODO Check for all required button properties before sending message
  return {
    type: CoreMsg.UPDATE_MENUS,
    payload,
    array
  };
}

/**
 * Sends message to set a stat to a particular number
 * Payload shape: { strength: 23 }
 * @param {object} payload
 * @return {object} Redux action
 */
function _setStats(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("Core._setStats did not receive an object");
  }
  return {
    type: CoreMsg.SET_STATS,
    payload
  };
}

/**
 * Sends message to increase or decrease a stat by a particular number
 * Payload shape: { strength: 8 } or { strength: -19 }
 * @param {object} payload
 * @return {object} Redux action
 */
function _statChange(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("Core._statChange did not receive an object");
  }
  return {
    type: CoreMsg.UPDATE_STATS,
    payload
  };
}

function _goBack() {
  let oldStore = store.getState();
  if (oldStore.engine.prevState.length === 0) {
    return;
  }
  let oldState = oldStore.engine.prevState.pop();
  store.dispatch({
    type: CoreMsg.GO_BACK,
    payload: oldState
  });
}

export const changeStats = newStats => store.dispatch(_statChange(newStats));
export const setStats = newStats => store.dispatch(_setStats(newStats));
export const changeMenus = newMenus => store.dispatch(_menuChange(newMenus));
export const changeButtons = newButtons =>
  store.dispatch(_buttonChange(newButtons));
export const newText = text => store.dispatch(_updateView(text)); // This will need tweaking once we get variable text.
export const hideStatBar = () =>
  store.dispatch({
    type: CoreMsg.HIDE_STATS
  });
export const showStatBar = () =>
  store.dispatch({
    type: CoreMsg.SHOW_STATS
  });
export const hideMenuBar = () =>
  store.dispatch({
    type: CoreMsg.HIDE_MENU_BAR
  });
export const showMenuBar = () =>
  store.dispatch({
    type: CoreMsg.SHOW_MENU_BAR
  });
export const changeTime = time => store.dispatch(_updateTime(time));
export const storeState = () => store.dispatch(_stateStore());
export const goBack = () => _goBack();
/*
export function gameStarted() {
  return {
    type: EngineMsg.GAME_STARTED
  };
}
*/
