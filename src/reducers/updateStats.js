import * as Utils from "../utils";
import * as PlayerMsg from "../actions/playerMsg";
import * as CoreMsg from "../actions/coreMsg";

export default function updateStats(stats, action) {
  let type = action.type;

  if (type === PlayerMsg.RESTORE_HP) {
    return playerHPToMax(stats);
  }

  let changes = action.payload;

  if (changes !== Object(changes)) {
    throw Error(
      "Update Stats received malformed statChanges object: " + changes
    );
  }

  let newStats = Utils.updateObject({}, stats);

  newStats.allIDs.forEach(id => {
    if (changes.hasOwnProperty(id)) {
      newStats.byID[id] = Utils.updateObject(newStats.byID[id], {
        value: statChoose(newStats.byID[id], changes[id], type)
      });
    }
  });

  return newStats;
}

function statChoose(stat, change, type) {
  switch (type) {
    case CoreMsg.UPDATE_STATS:
    case PlayerMsg.CHANGE_APPEARANCE:
    case PlayerMsg.CHANGE_PREG_STATS:
    case PlayerMsg.CHANGE_BALLS_STATS:
      return changeStat(stat, change);
    case CoreMsg.SET_STATS:
    case PlayerMsg.SET_APPEARANCE:
    case PlayerMsg.SET_HAIR:
    case PlayerMsg.SET_PREG_STATS:
    case PlayerMsg.SET_BALLS_STATS:
      return change;
    default:
      throw Error("Received bad type in statChoose: " + type);
  }
}

function changeStat({ value, min = 0, max = 100 }, change) {
  let final = value + change;

  if (final < min) return min;
  if (final > max) return max;

  return final;
}

function playerHPToMax(stats) {
  return Utils.updateObject(stats, {
    ...stats,
    byID: {
      ...stats.byID,
      hp: {
        ...stats.byID.hp,
        value: stats.byID.hp.max
      }
    }
  });
}
