import React from "react";
import renderer from "react-test-renderer";
import Stat from "../stat";

const dummy = {
  stat: "strength",
  name: "Strength",
  value: 50,
  max: 100
};

describe("Stat Component", () => {
  xit("renders correctly", () => {
    const component = renderer.create(
      <Stat
        key={dummy.stat}
        id={dummy.stat}
        name={dummy.name}
        value={dummy.value}
        max={dummy.max}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
