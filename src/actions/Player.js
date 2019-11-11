export const STAT_SET = "player/STAT_SET";
export const UPDATE_STATS = "player/UPDATE_STATS";
export const RESTORE_HP = "player/RESTORE_HP";
export const SET_PLAYER_NAME = "player/SET_PLAYER_NAME";

/**
 * Sends message to set a stat to a particular number
 * Payload shape: { strength: 23 }
 * @param {object} payload
 * @return {object} Redux action
 */
export function setStats(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("Player.statChange did not receive an object");
  }
  return {
    type: STAT_SET,
    payload
  };
}

/**
 * Sends message to increase or decrease a stat by a particular number
 * Payload shape: { strength: 8 } or { strength: -19 }
 * @param {object} payload
 * @return {object} Redux action
 */
export function statChange(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("UI.statChange did not receive an object");
  }
  return {
    type: UPDATE_STATS,
    payload
  };
}

/**
 * Sends message to set the hp value to equal the maxiumum
 * @return {object} Redux action
 */
export function restoreHP() {
  return {
    type: RESTORE_HP
  };
}

/**
 * Sends message to set the player name
 * @param {string} name
 * @return {object} Redux action
 */
export function setPlayerName(name) {
  return {
    type: SET_PLAYER_NAME,
    payload: name
  };
}
