import * as Core from "../Core";
import * as CoreMsg from "../coreMsg";
import store from "../../store/store";
import * as I from "../../store/initialState";
//import { createStore } from "redux";
//import { rootReducer } from "../../reducers/root";

describe("Testing Core functions", () => {
  let mockStore = {
    output: I.iOutput,
    UI: I.iUIState,
    stats: I.iStats,
    buttons: I.iButtons,
    appearance: I.iAppearance,
    time: I.iTime,
    engine: I.iEngineState
  };

  beforeEach(() => {
    Core.changeMenus({});
    Core.changeButtons({});
  });

  describe("changeStats function", () => {
    it("should return empty action", () => {
      expect(Core.changeStats({})).toEqual({
        type: CoreMsg.UPDATE_STATS,
        payload: {}
      });
      let changedStore = store.getState();
      expect(mockStore.stats).toEqual(changedStore.stats);
    });

    it("should have correct payload", () => {
      expect(Core.changeStats({ strength: 50 })).toEqual({
        type: CoreMsg.UPDATE_STATS,
        payload: { strength: 50 }
      });
      let changedStore = store.getState();
      expect(changedStore.stats.byID.strength.value).toEqual(50);
    });

    it("show throw error with incorrect payload", () => {
      expect(() => {
        Core.changeStats("Bad");
      }).toThrow();
    });
  });

  describe("setStats function", () => {
    it("should return empty action", () => {
      expect(Core.setStats({})).toEqual({
        type: CoreMsg.SET_STATS,
        payload: {}
      });
      let changedStore = store.getState();
      expect(mockStore.stats).toEqual(changedStore.stats);
    });

    it("should have correct payload", () => {
      expect(Core.setStats({ strength: 75 })).toEqual({
        type: CoreMsg.SET_STATS,
        payload: { strength: 75 }
      });
      let changedStore = store.getState();
      expect(changedStore.stats.byID.strength.value).toEqual(75);
    });

    it("show throw error with incorrect payload", () => {
      expect(() => {
        Core.setStats("Bad");
      }).toThrow();
    });
  });

  describe("changeMenus function", () => {
    it("should clear menus", () => {
      expect(Core.changeMenus({})).toEqual({
        type: CoreMsg.UPDATE_MENUS,
        payload: {},
        array: mockStore.buttons.upperIDs
      });
      let changedStore = store.getState();
      expect(changedStore.buttons.byID).toEqual({});
    });

    it("should have correct payload", () => {
      expect(Core.changeMenus({ u1: { label: "Blah" } })).toEqual({
        type: CoreMsg.UPDATE_MENUS,
        payload: { u1: { label: "Blah" } },
        array: mockStore.buttons.upperIDs
      });
      let changedStore = store.getState();
      expect(changedStore.buttons.byID).toEqual({
        u1: { label: "Blah" }
      });
    });

    it("show throw error with incorrect payload", () => {
      expect(() => {
        Core.changeMenus("Bad");
      }).toThrow();
    });
  });
  describe("changeButtons function", () => {
    //Reset buttons

    it("should return empty action", () => {
      expect(Core.changeButtons({})).toEqual({
        type: CoreMsg.UPDATE_BUTTONS,
        payload: {},
        array: mockStore.buttons.lowerIDs
      });
      let changedStore = store.getState();
      expect(changedStore.buttons.byID).toEqual({});
    });

    it("should have correct payload", () => {
      expect(Core.changeButtons({ b1: { label: "Blah" } })).toEqual({
        type: CoreMsg.UPDATE_BUTTONS,
        payload: { b1: { label: "Blah" } },
        array: mockStore.buttons.lowerIDs
      });
      let changedStore = store.getState();
      expect(changedStore.buttons.byID).toEqual({ b1: { label: "Blah" } });
    });

    it("show throw error with incorrect payload", () => {
      expect(() => {
        Core.changeButtons("Bad");
      }).toThrow();
    });
  });

  describe("newText", () => {
    it("should return whatever its sent", () => {
      expect(Core.newText({})).toEqual({
        type: CoreMsg.UPDATE_VIEW,
        payload: {}
      });
      let changedStore = store.getState();
      expect(changedStore.output).toEqual({});
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
      expect(Core.hideStatBar()).toEqual({
        type: CoreMsg.HIDE_STATS
      });
      let changedStore = store.getState();
      expect(changedStore.UI.showStats).toEqual(false);
      expect(Core.showStatBar()).toEqual({
        type: CoreMsg.SHOW_STATS
      });
      changedStore = store.getState();
      expect(changedStore.UI.showStats).toEqual(true);
      expect(Core.hideMenuBar()).toEqual({
        type: CoreMsg.HIDE_MENU_BAR
      });
      changedStore = store.getState();
      expect(changedStore.UI.showMenuBar).toEqual(false);
      expect(Core.showMenuBar()).toEqual({
        type: CoreMsg.SHOW_MENU_BAR
      });
      changedStore = store.getState();
      expect(changedStore.UI.showMenuBar).toEqual(true);
    });
  });

  describe("changeTime function", () => {
    it("should return empty action", () => {
      expect(Core.changeTime({})).toEqual({
        type: CoreMsg.UPDATE_TIME,
        payload: {}
      });
    });

    it("should have correct payload", () => {
      expect(Core.changeTime({ day: 1 })).toEqual({
        type: CoreMsg.UPDATE_TIME,
        payload: { day: 1 }
      });
    });

    it("show throw error with incorrect payload", () => {
      expect(() => {
        Core.changeTime("Bad");
      }).toThrow();
    });
  });

  // To fix after learning how to mock the store
  describe("storeState function", () => {
    let storeState = store.getState();
    xit("should send a stored state", () => {
      expect(Core.storeState()).toEqual({
        type: CoreMsg.STATE_STORE,
        payload: storeState
      });
    });
  });

  // To fix affter learning how to mock the store
  describe("goBack function", () => {
    xit("should go back", () => {
      expect(Core.goBack()).toEqual({
        type: CoreMsg.GO_BACK,
        payload: {}
      });
    });
  });
});
