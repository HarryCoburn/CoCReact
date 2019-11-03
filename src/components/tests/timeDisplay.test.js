import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TimeDisplayFunc } from "../timeDisplay";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    day: "0",
    hour: "12",
    minute: "00"
  };

  const enzymeWrapper = shallow(<TimeDisplayFunc {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Time Display", () => {
    it("should render self and subcomponents", () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find("div").hasClass("timeDisplay")).toBe(true);
      expect(enzymeWrapper.find("div").html()).toBe(
        '<div class="timeDisplay"><p>Day#: 0</p><p>Time: 12:00</p></div>'
      );
    });
  });
});
