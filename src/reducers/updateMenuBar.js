import { Menus } from "../scenes/menus";

export default function updateMenuBar(state, newMenuArr) {
  let newState = Object.assign({}, state, {});

  if (newMenuArr.length === 0) {
    newMenuArr = ["main", "data"];
  }

  // Delete menu buttons
  newState.Buttons.upperIDs.forEach(id => {
    delete newState.Buttons.byID[id];
  });

  // Replace array
  newState = {
    ...newState,
    Buttons: {
      ...newState.Buttons,
      upperIDs: newMenuArr
    }
  };

  // Recreate menu with newMenuArr
  newMenuArr.forEach(id => {
    if (Menus[id]) {
      newState = {
        ...newState,
        Buttons: {
          ...newState.Buttons,
          byID: {
            ...newState.Buttons.byID,
            [id]: Menus[id]
          }
        }
      };
    }
  });
  return newState;
}
