import SceneText from "./sceneTextStore";
import { Menus } from "./menus";
import { NAME_SELECTED, START_NEW_GAME } from "./sceneSymbols";
import * as Core from "../actions/Core";
import store from "../store/store";
import * as Player from "../actions/Player";

export const startNewGame = () => {
  const newButtons = {
    b1: {
      id: "b1",
      label: "Confirm Name",
      toolTip: "Click to confirm name",
      nextScene: NAME_SELECTED
    }
  };
  const newText = SceneText.CharCreation[START_NEW_GAME].text;
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
  store.dispatch(Player.restoreHP());
  const actions = [Core.SHOW_STATS];
  return { newText, newButtons, newMenus, actions };
};

export const nameSelected = () => {
  let newStats = {
    strength: 30
  };
  const newButtons = {
    b1: {
      id: "b1",
      label: "Confirm Name",
      toolTip: "Click to confirm name",
      nextScene: NAME_SELECTED
    }
  };
  return { newButtons, newStats };
};
