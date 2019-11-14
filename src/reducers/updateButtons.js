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
      newButtons.byID.present[id] = Utils.updateObject(
        newButtons.byID.present[id],
        newLowerButtons[id]
      );
    } else {
      newButtons.byID.present = omit(newButtons.byID.present, id);
    }
  });

  return newButtons;
}
