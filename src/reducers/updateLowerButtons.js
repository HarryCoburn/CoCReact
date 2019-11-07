import * as Utils from "../utils";
import omit from "lodash.omit";

export default function updateLowerButtons(buttons, newLowerButtons) {
  if (newLowerButtons !== Object(newLowerButtons)) {
    throw Error(
      "Update Lower Buttons received malfored newButtons object:" +
        newLowerButtons
    );
  }

  let newButtons = Utils.updateObject({}, buttons);

  newButtons.lowerIDs.forEach(id => {
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
