import * as CoreMsg from "../actions/coreMsg";

const updateButtons = action => {
  let buttonObj = {};
  let buttonPrefix = "";
  if (action.payload === undefined) return buttonObj;
  if (action.type === CoreMsg.UPDATE_BUTTONS) {
    buttonPrefix = "b";
  }
  if (action.type === CoreMsg.UPDATE_MENUS) {
    buttonPrefix = "u";
  }

  action.payload.forEach((item, ind) => {
    if (item !== undefined) {
      buttonObj[buttonPrefix + (ind + 1)] = {
        label: item[0],
        nextScene: item[1],
        params: item[2],
        toolTip: item[3]
      };
    }
  });

  return buttonObj;
};

export default updateButtons;
