import * as UI from "../actions/UI";
import Scenes from "./sceneStore";
import { START_NEW_GAME, DATA_MENU, MAIN_MENU } from "./sceneSymbols";

export function mainMenu() {
  let actions = [UI.HIDE_STATS];
  return { actions };
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
  const newMenuArr = ["main", "data", "level"];
  return { newButtons, newMenuArr };
}

const Menus = {
  main: {
    id: "main",
    label: "New Game",
    newOutput: "New Game",
    toolTip: "Start a new game.",
    nextScene: Scenes.CharCreation[START_NEW_GAME]
  },
  data: {
    id: "data",
    label: "Data",
    toolTip: "Save or load your files.",
    nextScene: Scenes.Menus[DATA_MENU]
  },
  level: {
    id: "level",
    label: "Level Up",
    newOutput: "Level Up"
  },
  stats: {
    id: "stats",
    label: "Stats",
    newOutput: "Stats Screen",
    toolTip: "View your stats."
  },
  perks: {
    id: "perks",
    label: "Perks",
    newOutput: "Perks Screen",
    toolTip: "View your perks."
  },
  appearance: {
    id: "appearance",
    label: "Appearance",
    newOutput: "Appearance Screen",
    toolTip: "View your detailed appearance."
  }
};

export { Menus };
