export default function updateStatUI(state, stats) {
  let newState = Object.assign({}, state, {});
  state.statsUI.allIDs.forEach(id => {
    if (stats.hasOwnProperty(id)) {
      newState = {
        ...newState,
        statsUI: {
          ...newState.statsUI,
          byID: {
            ...newState.statsUI.byID,
            [id]: {
              ...newState.statsUI.byID[id],
              value: newState.statsUI.byID[id].value + stats[id].change
            }
          }
        }
      };
    }
  });
  return newState;
}
