export default function updateStatUI(state, stats) {
  if (stats !== Object(stats)) {
    throw Error(
      "Update Stat UI received malformed stat change object: " + stats
    );
  }
  let newState = Object.assign({}, state, {});
  newState.statsUI.allIDs.forEach(id => {
    if (stats.hasOwnProperty(id)) {
      newState = {
        ...newState,
        statsUI: {
          ...newState.statsUI,
          byID: {
            ...newState.statsUI.byID,
            [id]: {
              ...newState.statsUI.byID[id],
              value: changeStat(newState.statsUI.byID[id].value, stats[id])
            }
          }
        }
      };
    }
  });
  return newState;
}

function changeStat(old, change) {
  let max = 100;
  let min = 0;
  let final = old + change;
  if (final < min) return 0;
  if (final > max) return 100;
  return final;
}
