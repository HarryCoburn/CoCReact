import { validate } from "bycontract";
import * as TimeMsg from "./messages/timeMsg";

const timeType = {
  hour: "number=",
  minute: "number=",
  day: "number="
};

/**
 *
 * @param {object} payload
 * @returns {{payload: object, type: symbol}}
 * @private
 */
export function _addTime(payload) {
  validate(arguments, [timeType]);
  return {
    type: TimeMsg.ADD_TIME,
    payload: payload
  };
}

export function _setTime(payload) {
  validate(arguments, [timeType]);
  return {
    type: TimeMsg.SET_TIME,
    payload: payload
  };
}
