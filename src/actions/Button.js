import * as ButtonMsg from "./messages/buttonMsg";
import { validate, typedef } from "bycontract";

typedef("#buttonArr", [
  "number",
  "string",
  "function|string",
  "array=",
  "string="
]);

/**
 * Message sender for updating the buttons in the lower part of the UI
 * Shape of object: { b1: { // button info } }
 * All buttons must have the nextScene property set!
 * @param {Array.<#buttonArr>|undefined} payload
 * @return {object} Redux action
 */
export function _changeButtons(payload) {
  validate(payload, "#buttonArr[]|undefined");
  return {
    type: ButtonMsg.CHANGE_BUTTONS,
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
export function _changeMenus(payload) {
  validate(payload, "#buttonArr[]|undefined");
  return {
    type: ButtonMsg.CHANGE_MENUS,
    payload
  };
}

export function _addButton(ind, label, func, param, tooltip) {
  validate(arguments, "#buttonArr");
  return {
    type: ButtonMsg.ADD_BUTTON,
    payload: [ind, label, func, param, tooltip]
  };
}

export function _removeButton(ind) {
  validate(arguments, "number");
  return { type: ButtonMsg.REMOVE_BUTTON, payload: ind };
}

export const _hideMenuBar = {
  type: ButtonMsg.HIDE_MENU_BAR
};

export const _showMenuBar = {
  type: ButtonMsg.SHOW_MENU_BAR
};
