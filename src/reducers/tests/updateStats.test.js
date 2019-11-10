import updateStats from "../updateStats";
import * as Player from "../../actions/Player";

describe("Update Stat UI Reducer", () => {
  let statState;

  beforeEach(() => {
    statState = {
      byID: {
        strength: {
          value: 50,
          max: 100,
          min: 0
        },
        hp: {
          value: 0,
          max: 100,
          min: 0
        }
      },
      allIDs: ["strength", "hp"]
    };
  });
  describe("Player.STAT_CHANGE", () => {
    it("should return the initial state", () => {
      expect(
        updateStats(statState, { type: Player.STAT_CHANGE, payload: {} })
      ).toEqual(statState);
    });

    it("should change by given value", () => {
      statState = updateStats(statState, {
        type: Player.STAT_CHANGE,
        payload: { strength: 50 }
      });
      expect(statState.byID.strength.value).toEqual(100);
      statState = updateStats(statState, {
        type: Player.STAT_CHANGE,
        payload: { strength: -50 }
      });
      expect(statState.byID.strength.value).toEqual(50);
    });

    it("should stay within range", () => {
      statState = updateStats(statState, {
        type: Player.STAT_CHANGE,
        payload: { strength: -51 }
      });
      expect(statState.byID.strength.value).toEqual(0);
      statState = updateStats(statState, {
        type: Player.STAT_CHANGE,
        payload: { strength: 150 }
      });
      expect(statState.byID.strength.value).toEqual(100);
    });

    it("should ignore stat parameters that aren't in allIDs", () => {
      statState = updateStats(statState, {
        type: Player.STAT_CHANGE,
        payload: { strength: 50, buffness: 20 }
      });
      expect(statState.byID.strength.value).toEqual(100);
      expect(statState).toEqual({
        byID: {
          strength: {
            value: 100,
            max: 100,
            min: 0
          },
          hp: {
            value: 0,
            max: 100,
            min: 0
          }
        },
        allIDs: ["strength", "hp"]
      });
    });

    it("should throw exception if an object isn't passed correctly", () => {
      expect(() => {
        updateStats(statState, {
          type: Player.STAT_CHANGE,
          payload: "Not an object"
        });
      }).toThrow();
    });
  });
  describe("Player.RESTORE_HP", () => {
    it("should restore HP to max", () => {
      statState = updateStats(statState, { type: Player.RESTORE_HP });
      expect(statState.byID.hp.value).toEqual(statState.byID.hp.max);
    });
  });
  describe("Player.STAT_SET", () => {
    it("should explicitly set a value for a stat", () => {
      updateStats(statState, {
        type: Player.STAT_SET,
        payload: { strength: 23 }
      });
      expect(statState.byID.strength.value).toEqual(23);
    });
  });
});
