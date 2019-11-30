import * as InvMsg from "./messages/invMsg";

export function _addItem(payload) {
  return { type: InvMsg.ADD_ITEM_TO_INV, payload: payload };
}

export function _dropItem(payload) {
  return { type: InvMsg.DROP_ITEM_FROM_INV, payload: payload };
}
