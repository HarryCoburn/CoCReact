import { combineReducers } from "redux";
import * as Utils from "../utils";
import * as CoreMsg from "../actions/coreMsg";
import * as PlayerMsg from "../actions/playerMsg";
import * as EngineMsg from "../actions/engineMsg";
import updateStats from "./updateStats";
import updateTime from "./updateTime";

import {
  iOutput,
  iTime,
  iUIState,
  iStats,
  iLower,
  iUpper,
  iAppearance,
  iEngineState
} from "../store/initialState";

function uiReducer(uiState = iUIState, action) {
  switch (action.type) {
    case CoreMsg.GO_BACK:
      return Utils.updateObject(uiState, {
        present: uiState.past[uiState.past.length - 1],
        past: uiState.past.slice(0, -1)
      });
    case CoreMsg.STATE_STORE: {
      return Utils.updateObject(uiState, {
        ...uiState,
        past: [...uiState.past, uiState.present]
      });
    }
    case CoreMsg.HIDE_STATS:
      return Utils.updateObject(uiState, {
        ...uiState,
        present: { ...uiState.present, showStats: false }
      });
    case CoreMsg.SHOW_STATS:
      return Utils.updateObject(uiState, {
        ...uiState,
        present: { ...uiState.present, showStats: true }
      });
    case CoreMsg.HIDE_MENU_BAR:
      return Utils.updateObject(uiState, {
        ...uiState,
        present: { ...uiState.present, showMenuBar: false }
      });
    case CoreMsg.SHOW_MENU_BAR:
      return Utils.updateObject(uiState, {
        ...uiState,
        present: { ...uiState.present, showMenuBar: true }
      });
    default:
      return uiState;
  }
}

function outputReducer(output = iOutput, action) {
  switch (action.type) {
    case CoreMsg.GO_BACK:
      return Utils.updateObject(output, {
        present: output.past[output.past.length - 1],
        past: output.past.slice(0, -1)
      });

    case CoreMsg.STATE_STORE: {
      return Utils.updateObject(output, {
        ...output,
        past: [...output.past, output.present]
      });
    }
    case CoreMsg.UPDATE_VIEW:
      return Utils.updateObject(output, { ...output, present: action.payload });
    default:
      return output;
  }
}

function statsReducer(stats = iStats, action) {
  switch (action.type) {
    case CoreMsg.UPDATE_STATS:
    case CoreMsg.SET_STATS:
    case PlayerMsg.RESTORE_HP:
      return updateStats(stats, action);
    default:
      return stats;
  }
}

function lowerReducer(lower = iLower, action) {
  switch (action.type) {
    case CoreMsg.GO_BACK:
      return Utils.updateObject(lower, {
        ...lower,
        present: lower.past[lower.past.length - 1],
        past: lower.past.slice(0, -1)
      });
    case CoreMsg.STATE_STORE: {
      return Utils.updateObject(lower, {
        ...lower,
        past: [...lower.past, lower.present]
      });
    }
    case CoreMsg.UPDATE_BUTTONS:
      return Utils.updateObject(lower, {
        ...lower,
        present: action.payload
      });
    default:
      return lower;
  }
}

function upperReducer(upper = iUpper, action) {
  switch (action.type) {
    case CoreMsg.GO_BACK:
      return Utils.updateObject(upper, {
        ...upper,
        present: upper.past[upper.past.length - 1],
        past: upper.past.slice(0, -1)
      });
    case CoreMsg.STATE_STORE: {
      return Utils.updateObject(upper, {
        ...upper,
        past: [...upper.past, upper.present]
      });
    }
    case CoreMsg.UPDATE_MENUS:
      return Utils.updateObject(upper, {
        ...upper,
        present: action.payload
      });
    default:
      return upper;
  }
}

function appearanceReducer(appearance = iAppearance, action) {
  switch (action.type) {
    case PlayerMsg.SET_PLAYER_NAME:
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

function engineReducer(engine = iEngineState, action) {
  switch (action.type) {
    case CoreMsg.GO_BACK:
      return Utils.updateObject(engine, {
        ...engine,
        present: engine.past[engine.past.length - 1],
        past: engine.past.slice(0, -1)
      });
    case CoreMsg.STATE_STORE: {
      return Utils.updateObject(engine, {
        ...engine,
        past: [...engine.past, engine.present]
      });
    }
    case EngineMsg.GAME_STARTED:
      return Utils.updateObject(engine, { gameStarted: true });
    default:
      return engine;
  }
}

const rootReducer = combineReducers({
  output: outputReducer,
  UI: uiReducer,
  stats: statsReducer,
  lower: lowerReducer,
  upper: upperReducer,
  appearance: appearanceReducer,
  time: timeReducer,
  engine: engineReducer
});

export default rootReducer;
