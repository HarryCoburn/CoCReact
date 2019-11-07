// Here are our actions
export const UPDATE_VIEW = "UPDATE_VIEW";
export const BUTTON_CHANGE = "BUTTON_CHANGE";
export const STAT_CHANGE = "STAT_CHANGE";
export const MENU_CHANGE = "MENU_CHANGE";
export const HIDE_STATS = "HIDE_STATS";
export const SHOW_STATS = "SHOW_STATS";
export const HIDE_MENU_BAR = "HIDE_MENU_BAR";
export const SHOW_MENU_BAR = "SHOW_MENU_BAR";

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

export function updateView(newText) {
  return {
    type: UPDATE_VIEW,
    newText
  };
}

export function buttonChange(newButtons) {
  if (!(newButtons instanceof Object) || newButtons === undefined) {
    throw Error("UI.buttonChange did not receive an object");
  }
  return {
    type: BUTTON_CHANGE,
    newButtons
  };
}

export function statChange(newStat) {
  if (!(newStat instanceof Object) || newStat === undefined) {
    throw Error("UI.statChange did not receive an object");
  }
  return {
    type: STAT_CHANGE,
    newStat
  };
}

export function menuChange(newMenuButtons) {
  if (!(newMenuButtons instanceof Object) || newMenuButtons === undefined) {
    throw Error("UI.menuChange did not receive an object");
  }
  return {
    type: MENU_CHANGE,
    newMenuButtons
  };
}
