import { combineReducers } from "redux";
import * as Utils from "../utils";
import * as CoreMsg from "../actions/coreMsg";
import * as PlayerMsg from "../actions/playerMsg";
import * as EngineMsg from "../actions/engineMsg";
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
  iAppearance,
  iEngineState
} from "../store/initialState";

function uiReducer(uiState = iUIState, action) {
  switch (action.type) {
    case CoreMsg.GO_BACK:
      return Utils.updateObject(uiState, {
        ...action.payload.UI
      });
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
    case CoreMsg.GO_BACK:
      return Utils.updateObject(output, {
        ...action.payload.output
      });
    case CoreMsg.UPDATE_VIEW:
      return action.payload;
    default:
      return output;
  }
}

function statsReducer(stats = iStats, action) {
  switch (action.type) {
    case CoreMsg.GO_BACK:
      return Utils.updateObject(stats, {
        ...action.stats
      });
    case CoreMsg.UPDATE_STATS:
    case CoreMsg.SET_STATS:
    case PlayerMsg.RESTORE_HP:
      return updateStats(stats, action);
    default:
      return stats;
  }
}

function buttonsReducer(buttons = iButtons, action) {
  switch (action.type) {
    case CoreMsg.GO_BACK:
      return Utils.updateObject(buttons, {
        ...action.payload.buttons
      });
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
    case CoreMsg.GO_BACK:
      return Utils.updateObject(appearance, {
        ...action.payload.appearance
      });
    case PlayerMsg.SET_PLAYER_NAME:
      return { ...appearance, name: action.payload };
    default:
      return appearance;
  }
}

function timeReducer(time = iTime, action) {
  switch (action.type) {
    case CoreMsg.GO_BACK:
      return Utils.updateObject(time, {
        ...action.payload.time
      });
    case CoreMsg.UPDATE_TIME:
      return updateTime(time, action);
    default:
      return time;
  }
}

function engineReducer(engine = iEngineState, action) {
  switch (action.type) {
    case CoreMsg.GO_BACK:
      return Utils.updateObject(engine, {
        ...action.payload.engine
      });
    case EngineMsg.GAME_STARTED:
      return Utils.updateObject(engine, { gameStarted: true });
    case CoreMsg.STATE_STORE:
      return Utils.updateObject(engine, { prevState: action.payload });
    default:
      return engine;
  }
}

const rootReducer = combineReducers({
  output: outputReducer,
  UI: uiReducer,
  stats: statsReducer,
  buttons: buttonsReducer,
  appearance: appearanceReducer,
  time: timeReducer,
  engine: engineReducer
});

export default rootReducer;
