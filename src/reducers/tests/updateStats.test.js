import updateStats from "../updateStats";

let statState = {
  byID: {
    strength: {
      value: 0,
      max: 100,
      min: 0
    }
  },
  allIDs: ["strength"]
};

describe("Update Stat UI Reducer", () => {
  it("should return the initial state", () => {
    expect(updateStats(statState, {})).toEqual(statState);
  });

  it("should change by given value", () => {
    statState = updateStats(statState, { strength: 50 });
    expect(statState.byID.strength.value).toEqual(50);
    statState = updateStats(statState, { strength: -50 });
    expect(statState.byID.strength.value).toEqual(0);
  });

  it("should stay within range", () => {
    statState = updateStats(statState, { strength: -50 });
    expect(statState.byID.strength.value).toEqual(0);
    statState = updateStats(statState, { strength: 200 });
    expect(statState.byID.strength.value).toEqual(100);
  });

  it("should ignore stat parameters that aren't in allIDs", () => {
    statState = updateStats(statState, { strength: -50, buffness: 20 });
    expect(statState.byID.strength.value).toEqual(50);
    expect(statState).toEqual({
      byID: {
        strength: {
          value: 50,
          max: 100,
          min: 0
        }
      },
      allIDs: ["strength"]
    });
  });

  it("should throw exception if an object isn't passed correctly", () => {
    expect(() => {
      updateStats(statState, "bad entry");
    }).toThrow();
  });
});
