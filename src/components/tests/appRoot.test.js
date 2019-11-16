import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import AppRootComponent from "../appRoot";
import configureStore from "redux-mock-store";
import * as I from "../../store/initialState";

const mockStore = configureStore([]);

describe("App Root Component", () => {
  let store = mockStore({
    output: I.iOutput,
    UI: I.iUIState,
    stats: I.iStats,
    buttons: I.iButtons,
    appearance: I.iAppearance,
    time: I.iTime,
    engine: I.iEngineState
  });
  let component;

  xtest("App root rendered correctly", () => {
    component = renderer.create(
      <Provider store={store}>
        <AppRootComponent></AppRootComponent>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
