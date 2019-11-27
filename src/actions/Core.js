// The core actions of the engine
import React from "react";
import store from "../store/store";
import * as CoreMsg from "./coreMsg";

// Here are our actions

export function _updateTime(payload) {
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
export function _updateView(payload) {
  if (payload === undefined || payload === null) {
    throw Error("Core._updateView recevied undefined or null text ouput");
  }
  return {
    type: CoreMsg.UPDATE_VIEW,
    payload
  };
}

export function _addText(payload) {
  if (payload === undefined || payload === null) {
    throw Error("Core._addText recevied undefined or null text ouput");
  }
  return {
    type: CoreMsg.ADD_TEXT,
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
export function _buttonChange(payload) {
  /*
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("Core._buttonChange did not receive an object");
  }
  */

  //TODO Check for all required button properties before sending message
  return {
    type: CoreMsg.UPDATE_BUTTONS,
    payload
  };
}

/**
 * Message sender for updating the buttons in the upper part of the UI
 * Shape of object: { u1: { //button info} }
 * All buttons must have the nextScene property set!
 * @param {object} payload
 * @return {object} Redux action
 */
export function _menuChange(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("UI.menuChange did not receive an object");
  }
  //TODO Check for all required button properties before sending message
  return {
    type: CoreMsg.UPDATE_MENUS,
    payload
  };
}

/**
 * Sends message to set a stat to a particular number
 * Payload shape: { strength: 23 }
 * @param {object} payload
 * @return {object} Redux action
 */
export function _setStats(payload) {
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
export function _statChange(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("Core._statChange did not receive an object");
  }
  return {
    type: CoreMsg.UPDATE_STATS,
    payload
  };
}

export function _goBack() {
  return {
    type: CoreMsg.GO_BACK
  };
}

export function _stateStore() {
  return {
    type: CoreMsg.STATE_STORE
  };
}

export const changeStats = newStats => store.dispatch(_statChange(newStats));
export const setStats = newStats => store.dispatch(_setStats(newStats));
export const changeMenus = newMenus => store.dispatch(_menuChange(newMenus));
export const changeButtons = newButtons =>
  store.dispatch(_buttonChange(newButtons));
export const addButton = (ind, label, func, param) =>
  store.dispatch({
    type: CoreMsg.ADD_BUTTON,
    payload: [ind, label, func, param]
  });
export const removeButton = ind => {
  store.dispatch({ type: CoreMsg.REMOVE_BUTTON, payload: ind });
};
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
export const goBack = () => store.dispatch(_goBack());
export const addText = text => store.dispatch(_addText(text));
export const setInCombat = () => store.dispatch({ type: CoreMsg.START_COMBAT });

export const getHours = () => store.getState().time.hour;
/*
export function gameStarted() {
  return {
    type: EngineMsg.GAME_STARTED
  };
}
*/
export const doWait = func => {
  changeStats({ fat: -8 });
  changeTime({ hour: 4 });
  newText("You wait for four hours...");
  changeButtons([[0, "Next", func]]);
};

export const rest = func => {
  let multiplier = 1.0;
  let fatRecovery = 4;
  let hpRecovery = 10;
  let timeQ = Math.min(4, 21 - store.getState().time.hour);
  changeStats({
    hp: timeQ * hpRecovery * multiplier,
    fat: timeQ * -fatRecovery * multiplier
  });
  changeTime({ hour: timeQ });
  newText(
    <>
      <p>You like down to rest for {timeQ} hours</p>
    </>
  );
  changeButtons([[0, "Next", func]]);
};

//Not the full doSleep
export const doSleep = func => {
  changeTime({ hour: 8 });
  newText(
    <>
      <p>You fall asleep for eight hours...</p>
    </>
  );
  setStats({ fat: 0 });
  changeStats({ hp: 100 });
  changeButtons([[0, "Next", func]]);
};
