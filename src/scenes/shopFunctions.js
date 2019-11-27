import React from "react";
import * as Core from "../actions/Core";
import * as Utils from "../utils";
import * as Inv from "../actions/Inv";
import store from "../store/store";

export function addShopItem(item, price) {
  Core.addText(
    <p>
      {Utils.capitalize(item.longName)} - {price} gems
    </p>
  );
  let index = store.getState().lower.present.findIndex(item => {
    return !Object.keys(item).length;
  });
  Core.addButton(index, item.name, transactionItemConfirmation, [item, price]);
}

export function transactionItemConfirmation([item, price]) {
  Core.newText(
    <>
      <p>
        "
        <i>
          That will be {price} gems for {item.longName}.
        </i>
        "
      </p>
    </>
  );
  if (store.getState().stats.stats.gems.value >= price) {
    Core.addText("Do you buy it?");
    Core.changeButtons([
      [0, "Yes", transactionYes, [item, price]],
      [1, "No", Core.goBack]
    ]);
  } else {
    Core.addText(
      "You count out your gems and realize it's beyond your price range. You leave the store embarrassed."
    );
    Core.changeButtons([[0, "Next", Core.goBack]]);
  }
}

export function transactionYes([item, price, func]) {
  if (Inv.full()) {
    Core.newText(
      "You are carrying too many items. The shopkeeper says they'll hold your order until you reduce your inventory."
    );
    Core.changeButtons([[0, "Next", func || Core.goBack]]);
    return;
  }
  Core.newText(
    <>
      <p>
        You have purchased {item.longName} for {price} gems.
      </p>
    </>
  );
  Core.changeStats({ gems: -price });
  Inv.addItem(item);
  Core.changeButtons([[0, "Next", func || Core.goBack]]);
}
