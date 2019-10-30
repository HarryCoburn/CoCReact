import * as UI from "./UI";

describe("actions", () => {
  it("should create an action to update the view", () => {
    const newText = "This is a new scene";
    const expectedAction = {
      type: UI.UPDATE_VIEW,
      newText
    };
    expect(UI.updateView(newText)).toEqual(expectedAction);
  });

  it("should create an action to update the buttons", () => {
    const newButtons = {};
    const expectedAction = {
      type: UI.BUTTON_CHANGE,
      newButtons
    };
    expect(UI.buttonChange(newButtons)).toEqual(expectedAction);
  });

  it("should create an action to update the stats", () => {
    const newStat = [];
    const expectedAction = {
      type: UI.STAT_CHANGE,
      newStat
    };
    expect(UI.statChange(newStat)).toEqual(expectedAction);
  });
});
