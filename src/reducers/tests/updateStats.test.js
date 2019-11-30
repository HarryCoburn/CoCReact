import updateStats from "../updateStats";
import * as Core from "../../actions/messages/coreMsg";
import * as Player from "../../actions/messages/playerMsg";

describe("Update Stat UI Reducer", () => {
  let statState;

  beforeEach(() => {
    statState = {
      stats: {
        strength: {
          value: 50,
          max: 100,
          min: 0
        },
        hp: {
          value: 0,
          max: 100,
          min: 0
        },
        obey: 0
      },
      allIDs: ["strength", "hp", "obey"]
    };
  });
  describe("Player.UPDATE_STATS", () => {
    it("should return the initial state", () => {
      expect(
        updateStats(statState, { type: Core.UPDATE_STATS, payload: {} })
      ).toEqual(statState);
    });

    it("should change by given value", () => {
      statState = updateStats(statState, {
        type: Core.UPDATE_STATS,
        payload: { strength: 50 }
      });
      expect(statState.stats.strength.value).toEqual(100);
      statState = updateStats(statState, {
        type: Core.UPDATE_STATS,
        payload: { strength: -50 }
      });
      expect(statState.stats.strength.value).toEqual(50);
    });

    it("should stay within range", () => {
      statState = updateStats(statState, {
        type: Core.UPDATE_STATS,
        payload: { strength: -51 }
      });
      expect(statState.stats.strength.value).toEqual(0);
      statState = updateStats(statState, {
        type: Core.UPDATE_STATS,
        payload: { strength: 150 }
      });
      expect(statState.stats.strength.value).toEqual(100);
    });

    it("should change a non-object stat value", () => {
      statState = updateStats(statState, {
        type: Core.UPDATE_STATS,
        payload: { obey: 5 }
      });
      expect(statState.stats.obey).toEqual(5);
    });

    it("should set a non-object stat value", () => {
      statState = updateStats(statState, {
        type: Core.SET_STATS,
        payload: { obey: 23 }
      });
      expect(statState.stats.obey).toEqual(23);
    });

    it("should change object stat value that's not 'value'", () => {
      statState = updateStats(statState, {
        type: Core.UPDATE_STATS,
        payload: { strength: { value: -25, max: 200 } }
      });
      expect(statState.stats.strength.value).toEqual(25);
      expect(statState.stats.strength.max).toEqual(300);
    });

    it("should ignore stat parameters that aren't in allIDs", () => {
      statState = updateStats(statState, {
        type: Core.UPDATE_STATS,
        payload: { strength: 50, buffness: 20 }
      });
      expect(statState.stats.strength.value).toEqual(100);
      expect(statState).toEqual({
        stats: {
          strength: {
            value: 100,
            max: 100,
            min: 0
          },
          hp: {
            value: 0,
            max: 100,
            min: 0
          },
          obey: 0
        },
        allIDs: ["strength", "hp", "obey"]
      });
    });

    it("should throw exception if an object isn't passed correctly", () => {
      expect(() => {
        updateStats(statState, {
          type: Player.UPDATE_STATS,
          payload: "Not an object"
        });
      }).toThrow();
    });
  });
  describe("Player.RESTORE_HP", () => {
    it("should restore HP to max", () => {
      statState = updateStats(statState, { type: Player.RESTORE_HP });
      expect(statState.stats.hp.value).toEqual(statState.stats.hp.max);
    });
  });
  describe("Player.SET_STATS", () => {
    xit("should explicitly set a value for a stat", () => {
      updateStats(statState, {
        type: Player.SET_STATS,
        payload: { strength: 23 }
      });
      expect(statState.byID.strength.value).toEqual(23);
    });
  });
});
