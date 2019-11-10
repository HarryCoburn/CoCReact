import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import TimeDisplay from "../timeDisplay";

const mockStore = configureStore([]);

describe("Time Display Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      time: {
        day: "0",
        minute: "12",
        hour: "5"
      }
    });

    component = renderer.create(
      <Provider store={store}>
        <TimeDisplay />
      </Provider>
    );
  });

  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
