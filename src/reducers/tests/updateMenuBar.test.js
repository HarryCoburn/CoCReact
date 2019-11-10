import updateMenuBar from "../updateMenuBar";
import * as UI from "../../actions/UI";

let buttonState = { byID: {}, upperIDs: ["b1", "b2", "b3"] };

describe("Update Upper Menu Bar", () => {
  it("should return the initial state from empty start", () => {
    expect(
      updateMenuBar(buttonState, { action: UI.MENU_CHANGE, payload: {} })
    ).toEqual({
      byID: {},
      upperIDs: ["b1", "b2", "b3"]
    });
  });

  it("should add menu correctly", () => {
    expect(
      updateMenuBar(buttonState, {
        action: UI.MENU_CHANGE,
        payload: { b1: { label: "main" } }
      })
    ).toEqual({
      byID: {
        b1: { label: "main" }
      },
      upperIDs: ["b1", "b2", "b3"]
    });
  });

  it("should delete menus correctly", () => {
    expect(
      updateMenuBar(buttonState, { action: UI.MENU_CHANGE, payload: {} })
    ).toEqual({
      byID: {},
      upperIDs: ["b1", "b2", "b3"]
    });
  });

  it("should replace menus correctly", () => {
    updateMenuBar(buttonState, {
      action: UI.MENU_CHANGE,
      payload: { b1: { label: "main" } }
    });
    expect(
      updateMenuBar(buttonState, {
        action: UI.MENU_CHANGE,
        payload: { b1: { label: "perks" } }
      })
    ).toEqual({
      byID: {
        b1: { label: "perks" }
      },
      upperIDs: ["b1", "b2", "b3"]
    });
  });

  it("should throw on bad input", () => {
    expect(() => {
      updateMenuBar(buttonState, "foo");
    }).toThrow();
  });
});
