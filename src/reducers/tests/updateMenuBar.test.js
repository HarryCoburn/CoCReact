import updateMenuBar from "../updateMenuBar";
import { Menus } from "../../scenes/menus.js";

let buttonState = {
  Buttons: {
    byID: {},
    upperIDs: []
  }
};

describe("Update Upper Menu Bar", () => {
  it("should return the initial state from empty start", () => {
    expect(updateMenuBar(buttonState, [])).toEqual({
      Buttons: {
        byID: {
          main: Menus.main,
          data: Menus.data
        },
        upperIDs: ["main", "data"]
      }
    });
  });

  it("should remove menu correctly", () => {
    expect(updateMenuBar(buttonState, ["main"])).toEqual({
      Buttons: {
        byID: {
          main: Menus.main
        },
        upperIDs: ["main"]
      }
    });
  });

  it("should add menus correctly", () => {
    expect(updateMenuBar(buttonState, ["main", "data", "level"])).toEqual({
      Buttons: {
        byID: {
          main: Menus.main,
          data: Menus.data,
          level: Menus.level
        },
        upperIDs: ["main", "data", "level"]
      }
    });
  });

  it("should do both correctly", () => {
    expect(updateMenuBar(buttonState, ["perks"])).toEqual({
      Buttons: {
        byID: {
          perks: Menus.perks
        },
        upperIDs: ["perks"]
      }
    });
  });

  it("should filter incorrect stat inputs", () => {
    expect(updateMenuBar(buttonState, ["foo", "perks"])).toEqual({
      Buttons: {
        byID: {
          perks: Menus.perks
        },
        upperIDs: ["perks"]
      }
    });
  });

  it("should throw on bad input", () => {
    expect(() => {
      updateMenuBar(buttonState, "foo");
    }).toThrow();
    expect(() => {
      updateMenuBar(buttonState, {});
    }).toThrow();
  });
});
