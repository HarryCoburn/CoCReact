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
  }
}

export function updateView(newText) {
  return {
    type: UPDATE_VIEW,
    newText
  };
}

export function buttonChange(newButtons) {
  return {
    type: BUTTON_CHANGE,
    newButtons
  };
}

export function statChange(newStat) {
  return {
    type: STAT_CHANGE,
    newStat
  };
}

export function menuChange(newMenuArr) {
  return {
    type: MENU_CHANGE,
    newMenuArr
  };
}

export function showStats() {
  return {
    type: SHOW_STATS
  };
}
