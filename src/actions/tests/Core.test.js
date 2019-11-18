import * as Core from "../Core";
import * as CoreMsg from "../coreMsg";
import * as I from "../../store/initialState";
import { createStore } from "redux";
import { rootReducer } from "../../reducers/root";

describe("Testing Core functions", () => {
  describe("changeStats function", () => {
    it("should return empty action", () => {
      const store = createStore(rootReducer);
      const stat = {};
      const action = Core._statChange(stat);
      store.dispatch(action);
      const actual = store.getState().stats;
      const expected = I.iStats;
      expect(actual).toEqual(expected);
    });

    it("should have correct payload", () => {
      const store = createStore(rootReducer);
      const stat = { strength: 50 };
      const action = Core._statChange(stat);
      store.dispatch(action);
      const actual = store.getState().stats.stats.strength.value;
      const expected = stat.strength;
      expect(actual).toEqual(expected);
    });

    it("show throw error with incorrect payload", () => {
      expect(() => {
        Core.changeStats("Bad");
      }).toThrow();
    });
  });

  describe("setStats function", () => {
    it("should return empty action", () => {
      const store = createStore(rootReducer);
      const stat = {};
      const action = Core._setStats(stat);
      store.dispatch(action);
      const actual = store.getState().stats;
      const expected = I.iStats;
      expect(actual).toEqual(expected);
    });

    it("should have correct payload", () => {
      const store = createStore(rootReducer);
      const stat = { strength: 75 };
      const action = Core._setStats(stat);
      store.dispatch(action);
      const actual = store.getState().stats.stats.strength.value;
      const expected = stat.strength;
      expect(actual).toEqual(expected);
    });

    it("show throw error with incorrect payload", () => {
      expect(() => {
        Core.setStats("Bad");
      }).toThrow();
    });
  });

  describe("changeMenus function", () => {
    it("should clear menus", () => {
      const store = createStore(rootReducer);
      const empty = [];
      const action = Core._menuChange(empty);
      store.dispatch(action);
      const actual = store.getState().upper.present;
      const expected = {};
      expect(actual).toEqual(expected);
    });

    it("should have correct payload", () => {
      const store = createStore(rootReducer);
      const menus = [["Blah"]];
      const action = Core._menuChange(menus);
      store.dispatch(action);
      const actual = store.getState().upper.present;
      const expected = { u1: { label: "Blah" } };
      expect(actual).toEqual(expected);
    });

    it("show throw error with incorrect payload", () => {
      expect(() => {
        Core.changeMenus("Bad");
      }).toThrow();
    });
  });

  describe("changeButtons function", () => {
    it("should clear buttons", () => {
      const store = createStore(rootReducer);
      const empty = [];
      const action = Core._buttonChange(empty);
      store.dispatch(action);
      const actual = store.getState().lower.present;
      const expected = {};
      expect(actual).toEqual(expected);
    });

    it("should have correct payload", () => {
      const store = createStore(rootReducer);
      const buttons = [["Blah"]];
      const action = Core._buttonChange(buttons);
      store.dispatch(action);
      const actual = store.getState().lower.present;
      const expected = { b1: { label: "Blah" } };
      expect(actual).toEqual(expected);
    });

    it("show throw error with incorrect payload", () => {
      expect(() => {
        Core.changeButtons("Bad");
      }).toThrow();
    });
  });

  describe("newText", () => {
    it("should return whatever its sent", () => {
      const store = createStore(rootReducer);
      const text = "Foo!";
      const action = Core._updateView(text);
      store.dispatch(action);
      const actual = store.getState().output.present;
      const expected = text;
      expect(actual).toEqual(expected);
    });
    it("should throw on null or undefined", () => {
      expect(() => {
        Core.newText(null);
      }).toThrow();
      expect(() => {
        Core.newText(undefined);
      }).toThrow();
    });
  });

  describe("Show/Hide", () => {
    it("Should send show and hide properly", () => {
      const store = createStore(rootReducer);
      let action = {
        type: CoreMsg.SHOW_STATS
      };
      store.dispatch(action);
      let actual = store.getState().UI.present.showStats;
      let expected = true;
      expect(actual).toEqual(expected);

      action = {
        type: CoreMsg.HIDE_STATS
      };
      store.dispatch(action);
      actual = store.getState().UI.present.showStats;
      expected = false;
      expect(actual).toEqual(expected);

      action = {
        type: CoreMsg.HIDE_MENU_BAR
      };
      store.dispatch(action);
      actual = store.getState().UI.present.showMenuBar;
      expected = false;
      expect(actual).toEqual(expected);

      action = {
        type: CoreMsg.SHOW_MENU_BAR
      };
      store.dispatch(action);
      actual = store.getState().UI.present.showMenuBar;
      expected = true;
      expect(actual).toEqual(expected);
    });
  });

  describe("changeTime function", () => {
    it("should return empty action", () => {
      const store = createStore(rootReducer);
      const empty = {};
      const action = Core._updateTime(empty);
      store.dispatch(action);
      const actual = store.getState().time;
      const expected = I.iTime;
      expect(actual).toEqual(expected);
    });

    it("should update time", () => {
      const store = createStore(rootReducer);
      const time = { day: 1 };
      const action = Core._updateTime(time);
      store.dispatch(action);
      const actual = store.getState().time.day;
      const expected = time.day;
      expect(actual).toEqual(expected);
    });

    it("show throw error with incorrect payload", () => {
      expect(() => {
        Core.changeTime("Bad");
      }).toThrow();
    });
  });

  // To fix after learning how to mock the store
  describe("saving and restoring states", () => {
    it("should save and restore state", () => {
      const store = createStore(rootReducer);
      let action = Core._updateView("Foo");
      store.dispatch(action);

      action = Core._stateStore();
      store.dispatch(action);

      action = Core._updateView("Bar");
      store.dispatch(action);

      let currState = store.getState().output.present;
      let prevState = store.getState().output.past[0];

      expect(currState).toEqual("Bar");
      expect(prevState).toEqual("Foo");

      action = Core._goBack();
      store.dispatch(action);
      currState = store.getState().output.present;
      expect(currState).toEqual("Foo");
    });
  });
});
