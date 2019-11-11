import * as Core from "../actions/Core";
import Scenes from "./sceneTextStore";
import { START_NEW_GAME, DATA_MENU, MAIN_MENU } from "./sceneSymbols";

export function mainMenu() {
  const newMenus = {
    u1: Menus.main,
    u2: Menus.data
  };
  let actions = [Core.HIDE_STATS, Core.SHOW_MENU_BAR];
  return { newMenus, actions };
}

export function multiButton() {
  const newButtons = {
    b1: {
      id: "b1",
      label: "Go back to Main Menu",
      nextScene: Scenes.Menus[MAIN_MENU]
    },
    b3: {
      id: "b3",
      label: "Go back to Main Menu",
      nextScene: Scenes.Menus[MAIN_MENU]
    }
  };

  return { newButtons };
}

const Menus = {
  main: {
    id: "main",
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

export { Menus };
