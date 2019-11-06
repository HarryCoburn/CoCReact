import * as Utils from "../utils";

export default function updateStats(stats, statChanges) {
  if (statChanges !== Object(statChanges)) {
    throw Error(
      "Update Stat UI received malformed stat change object: " + statChanges
    );
  }

  stats.allIDs.forEach(id => {
    if (statChanges.hasOwnProperty(id)) {
      stats.byID[id] = Utils.updateObject(stats.byID[id], {
        value: changeStat(stats.byID[id], statChanges[id])
      });
    }
  });

  return stats;
}

function changeStat({ value, min, max }, change) {
  let final = value + change;
  if (final < min) return min;
  if (final > max) return max;
  return final;
}
