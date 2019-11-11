// Consider moving all this to Core.js?

// Here are our actions
export const UPDATE_VIEW = Symbol("UPDATE_VIEW");
export const UPDATE_BUTTONS = Symbol("UPDATE_BUTTONS");
export const UPDATE_STATS = Symbol("UPDATE_STATS");
export const UPDATE_MENUS = Symbol("UPDATE_MENUS");
export const HIDE_STATS = Symbol("HIDE_STATS");
export const SHOW_STATS = Symbol("SHOW_STATS");
export const HIDE_MENU_BAR = Symbol("HIDE_MENU_BAR");
export const SHOW_MENU_BAR = Symbol("SHOW_MENU_BAR");
export const UPDATE_TIME = Symbol("UPDATE_TIME");

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
    type: UPDATE_BUTTONS,
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
    type: UPDATE_MENUS,
    payload
  };
}
