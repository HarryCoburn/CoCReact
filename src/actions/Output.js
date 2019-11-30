import * as OutputMsg from "./messages/outputMsg";

/**
 * Message sender for updating the text in the view.
 * @param {JSX} payload
 * @return {object} Redux action
 */
export function _updateView(payload) {
  if (payload === undefined || payload === null) {
    throw Error("Core._updateView recevied undefined or null text ouput");
  }
  return {
    type: OutputMsg.CHANGE_TEXT,
    payload
  };
}

export function _addText(payload) {
  if (payload === undefined || payload === null) {
    throw Error("Core._addText recevied undefined or null text ouput");
  }
  return {
    type: OutputMsg.ADD_TEXT,
    payload
  };
}
