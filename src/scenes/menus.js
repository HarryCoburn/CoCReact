import * as Core from "../actions/Core";
import SceneText from "./sceneTextStore";
import {
  START_NEW_GAME,
  DATA_MENU,
  MAIN_MENU,
  GO_BACK,
  INSTRUCTIONS
} from "./sceneSymbols";
import store from "../store/store";
import React from "react";

export function mainMenu(store) {
  Core.storeState();
  Core.newText(SceneText.Menus[MAIN_MENU].text);
  Core.changeMenus([
    MenuButtons.goBack,
    MenuButtons.newGame,
    MenuButtons.data,
    MenuButtons.options,
    MenuButtons.achievements,
    MenuButtons.instructions,
    MenuButtons.credits,
    MenuButtons.github
  ]);
  Core.changeButtons();
  Core.hideStatBar();
  Core.showMenuBar();

  return;
}

export function dataMenu() {
  Core.storeState();
  Core.hideStatBar();
  Core.changeMenus([MenuButtons.data]);

  Core.changeButtons([[0, "Go back", GO_BACK]]);
  Core.newText("Data Menu");

  return;
}

export function instructions() {
  Core.storeState();
  Core.hideMenuBar();
  Core.changeButtons([[0, "Go back", GO_BACK]]);
  Core.newText(SceneText.Menus[INSTRUCTIONS].text);
  return;
}

export const MenuButtons = {
  newGame: [0, "New Game", START_NEW_GAME, [], "Start a new game."],
  data: [1, "Data", DATA_MENU, [], "Load or manage saved games."],
  main: [0, "Main Menu", MAIN_MENU],
  goBack: ["Go Back", GO_BACK, [], "Go back to gameplay?"],
  level: [2, "Level Up", MAIN_MENU], // TODO Change Later
  stats: [3, "Stats", MAIN_MENU], //TODO Change later
  perks: ["Perks", null],
  appearance: ["Appearance", null],
  options: ["Options", null],
  achievements: ["Achievements", null],
  instructions: [
    "Instructions",
    INSTRUCTIONS,
    [],
    "How to play. Starting tips. And hotkeys for easy left-handed play..."
  ],
  credits: [
    "Credits",
    null,
    [],
    "See a list of all the cool people who have contributed to content for this game!"
  ],
  github: ["Github", null, [], "Go to the Github for this engine"]
};

export function inventoryMenu() {
  Core.storeState();
  Core.hideMenuBar();
  Core.newText(
    <>
      <h1>Inventory</h1>
      <b>
        <u>Equipment:</u>
      </b>
      <br />
      <b>Weapon:</b> {store.getState().combat.weapon.name} (Attack:{" "}
      {store.getState().combat.weapon.attack})
      <br />
      <b>Shield:</b> {store.getState().combat.shield.name || "None"} (Block
      rating: {store.getState().combat.shield.defense || 0})
      <br />
      <b>Armor:</b> {store.getState().combat.armor.name || "None"} (Defense:{" "}
      {store.getState().combat.armor.defense || 0})
      <br />
      <b>Upper underwear:</b>{" "}
      {store.getState().combat.upperGarment.name || "None"}
      <br />
      <b>Lower underwear:</b>{" "}
      {store.getState().combat.lowerGarment.name || "None"}
      <br />
      <b>Accessory:</b> {store.getState().combat.jewelry.name || "None"}
      <br />
      <b>
        <u>Key Items:</u>
        {/* for (x = 0; x < player.keyItems.length; x++) outputText(player.keyItems[x].keyName + "\n"); */}
      </b>
      <p>{Core.numItems() === 0 && "You have no usable items"}</p>
    </>
  );
  Core.changeButtons();
  let buttons = [];
  Core.itemArr().forEach((item, idx) => {
    buttons.push([idx, item.name, useItem, [item, idx]]);
  });
  Core.changeButtons(buttons);
  Core.addButton(14, "Go Back", Core.goBack);
}

const useItem = ([item, idx]) => {
  Core.storeState();
  Core.dropItem(idx);
  item.effect();
};

/*
public function inventoryMenu():void {
  var x:int;
  var foundItem:Boolean = false;






  if (!getGame().inCombat) {
    addButton(10, "Unequip", manageEquipment);
  }

  if (!getGame().inCombat && flags[kFLAGS.DELETE_ITEMS] == 1) {
    addButton(11, "Del Item: One", deleteItems).hint("Trash your items, one by one.\n\nClick to trash all in a stack.\nClick twice to stop.", "Delete Items (Single)");
  } else if (!getGame().inCombat && flags[kFLAGS.DELETE_ITEMS] == 2) {
    addButton(11, "Del Item: All", deleteItems).hint("Trash all of your items in a stack.\n\nClick to stop.\nClick twice to trash your items one by one.", "Delete Items (Stack)");
  } else if (!getGame().inCombat && flags[kFLAGS.DELETE_ITEMS] == 0) {
    addButton(11, "Del Item: OFF", deleteItems).hint("Start throwing away your items.\n\nClick to trash your items one by one.\nClick twice to trash all in a stack.", "Delete Items (Off)");
  }


  if (!getGame().inCombat && inDungeon == false && inRoomedDungeon == false && flags[kFLAGS.IN_PRISON] == 0 && flags[kFLAGS.IN_INGNAM] == 0 && checkKeyItems(true)) {
    addButton(12, "Key Items", checkKeyItems);
    foundItem = true;
  }

  if (!foundItem) {
    outputText("\nYou have no usable items.");
    doNext(playerMenu);
    if (!getGame().inCombat) {
      addButton(10, "Unequip", manageEquipment);
    }
    return;
  }

  if (flags[kFLAGS.DELETE_ITEMS] > 0) outputText("\nWhich item will you discard?");
  else outputText("\nWhich item will you use?");
  outputText("\n<b>Capacity:</b> " + getOccupiedSlots() + " / " + getMaxSlots());
  addButton(14, "Back", exitInventory);
}

 */
