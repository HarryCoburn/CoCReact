import { combineReducers } from "redux";
import * as Utils from "../utils";
import * as StateMsg from "../actions/messages/stateMsg";
import * as StatMsg from "../actions/messages/statMsg";
import * as PlayerMsg from "../actions/messages/playerMsg";
import * as EngineMsg from "../actions/messages/perkMsg";
import * as EnemyMsg from "../actions/messages/enemyMsg";
import * as InvMsg from "../actions/messages/invMsg";
import * as TimeMsg from "../actions/messages/timeMsg";
import * as OutputMsg from "../actions/messages/outputMsg";
import * as ButtonMsg from "../actions/messages/buttonMsg";
import updateStats from "./updateStats";
import updateTime from "./updateTime";
import updateBodyArr from "./updateBodyArr";
import updateButtons from "./updateButtons";
import Perks from "../symbols/perks";

import {
  iOutput,
  iTime,
  iUIState,
  iStats,
  iLower,
  iUpper,
  iAppearance,
  iEngineState,
  iPregnancy,
  iCocks,
  iBreasts,
  iVaginas,
  iCombat,
  iInventory
} from "../store/initialState";

export function uiReducer(uiState = iUIState, action) {
  switch (action.type) {
    case StateMsg.GO_BACK:
      return Utils.updateObject(uiState, {
        present: uiState.past[uiState.past.length - 1],
        past: uiState.past.slice(0, -1)
      });
    case StateMsg.STATE_STORE: {
      return Utils.updateObject(uiState, {
        ...uiState,
        past: [...uiState.past, uiState.present]
      });
    }
    case StatMsg.HIDE_STATS:
      return Utils.updateObject(uiState, {
        ...uiState,
        present: { ...uiState.present, showStats: false }
      });
    case StatMsg.SHOW_STATS:
      return Utils.updateObject(uiState, {
        ...uiState,
        present: { ...uiState.present, showStats: true }
      });
    case ButtonMsg.HIDE_MENU_BAR:
      return Utils.updateObject(uiState, {
        ...uiState,
        present: { ...uiState.present, showMenuBar: false }
      });
    case ButtonMsg.SHOW_MENU_BAR:
      return Utils.updateObject(uiState, {
        ...uiState,
        present: { ...uiState.present, showMenuBar: true }
      });
    default:
      return uiState;
  }
}

export function outputReducer(output = iOutput, action) {
  switch (action.type) {
    case StateMsg.GO_BACK:
      return Utils.updateObject(output, {
        present: output.past[output.past.length - 1],
        past: output.past.slice(0, -1)
      });

    case StateMsg.STATE_STORE: {
      return Utils.updateObject(output, {
        ...output,
        past: [...output.past, output.present]
      });
    }
    case OutputMsg.CHANGE_TEXT:
      return Utils.updateObject(output, {
        ...output,
        present: [action.payload]
      });
    case OutputMsg.ADD_TEXT:
      return Utils.updateObject(output, {
        ...output,
        present: output.present.concat(action.payload)
      });
    default:
      return output;
  }
}

export function lowerReducer(lower = iLower, action) {
  switch (action.type) {
    case StateMsg.GO_BACK:
      return Utils.updateObject(lower, {
        ...lower,
        present: lower.past[lower.past.length - 1],
        past: lower.past.slice(0, -1)
      });
    case StateMsg.STATE_STORE: {
      return Utils.updateObject(lower, {
        ...lower,
        past: [...lower.past, lower.present]
      });
    }
    case ButtonMsg.CHANGE_BUTTONS:
      return Utils.updateObject(lower, {
        ...lower,
        present: updateButtons(action, lower.maxButtons)
      });
    case ButtonMsg.ADD_BUTTON:
      return Utils.updateObject(lower, {
        ...lower,
        present: lower.present.map((button, index) => {
          if (index !== action.payload[0]) {
            return button;
          }
          return {
            ...button,
            label: action.payload[1],
            nextScene: action.payload[2],
            params: action.payload[3]
          };
        })
      });
    case ButtonMsg.REMOVE_BUTTON:
      return Utils.updateObject(lower, {
        ...lower,
        present: lower.present.map((button, ind) => {
          if (ind !== action.payload) {
            return button;
          }
          return {};
        })
      });

    default:
      return lower;
  }
}

