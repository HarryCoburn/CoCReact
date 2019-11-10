import { combineReducers } from "redux";
import * as Utils from "../utils";
import * as UI from "../actions/UI";
import * as Player from "../actions/Player";
import updateStats from "./updateStats";
import updateLowerButtons from "./updateLowerButtons";
import updateMenuBar from "./updateMenuBar";
import {
  iOutput,
  iTime,
  iUIState,
  iStats,
  iButtons,
  iAppearance
} from "../store/initialState";

function uiReducer(uiState = iUIState, action) {
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

function outputReducer(output = iOutput, action) {
  switch (action.type) {
    case UI.UPDATE_VIEW:
      return action.payload;
    default:
      return output;
  }
}

function statsReducer(stats = iStats, action) {
  switch (action.type) {
    case Player.STAT_CHANGE:
    case Player.STAT_SET:
    case Player.RESTORE_HP:
      return updateStats(stats, action);
    default:
      return stats;
  }
}

function buttonsReducer(buttons = iButtons, action) {
  switch (action.type) {
    case UI.BUTTON_CHANGE:
      return updateLowerButtons(buttons, action);
    case UI.MENU_CHANGE:
      return updateMenuBar(buttons, action);
    default:
      return buttons;
  }
}

function appearanceReducer(appearance = iAppearance, action) {
  switch (action.type) {
    case Player.SET_PLAYER_NAME:
      return { ...appearance, name: action.payload };
    default:
      return appearance;
  }
}

const rootReducer = combineReducers({
  output: outputReducer,
  UI: uiReducer,
  stats: statsReducer,
  buttons: buttonsReducer,
  appearance: appearanceReducer
});

export default rootReducer;
