import Scenes from "./sceneStore";
import * as UI from "../actions/UI";
import { MAIN_MENU } from "./sceneSymbols";

export const startNewGame = () => {
  const newButtons = {
    b1: {
      id: "b1",
      newOutput: "Went back to main menu",
      label: "Go back to Main Menu",
      nextScene: Scenes.Menus[MAIN_MENU]
    }
  };
  const newMenuArr = ["main", "data", "level"];
  const actions = [UI.SHOW_STATS];
  return { newButtons, newMenuArr, actions };
};
