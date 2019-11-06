export default function updateLowerButtonUI(state, buttons) {
  let newState = Object.assign({}, state, {});

  if (Object.keys(buttons).length === 0 && buttons instanceof Object) {
    newState.Buttons.lowerIDs.forEach(id => {
      delete newState.Buttons.byID[id];
    });
    return newState;
  }

  // Cycle through buttons and update state
  newState.Buttons.lowerIDs.forEach(id => {
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
