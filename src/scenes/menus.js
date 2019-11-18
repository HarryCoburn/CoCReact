import * as Core from "../actions/Core";
import SceneText from "./sceneTextStore";
import {
  START_NEW_GAME,
  DATA_MENU,
  MAIN_MENU,
  GO_BACK,
  INSTRUCTIONS
} from "./sceneSymbols";

export function mainMenu(store) {
  Core.storeState();
  Core.newText(SceneText.Menus[MAIN_MENU].text);
  Core.changeMenus({
    u1: MenuButtons.goBack,
    u2: MenuButtons.newGame,
    u3: MenuButtons.data,
    u4: MenuButtons.options,
    u5: MenuButtons.achievements,
    u6: MenuButtons.instructions,
    u7: MenuButtons.credits,
    u8: MenuButtons.github
  });
  Core.changeButtons({});
  Core.hideStatBar();
  Core.showMenuBar();

  return;
}

export function dataMenu() {
  Core.storeState();
  Core.hideStatBar();
  Core.changeMenus([MenuButtons.data]);

  Core.changeButtons([["Go back", GO_BACK]]);
  Core.newText("Data Menu");

  return;
}

export function instructions() {
  Core.storeState();
  Core.hideMenuBar();
  Core.changeButtons([["Go back", GO_BACK]]);
  Core.newText(SceneText.Menus[INSTRUCTIONS].text);
  return;
}

export const MenuButtons = {
  newGame: ["New Game", START_NEW_GAME, , "Start a new game."],
  data: ["Data", DATA_MENU, , "Load or manage saved games."],
  main: ["Main Menu", MAIN_MENU],
  goBack: ["Go Back", GO_BACK, , "Go back to gameplay?"],
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
  },
  options: {
    id: "options",
    label: "Options",
    toolTip: "Configure game settings and enable cheats.",
    nextScene: null
  },
  achievements: {
    id: "achievements",
    label: "Achievements",
    toolTip: "View all achievements you have earned so far.",
    nextScene: null
  },
  instructions: {
    id: "instructions",
    label: "Instructions",
    toolTip:
      "How to play. Starting tips. And hotkeys for easy left-handed play...",
    nextScene: INSTRUCTIONS
  },
  credits: {
    id: "credits",
    label: "Credits",
    toolTip:
      "See a list of all the cool people who have contributed to content for this game!",
    nextScene: null
  },
  github: {
    id: "github",
    label: "Github",
    toolTip: "Go to the Github for this engine",
    nextScene: null
  }
};
