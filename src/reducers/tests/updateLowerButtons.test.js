import updateLowerButtons from "../updateLowerButtons";
import * as UI from "../../actions/UI";

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
  let buttonState;

  beforeEach(() => {
    buttonState = {
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
  });

  it("should return the initial state", () => {
    expect(
      updateLowerButtons(buttonState, {
        action: UI.UPDATE_BUTTONS,
        payload: {}
      })
    ).toEqual(buttonState);
  });

  it("should throw error if it doesn't receive an object", () => {
    expect(() => {
      updateLowerButtons(buttonState, {
        action: UI.UPDATE_BUTTONS,
        payload: "Boo!"
      });
    }).toThrow();
  });

  it("should add buttons correctly", () => {
    expect(
      updateLowerButtons(buttonState, {
        action: UI.UPDATE_BUTTONS,
        payload: newButtons
      })
    ).toEqual({
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
    buttonState = updateLowerButtons(buttonState, {
      action: UI.UPDATE_BUTTONS,
      payload: newButtons
    });
    expect(
      updateLowerButtons(buttonState, {
        action: UI.UPDATE_BUTTONS,
        payload: newButtons2
      })
    ).toEqual({
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
    buttonState = updateLowerButtons(buttonState, {
      action: UI.UPDATE_BUTTONS,
      payload: newButtons
    });
    expect(
      updateLowerButtons(buttonState, {
        action: UI.UPDATE_BUTTONS,
        payload: {}
      })
    ).toEqual({
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
