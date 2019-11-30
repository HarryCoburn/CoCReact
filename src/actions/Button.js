import store from "../store/store";
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
 * @param {Array.<#buttonArr>} payload
 * @return {object} Redux action
 */
export function _changeButton(payload) {
  validate(payload, "#buttonArr[]");
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
  return {
    type: ButtonMsg.CHANGE_MENUS,
    payload
  };
}

export function _addButton(ind, label, func, param) {
  return {
    type: ButtonMsg.ADD_BUTTON,
    payload: [ind, label, func, param]
  };
}

export function _removeButton(ind) {
  return { type: ButtonMsg.REMOVE_BUTTON, payload: ind };
}
