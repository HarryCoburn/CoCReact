import * as Utils from "../utils";

export default function updateStats(stats, changes) {
  if (changes !== Object(changes)) {
    throw Error(
      "Update Stats received malformed statChanges object: " + changes
    );
  }

  let newStats = Utils.updateObject({}, stats);

  newStats.allIDs.forEach(id => {
    if (changes.hasOwnProperty(id)) {
      newStats.byID[id] = Utils.updateObject(newStats.byID[id], {
        value: changeStat(newStats.byID[id], changes[id])
      });
    }
  });

  return newStats;
}

function changeStat({ value, min, max }, change) {
  let final = value + change;

  if (final < min) return min;
  if (final > max) return max;

  return final;
}
