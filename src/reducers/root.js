import { combineReducers } from "redux";
import * as Utils from "../utils";
import * as Core from "../actions/Core";
import * as Player from "../actions/Player";
import updateStats from "./updateStats";
import updateLowerButtons from "./updateLowerButtons";
import updateMenuBar from "./updateMenuBar";
import updateTime from "./updateTime";
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
    case Core.HIDE_STATS:
      return Utils.updateObject(uiState, { showStats: false });
    case Core.SHOW_STATS:
      return Utils.updateObject(uiState, { showStats: true });
    case Core.HIDE_MENU_BAR:
      return Utils.updateObject(uiState, { showMenuBar: false });
    case Core.SHOW_MENU_BAR:
      return Utils.updateObject(uiState, { showMenuBar: true });
    default:
      return uiState;
  }
}

function outputReducer(output = iOutput, action) {
  switch (action.type) {
    case Core.UPDATE_VIEW:
      return action.payload;
    default:
      return output;
  }
}

function statsReducer(stats = iStats, action) {
  switch (action.type) {
    case Player.UPDATE_STATS:
    case Player.SET_STATS:
    case Player.RESTORE_HP:
      return updateStats(stats, action);
    default:
      return stats;
  }
}

function buttonsReducer(buttons = iButtons, action) {
  switch (action.type) {
    case Core.UPDATE_BUTTONS:
      return updateLowerButtons(buttons, action);
    case Core.UPDATE_MENUS:
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

function timeReducer(time = iTime, action) {
  switch (action.type) {
    case Core.UPDATE_TIME:
      return updateTime(time, action);
    default:
      return time;
  }
}

const rootReducer = combineReducers({
  output: outputReducer,
  UI: uiReducer,
  stats: statsReducer,
  buttons: buttonsReducer,
  appearance: appearanceReducer,
  time: timeReducer
});

export default rootReducer;
