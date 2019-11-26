import * as CoreMsg from "../actions/coreMsg";

const updateButtons = (action, max) => {
  console.log(action);
  if (action.payload === undefined || action.payload === []) return [];

  let newButtons = Array(max);

  action.payload.forEach((item, ind) => {
    let index;
    if (item === undefined) return;
    if (isNaN(item[0])) {
      index = ind;
      item.unshift(index);
    } else {
      index = item[0];
    }

    if (newButtons[index] === undefined) {
      newButtons[index] = {
        label: item[1],
        nextScene: item[2],
        params: item[3],
        toolTip: item[4]
      };
    } else {
      throw Error(
        "updateButtons conflict. For safety, entries either all need indexes or none when passed to updateButtons"
      );
    }
  });

  return newButtons;
};

export default updateButtons;