export function upperReducer(upper = iUpper, action) {
  switch (action.type) {
    case StateMsg.GO_BACK:
      return Utils.updateObject(upper, {
        ...upper,
        present: upper.past[upper.past.length - 1],
        past: upper.past.slice(0, -1)
      });
    case StateMsg.STATE_STORE: {
      return Utils.updateObject(upper, {
        ...upper,
        past: [...upper.past, upper.present]
      });
    }
    case ButtonMsg.CHANGE_MENUS:
      return Utils.updateObject(upper, {
        ...upper,
        present: updateButtons(action, upper.maxButtons)
      });
    default:
      return upper;
  }
}

export function statsReducer(stats = iStats, action) {
  switch (action.type) {
    case StatMsg.CHANGE_STATS:
    case StatMsg.SET_STATS:
    case PlayerMsg.RESTORE_HP:
      return updateStats(stats, action);
    default:
      return stats;
  }
}

export function appearanceReducer(appearance = iAppearance, action) {
  switch (action.type) {
    case PlayerMsg.SET_PLAYER_NAME:
      return { ...appearance, name: action.payload };
    case PlayerMsg.SET_APPEARANCE:
    case PlayerMsg.CHANGE_APPEARANCE:
      return updateStats(appearance, action);
    case PlayerMsg.SET_HAIR:
      return { ...appearance, hair: updateStats(appearance.hair, action) };
    case PlayerMsg.SET_BUTT_STATS:
      return { ...appearance, butt: updateStats(appearance.butt, action) };
    case PlayerMsg.SET_HIPS_STATS:
      return { ...appearance, hips: updateStats(appearance.hips, action) };
    case PlayerMsg.SET_SKIN:
      return { ...appearance, skin: updateStats(appearance.skin, action) };
    default:
      return appearance;
  }
}

export function timeReducer(time = iTime, action) {
  switch (action.type) {
    case TimeMsg.ADD_TIME:
      return updateTime(time, action);
    default:
      return time;
  }
}

export function engineReducer(engine = iEngineState, action) {
  switch (action.type) {
    case StateMsg.GO_BACK:
      return Utils.updateObject(engine, {
        ...engine,
        present: engine.past[engine.past.length - 1],
        past: engine.past.slice(0, -1)
      });
    case StateMsg.STATE_STORE: {
      return Utils.updateObject(engine, {
        ...engine,
        past: [...engine.past, engine.present]
      });
    }
    //case EngineMsg.GAME_STARTED:
    //  return Utils.updateObject(engine, { gameStarted: true });
    case EngineMsg.PREPARE_PERK_LIST:
      return Utils.updateObject(engine, {
        ...engine,
        present: { ...engine.present, selectedPerk: action.payload }
      });
    case EngineMsg.SET_PERK:
      if (engine.present.selectedPerk === null) {
        return engine;
      }
      return Utils.updateObject(engine, {
        ...engine,
        present: {
          ...engine.present,
          perks: engine.present.perks.concat({
            [engine.present.selectedPerk]:
              Perks.properties[engine.present.selectedPerk]
          }),
          selectedPerk: null
        }
      });
    case EnemyMsg.START_COMBAT:
      return {
        ...engine,
        present: {
          ...engine.present,
          inCombat: true
        }
      };
    case EnemyMsg.END_COMBAT:
      return {
        ...engine,
        present: {
          ...engine.present,
          inCombat: false
        }
      };
    case PlayerMsg.CREATE_STATUS_EFFECT:
      return {
        ...engine,
        present: {
          ...engine.present,
          statuses: engine.present.statuses.concat([action.payload])
        }
      };
    case PlayerMsg.ADD_STATUS_VALUE:
      return {
        ...engine,
        present: {
          ...engine.present,
          statuses: engine.present.statuses.map(status => {
            if (status[0] !== action.status) {
              return status;
            }
            return status.map((item, index) => {
              if (index !== action.param) {
                return item;
              }
              return item + action.change;
            });
          })
        }
      };
    case PlayerMsg.REMOVE_STATUS_EFFECT:
      return {
        ...engine,
        present: {
          ...engine.present,
          statuses: engine.present.statuses.filter(status => {
            return status[0] !== action.payload;
          })
        }
      };
    default:
      return engine;
  }
}

