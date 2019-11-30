// Action creators and input validation - Core Messages

// The core actions of the engine
import React from "react";
import store from "../store/store";
import * as Output from "./Output";
import * as Time from "./Time";
import * as Button from "./Button";
import * as ButtonMsg from "./messages/buttonMsg";
import * as CoreMsg from "./messages/coreMsg";

import { validate } from "bycontract";
import { _changeButton } from "./Button";
import { _changeMenus } from "./Button";
import { _removeButton } from "./Button";

// Here are our actions

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
    type: CoreMsg.CHANGE_STATS,
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

export const newText = text => store.dispatch(Output._updateView(text)); // This will need tweaking once we get variable text.
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
    type: ButtonMsg.HIDE_MENU_BAR
  });
export const showMenuBar = () =>
  store.dispatch({
    type: ButtonMsg.SHOW_MENU_BAR
  });
export const changeTime = time => store.dispatch(Time._addTime(time));
export const storeState = () => store.dispatch(_stateStore());
export const goBack = () => store.dispatch(_goBack());
export const addText = text => store.dispatch(Output._addText(text));
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
  changeButtons([[0, "Next", func[0]]]);
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
  changeButtons([[0, "Next", func[0]]]);
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
  changeButtons([[0, "Next", func[0]]]);
};

export const addButton = (ind, label, func, param) =>
  store.dispatch(Button._addButton(ind, label, func, param));

export const changeButtons = newButtons =>
  store.dispatch(Button._changeButton(newButtons));

export const changeMenus = newMenus =>
  store.dispatch(Button._changeMenus(newMenus));

export const removeButton = ind => {
  store.dispatch(_removeButton(ind));
};
