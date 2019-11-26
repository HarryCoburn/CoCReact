import * as InvMsg from "./invMsg";
import store from "../store/store";

export function addItem(payload) {
  console.log("Got to addItem");
  store.dispatch({ type: InvMsg.ADD_ITEM_TO_INV, payload: payload });
}
