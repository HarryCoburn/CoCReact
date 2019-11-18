import * as Utils from "../utils";
import * as PlayerMsg from "../actions/playerMsg";
import * as CoreMsg from "../actions/coreMsg";

export default function updateStats(stats, action) {
  // Extract the type
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
    // Go through allIDs
    if (changes.hasOwnProperty(id)) {
      //Does changes have it?
      if (Utils.types.get(newStats.stats[id]) === Utils.types.object) {
        // Check if stats is an object
        if (
          newStats.stats[id].hasOwnProperty("value") &&
          Utils.types.get(changes[id]) !== Utils.types.object
        ) {
          // If value exists in stats and we're not receiving an explicit object, use shorthand to update stat value
          newStats.stats[id] = Utils.updateObject(newStats.stats[id], {
            value: statChoose(newStats.stats[id], changes[id], type)
          });
        } else {
          //It either doesn't have value or it's an object change. Check for everything
          for (let key in newStats.stats[id]) {
            if (changes[id].hasOwnProperty(key)) {
              newStats.stats[id][key] = statChoose(
                { value: newStats.stats[id][key] },
                changes[id][key],
                type,
                key
              );
            }
          }
        }
      } else {
        // The stat we're changing is not an object, update it directly.
        newStats.stats[id] = statChoose(
          { value: newStats.stats[id] },
          changes[id],
          type
        );
      }
    }
  });

  return newStats;
}

function statChoose(stat, change, type, key) {
  switch (type) {
    case CoreMsg.UPDATE_STATS:
    case PlayerMsg.CHANGE_APPEARANCE:
    case PlayerMsg.CHANGE_PREG_STATS:
    case PlayerMsg.CHANGE_BALLS_STATS:
      return changeStat(stat, change, key);
    case CoreMsg.SET_STATS:
    case PlayerMsg.SET_APPEARANCE:
    case PlayerMsg.SET_HAIR:
    case PlayerMsg.SET_BUTT_STATS:
    case PlayerMsg.SET_HIPS_STATS:
    case PlayerMsg.SET_PREG_STATS:
    case PlayerMsg.SET_BALLS_STATS:
    case PlayerMsg.SET_SKIN:
      return change;
    default:
      throw Error("Received bad type in statChoose: " + type);
  }
}

function changeStat({ value, min = 0, max = 100 }, change, key) {
  if (key === "max" || key === "min") {
    let final = value + change;
    return final;
  }

  let final = value + change;

  if (final < min) return min;
  if (final > max) return max;

  return final;
}

function playerHPToMax(stats) {
  return Utils.updateObject(stats, {
    ...stats,
    stats: {
      ...stats.stats,
      hp: {
        ...stats.stats.hp,
        value: stats.stats.hp.max
      }
    }
  });
}
