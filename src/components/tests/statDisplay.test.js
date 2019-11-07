import React from "react";
import renderer from "react-test-renderer";
import StatDisplay from "../statDisplay";

const dummy = {
  ids: ["strength", "toughness"],
  stats: {
    byID: {
      strength: {
        name: "Strength",
        value: 50,
        max: 100
      },
      toughness: {
        name: "Toughness",
        value: 75,
        max: 100
      }
    }
  }
};

describe("StatDisplay Component", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <StatDisplay ids={dummy.ids} stats={dummy.stats} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
