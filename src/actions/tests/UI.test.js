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
    const payload = "This is a new scene";
    const expectedAction = {
      type: UI.UPDATE_VIEW,
      payload
    };
    expect(UI.updateView(payload)).toEqual(expectedAction);
  });

  it("should create an action to update the lower buttons", () => {
    const payload = {};
    const badNewButtons = "Bad buttons!";
    const expectedAction = {
      type: UI.UPDATE_BUTTONS,
      payload
    };
    expect(UI.buttonChange(payload)).toEqual(expectedAction);
    expect(() => {
      UI.buttonChange(badNewButtons);
    }).toThrow();
  });

  it("should create an action to update the upper menu bar", () => {
    const payload = {};
    const badMenuNonArr = "Bad Array";
    const expectedAction = {
      type: UI.UPDATE_MENUS,
      payload
    };
    expect(UI.menuChange(payload)).toEqual(expectedAction);
    expect(() => {
      UI.menuChange(badMenuNonArr);
    }).toThrow();
  });
});
