import * as StatMsg from "./messages/statMsg";

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
    type: StatMsg.SET_STATS,
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
    type: StatMsg.CHANGE_STATS,
    payload
  };
}

export const _hideStats = {
  type: StatMsg.HIDE_STATS
};

export const _showStats = {
  type: StatMsg.SHOW_STATS
};
