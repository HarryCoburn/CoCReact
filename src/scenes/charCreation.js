import SceneText from "./sceneTextStore";
import { MenuButtons } from "./menus";
import { NAME_SELECTED, START_NEW_GAME } from "./sceneSymbols";
import * as Core from "../actions/Core";
import * as Player from "../actions/Player";

export const startNewGame = () => {
  Core.changeButtons({
    b1: {
      id: "b1",
      label: "Confirm Name",
      toolTip: "Click to confirm name",
      nextScene: NAME_SELECTED
    }
  });

  Core.newText(SceneText.CharCreation[START_NEW_GAME].text);
  Core.changeMenus({
    u1: MenuButtons.main,
    u2: MenuButtons.data,
    u3: MenuButtons.level
  });
  Core.setStats({
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
  });
  Player.restoreHP();
  Core.showStatBar();
  return;
};

export const nameSelected = () => {
  Core.changeStats({
    strength: 30
  });
  Core.changeButtons({
    b1: {
      id: "b1",
      label: "Confirm Name",
      toolTip: "Click to confirm name",
      nextScene: NAME_SELECTED
    }
  });

  Core.newText("Name verified!");

  return;
};
