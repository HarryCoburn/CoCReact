import updateStatUI from "../updateStatUI";

let statState = {
  statsUI: {
    byID: {
      strength: {
        value: 0
      }
    },
    allIDs: ["strength"]
  }
};

describe("Update Stat UI Reducer", () => {
  it("should return the initial state", () => {
    expect(updateStatUI(statState, {})).toEqual(statState);
  });

  it("should change by given value", () => {
    statState = updateStatUI(statState, { strength: 50 });
    expect(statState.statsUI.byID.strength.value).toEqual(50);
    statState = updateStatUI(statState, { strength: -50 });
    expect(statState.statsUI.byID.strength.value).toEqual(0);
  });

  it("should stay within range", () => {
    statState = updateStatUI(statState, { strength: -50 });
    expect(statState.statsUI.byID.strength.value).toEqual(0);
    statState = updateStatUI(statState, { strength: 200 });
    expect(statState.statsUI.byID.strength.value).toEqual(100);
  });

  it("should ignore stat parameters that aren't in allIDs", () => {
    statState = updateStatUI(statState, { strength: -50, buffness: 20 });
    expect(statState.statsUI.byID.strength.value).toEqual(50);
    expect(statState).toEqual({
      statsUI: {
        byID: {
          strength: {
            value: 50
          }
        },
        allIDs: ["strength"]
      }
    });
  });

  it("should throw exception if an object isn't passed correctly", () => {
    expect(() => {
      updateStatUI(statState, "bad entry");
    }).toThrow();
    expect(updateStatUI(statState, {})).toEqual({
      statsUI: {
        byID: {
          strength: {
            value: 50
          }
        },
        allIDs: ["strength"]
      }
    });
  });
});
