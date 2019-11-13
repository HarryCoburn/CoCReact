import * as Utils from "../utils";
import omit from "lodash.omit";

export default function updateButtons(buttons, action) {
  let newLowerButtons = action.payload;
  let buttonArray = action.array;
  if (newLowerButtons !== Object(newLowerButtons)) {
    throw Error(
      "Update Lower Buttons received malformed action payload:" +
        newLowerButtons
    );
  }

  let newButtons = Utils.updateObject({}, buttons);

  buttonArray.forEach(id => {
    if (newLowerButtons.hasOwnProperty(id)) {
      newButtons.byID[id] = Utils.updateObject(
        newButtons.byID[id],
        newLowerButtons[id]
      );
    } else {
      newButtons.byID = omit(newButtons.byID, id);
    }
  });

  return newButtons;
}
