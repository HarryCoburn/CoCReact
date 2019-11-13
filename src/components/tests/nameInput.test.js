import NameInput from "../nameInput";
import React from "react";
import renderer from "react-test-renderer";

describe("NameInput Component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<NameInput></NameInput>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
