import { Menus } from "../scenes/menus";

export default function updateMenuBar(state, newMenuArr) {
  if (!Array.isArray(newMenuArr))
    throw Error("Upper menu bar did not receive array of menu names!");

  // Take care of empty case
  if (newMenuArr.length === 0) {
    newMenuArr = ["main", "data"];
  }
  // Filter invalid names
  newMenuArr = newMenuArr.filter(item => item in Menus);

  // Create new state
  let newState = Object.assign({}, state, {});

  // Delete old menus
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
