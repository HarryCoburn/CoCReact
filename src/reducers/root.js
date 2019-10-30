import initialState from "../store/initialState";
import * as UI from "../actions/UI";

function updateStatUI(state, stats) {
  let newState = Object.assign({}, state, {});
  state.statsUI.allIDs.forEach(id => {
    if (stats.hasOwnProperty(id)) {
      newState = {
        ...newState,
        statsUI: {
          ...newState.statsUI,
          byID: {
            ...newState.statsUI.byID,
            [id]: {
              ...newState.statsUI.byID[id],
              value: newState.statsUI.byID[id].value + stats[id].change
            }
          }
        }
      };
    }
  });
  return newState;
}

function updateLowerButtonUI(state, buttons) {
  let newState = Object.assign({}, state, {});
  state.Buttons.lowerIDs.forEach(id => {
    if (buttons.hasOwnProperty(id)) {
      newState = {
        ...newState,
        Buttons: {
          ...newState.Buttons,
          byID: {
            ...newState.Buttons.byID,
            [id]: buttons[id]
          }
        }
      };
    } else {
      delete newState.Buttons.byID[id];
    }
  });

  return newState;
}

// And an initial reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UI.UPDATE_VIEW:
      return Object.assign({}, state, {
        output: action.newText
      });
    case UI.BUTTON_CHANGE:
      return updateLowerButtonUI(state, action.newButtons);
    case UI.STAT_CHANGE:
      return updateStatUI(state, action.newStat);
    default:
      return state;
  }
}

export default rootReducer;
