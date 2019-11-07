import updateLowerButtons from "../updateLowerButtons";

let buttonState = {
  byID: {},
  lowerIDs: [
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "b10",
    "b11",
    "b12",
    "b13",
    "b14",
    "b15"
  ],
  upperIDs: ["main", "data"]
};

let newButtons = {
  b1: {
    label: "I'm a button!"
  },
  b13: {
    label: "I'm a button too!"
  }
};

let newButtons2 = {
  b1: {
    label: "I'm a new button!"
  }
};

describe("Update Lower Buttons UI Reducer", () => {
  it("should return the initial state", () => {
    expect(updateLowerButtons(buttonState, {})).toEqual(buttonState);
  });

  it("should throw error if it doesn't receive an object", () => {
    expect(() => {
      updateLowerButtons(buttonState, "Boo!");
    }).toThrow();
  });

  it("should add buttons correctly", () => {
    expect(updateLowerButtons(buttonState, newButtons)).toEqual({
      byID: {
        b1: {
          label: "I'm a button!"
        },
        b13: {
          label: "I'm a button too!"
        }
      },
      lowerIDs: [
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "b10",
        "b11",
        "b12",
        "b13",
        "b14",
        "b15"
      ],
      upperIDs: ["main", "data"]
    });
  });

  it("should replace buttons correctly", () => {
    expect(updateLowerButtons(buttonState, newButtons2)).toEqual({
      byID: {
        b1: {
          label: "I'm a new button!"
        }
      },
      lowerIDs: [
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "b10",
        "b11",
        "b12",
        "b13",
        "b14",
        "b15"
      ],
      upperIDs: ["main", "data"]
    });
  });

  it("should remove all buttons correctly", () => {
    expect(updateLowerButtons(buttonState, {})).toEqual({
      byID: {},
      lowerIDs: [
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "b10",
        "b11",
        "b12",
        "b13",
        "b14",
        "b15"
      ],
      upperIDs: ["main", "data"]
    });
  });
});
