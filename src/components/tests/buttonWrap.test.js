import React from "react";
import renderer from "react-test-renderer";
import WrappedButton from "../buttonWrap";

const dummyFunc = () => {};
const dummy = {
  label: "test label",
  toolTip: "test toolTip",
  toolTipPos: "top"
};

describe("Wrapped Button Component", () => {
  test("Wrapped Button rendered correctly", () => {
    const component = renderer.create(
      <WrappedButton
        label={dummy.label}
        toolTip={dummy.toolTip}
        toolTipPos={dummy.toolTipPos}
        onClick={dummyFunc}
      ></WrappedButton>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
