import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import StatBar from "../statBar";

const mockStore = configureStore([]);

describe("StatBar Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      UI: {
        showStats: true
      },
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
          },
          libido: {
            name: "Libido",
            value: 50,
            max: 100
          }
        },
        coreIDs: ["strength"],
        combatIDs: ["toughness"],
        advIDs: ["libido"]
      }
    });

    component = renderer.create(
      <Provider store={store}>
        <StatBar />
      </Provider>
    );
  });

  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
