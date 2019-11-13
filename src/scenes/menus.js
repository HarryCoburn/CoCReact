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

export function instructions() {
  Core.storeState();
  Core.changeButtons({
    b1: {
      label: "Go Back",
      nextScene: GO_BACK
    }
  });
  Core.newText(SceneText.Menus[INSTRUCTIONS].text);
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
    toolTip: "Load or manage saved games.",
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
    toolTip: "Go back to gameplay?",
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
