import Scenes from "./sceneStore";
import { Menus } from "./menus";
import { MAIN_MENU } from "./sceneSymbols";
import * as UI from "../actions/UI";

export const startNewGame = () => {
  const newButtons = {
    b1: {
      id: "b1",
      newOutput: "Went back to main menu",
      label: "Go back to Main Menu",
      toolTip: "Testing",
      nextScene: Scenes.Menus[MAIN_MENU]
    }
  };
  const newMenus = {
    u1: Menus.main,
    u2: Menus.data,
    u3: Menus.level
  };
  const newStats = { strength: -23 };
  const actions = [UI.SHOW_STATS];
  return { newButtons, newMenus, newStats, actions };
};
