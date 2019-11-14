import store from "../store/store";
import * as PlayerMsg from "./playerMsg";

/**
 * Sends message to set the hp value to equal the maxiumum
 * @return {object} Redux action
 */
function _restoreHP() {
  return {
    type: PlayerMsg.RESTORE_HP
  };
}

export const restoreHP = () => store.dispatch(_restoreHP());

/**
 * Sends message to set the player name
 * @param {string} name
 * @return {object} Redux action
 */
export function setPlayerName(name) {
  return {
    type: PlayerMsg.SET_PLAYER_NAME,
    payload: name
  };
}

function _setPlayerAppearance(stats) {
  return {
    type: PlayerMsg.SET_APPEARANCE,
    payload: stats
  };
}

function _changePlayerAppearance(stats) {
  return {
    type: PlayerMsg.CHANGE_APPEARANCE,
    payload: stats
  };
}

function _setPregStats(stats) {
  return {
    type: PlayerMsg.SET_PREG_STATS,
    payload: stats
  };
}

function _changePregStats(stats) {
  return {
    type: PlayerMsg.CHANGE_PREG_STATS,
    payload: stats
  };
}

function _setHair(stats) {
  return {
    type: PlayerMsg.SET_HAIR,
    payload: stats
  };
}

export const setPlayerAppearance = stats =>
  store.dispatch(_setPlayerAppearance(stats));

export const changePlayerAppearance = stats =>
  store.dispatch(_changePlayerAppearance(stats));

export const setPregStats = stats => store.dispatch(_setPregStats(stats));
export const changePregStats = stats => store.dispatch(_changePregStats(stats));
export const setHair = stats => store.dispatch(_setHair(stats));
