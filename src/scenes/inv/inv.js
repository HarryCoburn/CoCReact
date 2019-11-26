import React from "react";
import * as Core from "../../actions/Core";
import * as Item from "../../symbols/items/apple.js";
import * as Inv from "../../actions/Inv";
import store from "../../store/store";

const numItems = () => store.getState().inv.inv.length;
const maxItems = () => store.getState().inv.inv.maxSlots;
const itemArr = () => store.getState().inv.inv;

export const startDemo = () => {
  Core.hideMenuBar();
  Core.newText(
    <>
      <p>This is the start of the inventory demo.</p>
      <p>You have {numItems()} items in your inventory.</p>
    </>
  );
  Core.changeButtons([[0, "Add Apple", addItem, [Item.Apple]]]);
};

const addItem = payload => {
  Inv.addItem(payload);
  startDemo();
};
