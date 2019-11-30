// Action creators and input validation - Core Messages

// The core actions of the engine
import React from "react";
import store from "../store/store";
import * as Output from "./Output";
import * as Time from "./Time";
import * as Button from "./Button";
import * as Stat from "./Stat";
import * as State from "./State";
import * as Enemy from "./Enemy";
import * as Inv from "./Inv";

/* Stat bar calls */
export const changeStats = newStats =>
  store.dispatch(Stat._statChange(newStats));
export const setStats = newStats => store.dispatch(Stat._setStats(newStats));
export const hideStatBar = () => store.dispatch(Stat._hideStats);
export const showStatBar = () => store.dispatch(Stat._showStats);

/* Output window calls */
export const newText = text => store.dispatch(Output._updateView(text));
export const addText = text => store.dispatch(Output._addText(text));

/* Menu bar calls */
export const changeMenus = newMenus =>
  store.dispatch(Button._changeMenus(newMenus));
export const hideMenuBar = () => store.dispatch(Button._hideMenuBar);
export const showMenuBar = () => store.dispatch(Button._showMenuBar);

/* Button grid calls */
export const addButton = (ind, label, func, param) =>
  store.dispatch(Button._addButton(ind, label, func, param));
export const changeButtons = newButtons =>
  store.dispatch(Button._changeButtons(newButtons));
export const removeButton = ind => {
  store.dispatch(Button._removeButton(ind));
};

/* Time box calls */
export const addTime = time => store.dispatch(Time._addTime(time));
export const getHours = () => store.getState().time.hour;

/* State calls */
export const storeState = () => store.dispatch(State._stateStore());
export const goBack = () => store.dispatch(State._goBack());

/* Combat calls */
export const startCombat = () => store.dispatch(Enemy._startCombat);
export const loadEnemy = enemy => store.dispatch(Enemy._load_enemy(enemy));
export const applyDamage = (ind = 0, damage) =>
  store.dispatch(Enemy._applyDamage(ind, damage));
export const endCombat = () => store.dispatch(Enemy._endCombat);
export const changeTurn = () => store.dispatch(Enemy._changeTurn);

/* Inventory calls */
export const addItem = payload => store.dispatch(Inv._addItem(payload));
export const dropItem = payload => store.dispatch(Inv._dropItem(payload));
export const numItems = () => store.getState().inv.inv.length;
export const itemArr = () => store.getState().inv.inv;
export function full() {
  return store.getState().inv.inv.length >= store.getState().inv.maxSlots;
}

export const doWait = func => {
  changeStats({ fat: -8 });
  addTime({ hour: 4 });
  newText("You wait for four hours...");
  changeButtons([[0, "Next", func[0]]]);
};

export const rest = func => {
  let multiplier = 1.0;
  let fatRecovery = 4;
  let hpRecovery = 10;
  let timeQ = Math.min(4, 21 - store.getState().time.hour);
  changeStats({
    hp: timeQ * hpRecovery * multiplier,
    fat: timeQ * -fatRecovery * multiplier
  });
  addTime({ hour: timeQ });
  newText(
    <>
      <p>You like down to rest for {timeQ} hours</p>
    </>
  );
  changeButtons([[0, "Next", func[0]]]);
};

//Not the full doSleep
export const doSleep = func => {
  addTime({ hour: 8 });
  newText(
    <>
      <p>You fall asleep for eight hours...</p>
    </>
  );
  setStats({ fat: 0 });
  changeStats({ hp: 100 });
  changeButtons([[0, "Next", func[0]]]);
};
