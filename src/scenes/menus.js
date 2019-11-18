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
  Core.changeButtons([]);
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
  level: ["Level Up", null],
  stats: ["Stats", null],
  perks: ["Perks", null],
  appearance: ["Appearance", null],
  options: ["Options", null],
  achievements: ["Achievements", null],
  instructions: [
    "Instructions",
    INSTRUCTIONS,
    ,
    "How to play. Starting tips. And hotkeys for easy left-handed play..."
  ],
  credits: [
    "Credits",
    null,
    ,
    "See a list of all the cool people who have contributed to content for this game!"
  ],
  github: ["Github", null, , "Go to the Github for this engine"]
};