export function pregnancyReducer(pregnancy = iPregnancy, action) {
  switch (action.type) {
    case PlayerMsg.SET_PREG_STATS:
    case PlayerMsg.CHANGE_PREG_STATS:
      return updateStats(pregnancy, action);
    default:
      return pregnancy;
  }
}

export function cocksReducer(cocks = iCocks, action) {
  switch (action.type) {
    case PlayerMsg.SET_BALLS_STATS:
    case PlayerMsg.CHANGE_BALLS_STATS:
      return { ...cocks, balls: updateStats(cocks.balls, action) };
    case PlayerMsg.CREATE_COCK:
      return updateBodyArr(cocks, action);
    default:
      return cocks;
  }
}

export function breastsReducer(breasts = iBreasts, action) {
  switch (action.type) {
    case PlayerMsg.CREATE_BREAST_ROW:
      return updateBodyArr(breasts, action);
    case PlayerMsg.CHANGE_BREAST_ROW:
      return updateBodyArr(breasts, action);
    default:
      return breasts;
  }
}

export function vaginasReducer(vaginas = iVaginas, action) {
  switch (action.type) {
    case PlayerMsg.CREATE_VAGINA:
      return updateBodyArr(vaginas, action);
    default:
      return vaginas;
  }
}

export function combatReducer(combat = iCombat, action) {
  switch (action.type) {
    case EnemyMsg.LOAD_ENEMY:
      return { ...combat, enemy: action.payload };
    case EnemyMsg.APPLY_DAMAGE:
      return {
        ...combat,
        enemy: combat.enemy.map((enemy, i) =>
          i === action.payload.enemyNum
            ? { ...enemy, hp: enemy.hp - action.payload.damage }
            : enemy
        )
      };
    case EnemyMsg.END_COMBAT:
      return {
        ...combat,
        enemy: [],
        playerTurn: true
      };
    case EnemyMsg.CHANGE_TURN:
      return {
        ...combat,
        playerTurn: !combat.playerTurn
      };
    default:
      return combat;
  }
}

export function inventoryReducer(inv = iInventory, action) {
  switch (action.type) {
    case InvMsg.ADD_ITEM_TO_INV:
      console.log(action);
      if (inv.inv.length >= inv.maxSlots) return inv;
      return { ...inv, inv: inv.inv.concat(action.payload) };
    case InvMsg.DROP_ITEM_FROM_INV:
      return {
        ...inv,
        inv: inv.inv.filter((_, idx) => {
          return idx !== action.payload;
        })
      };
    default:
      return inv;
  }
}

const appReducer = combineReducers({
  output: outputReducer,
  UI: uiReducer,
  stats: statsReducer,
  lower: lowerReducer,
  upper: upperReducer,
  appearance: appearanceReducer,
  time: timeReducer,
  engine: engineReducer,
  pregnancy: pregnancyReducer,
  cocks: cocksReducer,
  breasts: breastsReducer,
  vaginas: vaginasReducer,
  combat: combatReducer,
  inv: inventoryReducer
});

export const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }

  return appReducer(state, action);
};
