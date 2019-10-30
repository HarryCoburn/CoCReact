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

function updateLowerButtonUI(state, buttons) {
  state.lowerButtons.allIDs.map(id => {
    if (buttons.hasOwnProperty(id)) {
      state = {
        ...state,
        lowerButtons: {
          ...state.lowerButtons,
          byID: {
            ...state.lowerButtons.byID,
            [id]: buttons[id]
          }
        }
      };
    } else {
      delete state.lowerButtons.byID[id];
    }
  });

  console.log(state);
  return state;
}

// And an initial reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UI.UPDATE:
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
