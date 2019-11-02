export default function updateLowerButtonUI(state, buttons) {
  let newState = Object.assign({}, state, {});
  state.Buttons.lowerIDs.forEach(id => {
    if (buttons.hasOwnProperty(id)) {
      newState = {
        ...newState,
        Buttons: {
          ...newState.Buttons,
          byID: {
            ...newState.Buttons.byID,
            [id]: buttons[id]
          }
        }
      };
    } else {
      delete newState.Buttons.byID[id];
    }
  });
  return newState;
}
