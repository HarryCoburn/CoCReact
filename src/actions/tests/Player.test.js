import * as Player from "../Player";
//import * as PlayerMsg from "../playerMsg";
//import * as I from "../../store/initialState";
import { createStore } from "redux";
import { rootReducer } from "../../reducers/root";

describe("Testing Player Functions", () => {
  it("should restore HP", () => {
    const store = createStore(rootReducer);
    const action = Player._restoreHP();
    store.dispatch(action);
    let expected = store.getState().stats.byID.hp.max;
    let actual = store.getState().stats.byID.hp.value;
    expect(actual).toEqual(expected);
  });

  it("should send set player name action", () => {
    const store = createStore(rootReducer);
    const name = "matraia";
    const action = Player.setPlayerName(name);
    store.dispatch(action);
    let expected = name;
    let actual = store.getState().appearance.name;
    expect(actual).toEqual(expected);
  });

  it("should set appearance stats", () => {
    const store = createStore(rootReducer);
    const param = { tone: 66 };
    const action = Player._setPlayerAppearance(param);
    store.dispatch(action);
    let expected = 66;
    let actual = store.getState().appearance.byID.tone.value;
    expect(actual).toEqual(expected);
  });

  it("should change appearance stats", () => {
    const store = createStore(rootReducer);
    const param = { tallness: 5 };
    const action = Player._changePlayerAppearance(param);
    store.dispatch(action);
    let expected = 5;
    let actual = store.getState().appearance.byID.tallness.value;
    expect(actual).toEqual(expected);
  });

  it("should set pregnancy stats", () => {
    const store = createStore(rootReducer);
    const param = { fertility: 25 };
    const action = Player._setPregStats(param);
    store.dispatch(action);
    let expected = 25;
    let actual = store.getState().pregnancy.byID.fertility.value;
    expect(actual).toEqual(expected);
  });

  it("should change pregnancy stats", () => {
    const store = createStore(rootReducer);
    const param = { fertility: 25 };
    const action = Player._changePregStats(param);
    store.dispatch(action);
    let expected = 50;
    let actual = store.getState().pregnancy.byID.fertility.value;
    expect(actual).toEqual(expected);
  });

  it("should set hair stats", () => {
    const store = createStore(rootReducer);
    const param = { length: 5 };
    const action = Player._setHair(param);
    store.dispatch(action);
    let expected = 5;
    let actual = store.getState().appearance.hair.byID.length.value;
    expect(actual).toEqual(expected);
  });
});
