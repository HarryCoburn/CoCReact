import Scenes from "./sceneStore";
import { Menus } from "./menus";
import { MAIN_MENU } from "./sceneSymbols";
import * as UI from "../actions/UI";
import store from "../store/store";
import * as Player from "../actions/Player";

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
  store.dispatch(
    Player.setStats({
      strength: 15,
      toughness: 15,
      speed: 15,
      intelligence: 15,
      sensitivity: 15,
      libido: 15,
      corruption: 15,
      hunger: 80,
      obey: 10,
      esteem: 50,
      will: 80,
      lust: 15,
      xp: 0,
      level: 1,
      gems: 0
    })
  );
  const actions = [UI.SHOW_STATS];
  return { newButtons, newMenus, actions };
};
