import { combineReducers } from "redux";
import * as Utils from "../utils";
import * as CoreMsg from "../actions/coreMsg";
import * as PlayerMsg from "../actions/playerMsg";
import * as EngineMsg from "../actions/engineMsg";
import * as EnemyMsg from "../actions/enemyMsg";
import * as InvMsg from "../actions/invMsg";
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

export function outputReducer(output = iOutput, action) {
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
      return Utils.updateObject(output, {
        ...output,
        present: [action.payload]
      });
    case CoreMsg.ADD_TEXT:
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
        present: updateButtons(action, lower.maxButtons)
      });
    case CoreMsg.ADD_BUTTON:
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
    default:
      return lower;
  }
}

export function upperReducer(upper = iUpper, action) {
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
        present: updateButtons(action, upper.maxButtons)
      });
    default:
      return upper;
  }
}

export function statsReducer(stats = iStats, action) {
  switch (action.type) {
    case CoreMsg.UPDATE_STATS:
    case CoreMsg.SET_STATS:
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
    case CoreMsg.UPDATE_TIME:
      return updateTime(time, action);
    default:
      return time;
  }
}

export function engineReducer(engine = iEngineState, action) {
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
    case EngineMsg.PREPARE_PERK:
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
    case CoreMsg.START_COMBAT:
      return {
        ...engine,
        present: {
          ...engine.present,
          inCombat: true
        }
      };
    case EnemyMsg.RESET:
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
    case EnemyMsg.RESET:
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
