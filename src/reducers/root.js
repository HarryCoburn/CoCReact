import initialState from "../store/initialState";
import * as UI from "../actions/UI";
import updateStatUI from "./updateStatUI";
import updateLowerButtonUI from "./updateLowerButtonUI";
import updateMenuBar from "./updateMenuBar";

// And an initial reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UI.HIDE_STATS:
      return Object.assign({}, state, {
        ...state,
        UI: {
          ...state.UI,
          showStats: false
        }
      });
    case UI.SHOW_STATS:
      return Object.assign({}, state, {
        ...state,
        UI: {
          ...state.UI,
          showStats: true
        }
      });
    case UI.UPDATE_VIEW:
      return Object.assign({}, state, {
        output: action.newText
      });
    case UI.BUTTON_CHANGE:
      return updateLowerButtonUI(state, action.newButtons);
    case UI.STAT_CHANGE:
      return updateStatUI(state, action.newStat);
    case UI.MENU_CHANGE:
      return updateMenuBar(state, action.newMenuArr);
    default:
      return state;
  }
}

export default rootReducer;
