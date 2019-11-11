export const RESTORE_HP = Symbol("player/RESTORE_HP");
export const SET_PLAYER_NAME = Symbol("player/SET_PLAYER_NAME");

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
