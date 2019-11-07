import React from "react";
import renderer from "react-test-renderer";
import Btn from "../button";

const dummyFunc = () => {};
const dummy = {
  label: "test label",
  toolTip: "test toolTip",
  toolTipPos: "top"
};

describe("Btn Component", () => {
  test("Btn rendered correctly", () => {
    const component = renderer.create(
      <Btn
        label={dummy.label}
        toolTip={dummy.toolTip}
        toolTipPos={dummy.toolTipPos}
        onClick={dummyFunc}
      ></Btn>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
