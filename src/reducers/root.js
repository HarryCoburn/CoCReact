import { combineReducers } from "redux";
import * as Utils from "../utils";
import * as CoreMsg from "../actions/coreMsg";
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
    case CoreMsg.HIDE_STATS:
      return Utils.updateObject(uiState, { showStats: false });
    case CoreMsg.SHOW_STATS:
      return Utils.updateObject(uiState, { showStats: true });
    case CoreMsg.HIDE_MENU_BAR:
      return Utils.updateObject(uiState, { showMenuBar: false });
    case CoreMsg.SHOW_MENU_BAR:
      return Utils.updateObject(uiState, { showMenuBar: true });
    default:
      return uiState;
  }
}

function outputReducer(output = iOutput, action) {
  switch (action.type) {
    case CoreMsg.UPDATE_VIEW:
      return action.payload;
    default:
      return output;
  }
}

function statsReducer(stats = iStats, action) {
  switch (action.type) {
    case CoreMsg.UPDATE_STATS:
    case CoreMsg.SET_STATS:
    case Player.RESTORE_HP:
      return updateStats(stats, action);
    default:
      return stats;
  }
}

function buttonsReducer(buttons = iButtons, action) {
  switch (action.type) {
    case CoreMsg.UPDATE_BUTTONS:
      return updateLowerButtons(buttons, action);
    case CoreMsg.UPDATE_MENUS:
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
    case CoreMsg.UPDATE_TIME:
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
