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

  it("should set balls stats", () => {
    const store = createStore(rootReducer);
    const param = { number: 2 };
    const action = Player._setBallsStats(param);
    store.dispatch(action);
    let expected = 2;
    let actual = store.getState().cocks.balls.byID.number.value;
    expect(actual).toEqual(expected);
  });

  it("should change balls stats", () => {
    const store = createStore(rootReducer);
    const param = { number: 1 };
    const action = Player._changeBallsStats(param);
    store.dispatch(action);
    let expected = 3;
    let actual = store.getState().cocks.balls.byID.number.value;
    expect(actual).toEqual(expected);
  });

  it("should set butt stats", () => {
    const store = createStore(rootReducer);
    const param = { rating: "test" };
    const action = Player._setButtStats(param);
    store.dispatch(action);
    let expected = "test";
    let actual = store.getState().appearance.butt.byID.rating.value;
    expect(actual).toEqual(expected);
  });

  it("should set hips stats", () => {
    const store = createStore(rootReducer);
    const param = { rating: "test" };
    const action = Player._setHipsStats(param);
    store.dispatch(action);
    let expected = "test";
    let actual = store.getState().appearance.hips.byID.rating.value;
    expect(actual).toEqual(expected);
  });

  it("should add something to the cock array", () => {
    const store = createStore(rootReducer);
    const action = Player._createCock();
    store.dispatch(action);
    expect(store.getState().cocks.cocks.length).toEqual(1);
  });

  it("should add something to the breast array", () => {
    const store = createStore(rootReducer);
    const action = Player._createBreastRow();
    store.dispatch(action);
    expect(store.getState().breasts.breasts.length).toEqual(1);
  });

  it("should change something to the breast array", () => {
    const store = createStore(rootReducer);
    store.dispatch(Player._createBreastRow());
    const action = Player._changeBreastRow({ number: 3 });
    store.dispatch(action);
    expect(store.getState().breasts.breasts[0].number).toEqual(3);
  });

  it("should add something to the vagina array", () => {
    const store = createStore(rootReducer);
    const action = Player._createVagina();
    store.dispatch(action);
    expect(store.getState().vaginas.vaginas.length).toEqual(1);
  });
});
