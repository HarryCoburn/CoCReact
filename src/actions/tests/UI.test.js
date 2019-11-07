import * as UI from "../UI";

describe("actions", () => {
  it("should send show/hide actions correctly for create an action to show the stat bar", () => {
    expect(UI.actionSelect(UI.HIDE_STATS)).toEqual({ type: UI.HIDE_STATS });
    expect(UI.actionSelect(UI.SHOW_STATS)).toEqual({ type: UI.SHOW_STATS });
    expect(UI.actionSelect(UI.HIDE_MENU_BAR)).toEqual({
      type: UI.HIDE_MENU_BAR
    });
    expect(UI.actionSelect(UI.SHOW_MENU_BAR)).toEqual({
      type: UI.SHOW_MENU_BAR
    });
    expect(() => {
      UI.actionSelect("BadAction");
    }).toThrow();
  });

  it("should create an action to update the view", () => {
    const newText = "This is a new scene";
    const expectedAction = {
      type: UI.UPDATE_VIEW,
      newText
    };
    expect(UI.updateView(newText)).toEqual(expectedAction);
  });

  it("should create an action to update the lower buttons", () => {
    const newButtons = {};
    const badNewButtons = "Bad buttons!";
    const expectedAction = {
      type: UI.BUTTON_CHANGE,
      newButtons
    };
    expect(UI.buttonChange(newButtons)).toEqual(expectedAction);
    expect(() => {
      UI.buttonChange(badNewButtons);
    }).toThrow();
  });

  it("should create an action to update the upper menu bar", () => {
    const newMenuButtons = {};
    const badMenuNonArr = "Bad Array";
    const expectedAction = {
      type: UI.MENU_CHANGE,
      newMenuButtons
    };
    expect(UI.menuChange(newMenuButtons)).toEqual(expectedAction);
    expect(() => {
      UI.menuChange(badMenuNonArr);
    }).toThrow();
  });

  it("should create an action to update the stats", () => {
    const newStat = {};
    const badNewStat = "Bad stats!";
    const expectedAction = {
      type: UI.STAT_CHANGE,
      newStat
    };
    expect(UI.statChange(newStat)).toEqual(expectedAction);
    expect(() => {
      UI.statChange(badNewStat);
    }).toThrow();
  });
});
