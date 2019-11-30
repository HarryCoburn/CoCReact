import updateButtons from "../updateButtons";
import * as CoreMsg from "../../actions/messages/coreMsg";

describe("Testing updateButtons", () => {
  it("returns empty correctly", () => {
    let expected = [];
    let actual = updateButtons({
      type: CoreMsg.UPDATE_BUTTONS,
      payload: undefined
    });
    expect(actual).toEqual(expected);

    actual = updateButtons({
      type: CoreMsg.UPDATE_BUTTONS,
      payload: []
    });
    expected = [undefined];
    expect(actual).toEqual(expected);
  });

  it("Constructs correct button object", () => {
    const expected = [
      {
        label: "Foo",
        nextScene: "bar",
        params: ["baz"]
      }
    ];
    const actual = updateButtons({
      type: CoreMsg.UPDATE_BUTTONS,
      payload: [[0, "Foo", "bar", ["baz"]]]
    });
    expect(actual).toEqual(expected);
  });

  it("Skips buttons correctly", () => {
    const expected = [
      ,
      {
        label: "Foo",
        nextScene: "bar",
        params: ["baz"]
      },
      ,
      {
        label: "Foo",
        nextScene: "bar",
        params: ["baz"]
      }
    ];
    const actual = updateButtons({
      type: CoreMsg.UPDATE_BUTTONS,
      payload: [[1, "Foo", "bar", ["baz"]], [3, "Foo", "bar", ["baz"]]]
    });
    expect(actual).toEqual(expected);
  });
});
