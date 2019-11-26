import React from "react";
import * as Core from "../../actions/Core";
import * as Item from "../../symbols/items/apple.js";
import * as Inv from "../../actions/Inv";
import store from "../../store/store";

const numItems = () => store.getState().inv.inv.length;
const itemArr = () => store.getState().inv.inv;

export const startDemo = () => {
  Core.hideMenuBar();
  Core.showStatBar();
  Core.newText(
    <>
      <p>This is the start of the inventory demo.</p>
      <p>You have {numItems()} items in your inventory.</p>
      <p>In your inventory, you have:</p>
      {listInv()}
    </>
  );
  Core.changeButtons([
    [0, "Add Apple", addItem, [Item.Apple]],
    ...(numItems() >= 1
      ? [[1, "Eat Apple", chooseItem], [2, "Drop Apple", chooseDrop]]
      : [,])
  ]);
};

const addItem = payload => {
  Inv.addItem(payload);
  startDemo();
};

const listInv = () => {
  if (numItems() === 0) {
    return <>Nothing</>;
  }
  let list = [];
  itemArr().forEach(item => {
    list.push(<li>{item.name}</li>);
  });
  return <ul>{list}</ul>;
};

const chooseItem = () => {
  Core.newText(
    <>
      <p>Which item will you use?</p>
    </>
  );
  let buttons = [];
  itemArr().forEach((item, idx) => {
    buttons.push([idx, item.name, useItem, [item, idx]]);
  });
  Core.changeButtons(buttons);
};

const useItem = ([item, idx]) => {
  item.effect();
  Inv.dropItem(idx);
  startDemo();
};

const chooseDrop = () => {
  Core.newText(
    <>
      <p>Which item will you drop?</p>
    </>
  );
  let buttons = [];
  itemArr().forEach((item, idx) => {
    buttons.push([idx, item.name, dropItem, [idx]]);
  });
  Core.changeButtons(buttons);
};

const dropItem = ([idx]) => {
  Inv.dropItem(idx);
  startDemo();
};
