import store from "../../store/store";
import * as Menus from "../menus";

describe("Testing menus.js", () => {
  beforeEach(() => {
    store.dispatch({ type: "RESET_APP" });
  });

  it("should activate the main menu", () => {
    let currText = store.getState().output.present;
    Menus.mainMenu();
    expect(store.getState().UI.present.showMenuBar).toEqual(true);
    expect(store.getState().UI.present.showStats).toEqual(false);
    //expect(Object.keys(store.getState().upper.present)).toEqual();
    expect(store.getState().output.present).toEqual(currText);
    expect(store.getState().engine.past.length).toEqual(1);
  });

  it("should activate the data menu", () => {
    let currText = store.getState().output.present;
    Menus.dataMenu();
    expect(store.getState().UI.present.showStats).toEqual(false);
    //expect(Object.keys(store.getState().upper.present.length)).toEqual(2);
    //expect(Object.keys(store.getState().lower.present.length)).toEqual(1);
    expect(store.getState().output.present).not.toEqual(currText);
    expect(store.getState().engine.past.length).toEqual(1);
  });

  it("should activate the instructions", () => {
    let currText = store.getState().output.present;
    Menus.instructions();
    expect(store.getState().UI.present.showMenuBar).toEqual(false);
    //expect(Object.keys(store.getState().lower.present)).toEqual(["b1"]);
    expect(store.getState().output.present).not.toEqual(currText);
    expect(store.getState().engine.past.length).toEqual(1);
  });
});
