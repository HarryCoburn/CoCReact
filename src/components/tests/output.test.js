import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import Output from "../output";

const mockStore = configureStore([]);

describe("Output Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      output: <p>This is some output</p>
    });

    component = renderer.create(
      <Provider store={store}>
        <Output />
      </Provider>
    );
  });

  xit("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
