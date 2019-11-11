// Consider moving all this to Core.js?

// Here are our actions
export const UPDATE_VIEW = "UPDATE_VIEW";
export const BUTTON_CHANGE = "BUTTON_CHANGE";
export const STAT_CHANGE = "STAT_CHANGE";
export const MENU_CHANGE = "MENU_CHANGE";
export const HIDE_STATS = "HIDE_STATS";
export const SHOW_STATS = "SHOW_STATS";
export const HIDE_MENU_BAR = "HIDE_MENU_BAR";
export const SHOW_MENU_BAR = "SHOW_MENU_BAR";
export const UPDATE_TIME = "UPDATE_TIME";

export function updateTime(payload) {
  return {
    type: UPDATE_TIME,
    payload: payload
  };
}

/**
 * Message sender for certain simple UI actions,
 * mostly hiding and showing parts of the UI.
 * @param {const} action
 * @return {object} Redux action
 */
export function actionSelect(action) {
  switch (action) {
    case HIDE_STATS:
      return {
        type: HIDE_STATS
      };
    case SHOW_STATS:
      return {
        type: SHOW_STATS
      };
    case HIDE_MENU_BAR:
      return {
        type: HIDE_MENU_BAR
      };
    case SHOW_MENU_BAR:
      return {
        type: SHOW_MENU_BAR
      };
    default:
      throw Error(
        "Attempted to send an action to UI.actionSelect that isn't in the switch case. Confirm you're sending the right actions!"
      );
  }
}

/**
 * Message sender for updating the text in the view.
 * @param {JSX} payload
 * @return {object} Redux action
 */
export function updateView(payload) {
  return {
    type: UPDATE_VIEW,
    payload
  };
}

/**
 * Message sender for updating the buttons in the lower part of the UI
 * Shape of object: { b1: { // button info } }
 * All buttons must have the nextScene property set!
 * @param {object} payload
 * @return {object} Redux action
 */
export function buttonChange(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("UI.buttonChange did not receive an object");
  }
  //TODO Check for all required button properties before sending message
  return {
    type: BUTTON_CHANGE,
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
export function menuChange(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("UI.menuChange did not receive an object");
  }
  //TODO Check for all required button properties before sending message
  return {
    type: MENU_CHANGE,
    payload
  };
}
