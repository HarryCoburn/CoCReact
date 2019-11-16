import * as reducers from "../root";
import { createStore } from "redux";

let store = createStore(reducers.rootReducer);

describe("Testing Root Reducer", () => {
  xit("should return initial states", () => {
    expect(store.getState().output).toEqual(
      reducers.outputReducer(undefined, {})
    );
    expect(store.getState().UI).toEqual(reducers.uiReducer(undefined, {}));
    expect(store.getState().lower).toEqual(
      reducers.lowerReducer(undefined, {})
    );
    expect(store.getState().upper).toEqual(
      reducers.upperReducer(undefined, {})
    );
    expect(store.getState().stats).toEqual(
      reducers.statsReducer(undefined, {})
    );
    expect(store.getState().appearance).toEqual(
      reducers.appearanceReducer(undefined, {})
    );
    expect(store.getState().time).toEqual(reducers.timeReducer(undefined, {}));
    expect(store.getState().engine).toEqual(
      reducers.engineReducer(undefined, {})
    );
    expect(store.getState().pregnancy).toEqual(
      reducers.pregnancyReducer(undefined, {})
    );
    expect(store.getState().cocks).toEqual(
      reducers.cocksReducer(undefined, {})
    );
    expect(store.getState().breasts).toEqual(
      reducers.breastsReducer(undefined, {})
    );
    expect(store.getState().vaginas).toEqual(
      reducers.vaginasReducer(undefined, {})
    );
  });
});
