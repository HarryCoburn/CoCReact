import * as InvMsg from "./invMsg";
import store from "../store/store";

export function addItem(payload) {
  console.log("Got to addItem");
  store.dispatch({ type: InvMsg.ADD_ITEM_TO_INV, payload: payload });
}

export function dropItem(payload) {
  store.dispatch({ type: InvMsg.DROP_ITEM_FROM_INV, payload: payload });
}

export function full() {
  return store.getState().inv.inv.length >= store.getState().inv.maxSlots;
}
