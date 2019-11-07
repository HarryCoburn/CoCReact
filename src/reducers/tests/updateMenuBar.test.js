import updateMenuBar from "../updateMenuBar";
import { Menus } from "../../scenes/menus.js";

let buttonState = { byID: {}, upperIDs: ["b1", "b2", "b3"] };

describe("Update Upper Menu Bar", () => {
  it("should return the initial state from empty start", () => {
    expect(updateMenuBar(buttonState, {})).toEqual({
      byID: {},
      upperIDs: ["b1", "b2", "b3"]
    });
  });

  it("should add menu correctly", () => {
    expect(updateMenuBar(buttonState, { b1: Menus.main })).toEqual({
      byID: {
        b1: Menus.main
      },
      upperIDs: ["b1", "b2", "b3"]
    });
  });

  it("should delete menus correctly", () => {
    expect(updateMenuBar(buttonState, {})).toEqual({
      byID: {},
      upperIDs: ["b1", "b2", "b3"]
    });
  });

  it("should replace menus correctly", () => {
    expect(updateMenuBar(buttonState, { b1: Menus.perks })).toEqual({
      byID: {
        b1: Menus.perks
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
