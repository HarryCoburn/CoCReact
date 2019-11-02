import initialState from "../store/initialState";
import * as UI from "../actions/UI";
import updateStatUI from "./updateStatUI";
import updateLowerButtonUI from "./updateLowerButtonUI";

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
