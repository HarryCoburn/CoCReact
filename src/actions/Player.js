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
