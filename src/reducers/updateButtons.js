const updateButtons = action => {
  if (action.payload === undefined) return [];

  let buttons = action.payload.map((item, ind, arr) => {
    console.log(item);
    if (item === undefined) {
      return item;
    }
    return {
      label: item[0],
      nextScene: item[1],
      params: item[2],
      toolTip: item[3]
    };
  });
  return buttons;
};

export default updateButtons;
