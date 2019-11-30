import React from "react";
import * as Core from "../../actions/Core";
import * as Item from "../../symbols/items/apple.js";

export const startDemo = () => {
  Core.hideMenuBar();
  Core.showStatBar();
  Core.newText(
    <>
      <p>This is the start of the inventory demo.</p>
      <p>You have {Core.numItems()} items in your inventory.</p>
      <p>In your inventory, you have:</p>
      {listInv()}
    </>
  );
  Core.changeButtons([[0, "Add Apple", addItem, [Item.Apple]]]);
  if (Core.numItems() >= 1) {
    Core.addButton(1, "Eat Apple", chooseItem);
    Core.addButton(2, "Drop Apple", chooseDrop);
  }
};

const addItem = payload => {
  Core.addItem(payload);
  startDemo();
};

const listInv = () => {
  if (Core.numItems() === 0) {
    return <>Nothing</>;
  }
  let list = [];
  Core.itemArr().forEach(item => {
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
  Core.itemArr().forEach((item, idx) => {
    buttons.push([idx, item.name, useItem, [item, idx]]);
  });
  Core.changeButtons(buttons);
};

const useItem = ([item, idx]) => {
  item.effect();
  Core.dropItem(idx);
  startDemo();
};

const chooseDrop = () => {
  Core.newText(
    <>
      <p>Which item will you drop?</p>
    </>
  );
  let buttons = [];
  Core.itemArr().forEach((item, idx) => {
    buttons.push([idx, item.name, dropItem, [idx]]);
  });
  Core.changeButtons(buttons);
};

const dropItem = ([idx]) => {
  Core.dropItem(idx);
  startDemo();
};
