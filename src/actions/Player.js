import store from "../store/store";
import * as PlayerMsg from "./playerMsg";
import * as CockType from "../symbols/cockType";
import * as Vagina from "../symbols/vaginas";
import BreastCup from "../symbols/breastCup";
import Perks from "../symbols/perks";

/**
 * Sends message to set the hp value to equal the maxiumum
 * @return {object} Redux action
 */
export function _restoreHP() {
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

export function _setPlayerAppearance(stats) {
  return {
    type: PlayerMsg.SET_APPEARANCE,
    payload: stats
  };
}

export function _changePlayerAppearance(stats) {
  return {
    type: PlayerMsg.CHANGE_APPEARANCE,
    payload: stats
  };
}

export function _setPregStats(stats) {
  return {
    type: PlayerMsg.SET_PREG_STATS,
    payload: stats
  };
}

export function _changePregStats(stats) {
  return {
    type: PlayerMsg.CHANGE_PREG_STATS,
    payload: stats
  };
}

export function _setHair(stats) {
  return {
    type: PlayerMsg.SET_HAIR,
    payload: stats
  };
}

export function _setBallsStats(stats) {
  return {
    type: PlayerMsg.SET_BALLS_STATS,
    payload: stats
  };
}

export function _setButtStats(stats) {
  return {
    type: PlayerMsg.SET_BUTT_STATS,
    payload: stats
  };
}

export function _setHipsStats(stats) {
  return {
    type: PlayerMsg.SET_HIPS_STATS,
    payload: stats
  };
}

export function _changeBallsStats(stats) {
  return {
    type: PlayerMsg.CHANGE_BALLS_STATS,
    payload: stats
  };
}

export function _createCock() {
  return {
    type: PlayerMsg.CREATE_COCK,
    payload: { length: 5.5, thickness: 1, type: CockType.HUMAN } // Default cock
  };
}

export function _createBreastRow() {
  return {
    type: PlayerMsg.CREATE_BREAST_ROW,
    payload: {
      // Default breastrow
      number: 2,
      size: BreastCup.FLAT,
      numNipple: 1,
      lactationMultiplier: 0,
      milkFullness: 0,
      fullness: 0,
      fuckable: false,
      nippleCocks: false
    }
  };
}

export function _createVagina() {
  return {
    type: PlayerMsg.CREATE_VAGINA,
    payload: {
      virgin: true,
      wetness: Vagina.WETNESS.NORMAL,
      looseness: Vagina.LOOSENESS.TIGHT,
      clitLength: 0.5,
      recoveryProgress: 0,
      type: Vagina.TYPE.HUMAN,
      fullness: 0,
      labiaPierced: 0,
      labiaPShort: "",
      labiaPLong: "",
      clitPierced: 0,
      clitPShort: "",
      clitPLong: 0
    }
  };
}

export function _changeBreastRow(payload, ind = 0) {
  return {
    type: PlayerMsg.CHANGE_BREAST_ROW,
    payload: payload,
    index: ind
  };
}

export function _setSkin(payload) {
  return {
    type: PlayerMsg.SET_SKIN,
    payload: payload
  };
}

/* ---- */

export const setPlayerAppearance = stats =>
  store.dispatch(_setPlayerAppearance(stats));

export const changePlayerAppearance = stats =>
  store.dispatch(_changePlayerAppearance(stats));

export const setPregStats = stats => store.dispatch(_setPregStats(stats));
export const changePregStats = stats => store.dispatch(_changePregStats(stats));
export const setHair = stats => store.dispatch(_setHair(stats));
export const setBalls = stats => store.dispatch(_setBallsStats(stats));
export const changeBalls = stats => store.dispatch(_changeBallsStats(stats));
export const createCock = () => store.dispatch(_createCock());
export const createBreastRow = () => store.dispatch(_createBreastRow());
export const createVagina = () => store.dispatch(_createVagina());
export const setButt = stats => store.dispatch(_setButtStats(stats));
export const setHips = stats => store.dispatch(_setHipsStats(stats));
export const changeBreasts = (payload, ind) =>
  store.dispatch(_changeBreastRow(payload, ind));
export const setSkin = stats => store.dispatch(_setSkin(stats));

export const hasPerk = perk => {
  return store.getState().engine.perks.some(item => {
    return perk in item;
  });
};
