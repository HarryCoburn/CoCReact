import initialState from "../store/initialState";
import * as UI from "../actions/UI";
import updateStats from "./updateStats";
import updateLowerButtons from "./updateLowerButtons";
import updateMenuBar from "./updateMenuBar";
import * as Utils from "../utils";

function uiReducer(uiState, action) {
  switch (action.type) {
    case UI.HIDE_STATS:
      return Utils.updateObject(uiState, { showStats: false });
    case UI.SHOW_STATS:
      return Utils.updateObject(uiState, { showStats: true });
    case UI.HIDE_MENU_BAR:
      return Utils.updateObject(uiState, { showMenuBar: false });
    case UI.SHOW_MENU_BAR:
      return Utils.updateObject(uiState, { showMenuBar: true });
    default:
      return uiState;
  }
}

function outputReducer(output, action) {
  switch (action.type) {
    case UI.UPDATE_VIEW:
      return action.newText;
    default:
      return output;
  }
}

function statsReducer(stats, action) {
  switch (action.type) {
    case UI.STAT_CHANGE:
      return updateStats(stats, action.newStat);
    default:
      return stats;
  }
}

function buttonsReducer(buttons, action) {
  switch (action.type) {
    case UI.BUTTON_CHANGE:
      return updateLowerButtons(buttons, action.newButtons);
    case UI.MENU_CHANGE:
      return updateMenuBar(buttons, action.newMenuButtons);
    default:
      return buttons;
  }
}

export default function rootReducer(state = initialState, action) {
  return {
    output: outputReducer(state.output, action),
    UI: uiReducer(state.UI, action),
    stats: statsReducer(state.stats, action),
    buttons: buttonsReducer(state.buttons, action)
  };
}
