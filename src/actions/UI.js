// Here are our actions
export const UPDATE_VIEW = "UPDATE_VIEW";
export const BUTTON_CHANGE = "BUTTON_CHANGE";
export const STAT_CHANGE = "STAT_CHANGE";

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
