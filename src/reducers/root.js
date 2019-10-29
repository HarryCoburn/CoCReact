import initialState from "../store/initialState";
import * as UI from "../actions/UI";

function updateStatUI(state, stat) {
  const statID = stat[0];
  const statMod = stat[1];
  const statToChange = state.statsUI.byID[statID];
  return {
    ...state,
    statsUI: {
      ...state.statsUI,
      byID: {
        ...state.statsUI.byID,
        [statID]: {
          ...statToChange,
          value: statToChange.value + statMod
        }
      }
    }
  };
}

// And an initial reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UI.UPDATE:
      return Object.assign({}, state, {
        output: action.newText
      });
    case UI.BUTTON_CHANGE:
      return Object.assign({}, state, {
        currButtons: action.newButtons
      });
    case UI.STAT_CHANGE:
      return updateStatUI(state, action.newStat);
    default:
      return state;
  }
}

export default rootReducer;
