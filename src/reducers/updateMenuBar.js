import * as Utils from "../utils";
import omit from "lodash.omit";

export default function updateMenuBar(buttons, action) {
  let newMenuButtons = action.payload;
  if (newMenuButtons !== Object(newMenuButtons)) {
    throw Error(
      "Update menu bar Buttons received malformed newMenuButtons object:" +
        newMenuButtons
    );
  }

  let newButtons = Utils.updateObject({}, buttons);

  newButtons.upperIDs.forEach(id => {
    if (newMenuButtons.hasOwnProperty(id)) {
      newButtons.byID[id] = Utils.updateObject(
        newButtons.byID[id],
        newMenuButtons[id]
      );
    } else {
      newButtons.byID = omit(newButtons.byID, id);
    }
  });

  return newButtons;
}
