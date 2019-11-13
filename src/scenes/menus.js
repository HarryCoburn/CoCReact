import * as Core from "../actions/Core";
import { START_NEW_GAME, DATA_MENU, MAIN_MENU, GO_BACK } from "./sceneSymbols";

export function mainMenu(store) {
  Core.storeState();
  Core.changeMenus({
    u1: MenuButtons.goBack,
    u2: MenuButtons.data
  });
  Core.hideStatBar();
  Core.showMenuBar();

  return;
}

export function dataMenu() {
  Core.changeMenus({
    u2: MenuButtons.data
  });
  Core.changeButtons({
    b1: {
      id: "b1",
      label: "Go back to Main Menu",
      nextScene: MAIN_MENU
    },
    b3: {
      id: "b3",
      label: "Go back to Main Menu",
      nextScene: MAIN_MENU
    }
  });

  return;
}

/*
export function goBack() {
  Core.goBack();
}
*/

export const MenuButtons = {
  newGame: {
    id: "newGame",
    label: "New Game",
    toolTip: "Start a new game.",
    nextScene: START_NEW_GAME
  },
  data: {
    id: "data",
    label: "Data",
    toolTip: "Save or load your files.",
    nextScene: DATA_MENU
  },
  main: {
    id: "main",
    label: "Main Menu",
    nextScene: MAIN_MENU
  },
  goBack: {
    id: "goBack",
    label: "Go Back",
    nextScene: GO_BACK
  },
  level: {
    id: "level",
    label: "Level Up",
    nextScene: null
  },
  stats: {
    id: "stats",
    label: "Stats",
    toolTip: "View your stats.",
    nextScene: null
  },
  perks: {
    id: "perks",
    label: "Perks",
    toolTip: "View your perks.",
    nextScene: null
  },
  appearance: {
    id: "appearance",
    label: "Appearance",
    toolTip: "View your detailed appearance.",
    nextScene: null
  }
};
