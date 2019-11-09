import * as SC from "./sceneSymbols";
import * as charCreation from "./charCreation";
import * as menus from "./menus";
import * as testing from "./tests/testing";

const SceneFuncs = {
  [SC.FETCH_SCENE_TEST]: testing.fetchSceneTest,
  [SC.START_NEW_GAME]: charCreation.startNewGame,
  [SC.NAME_SELECTED]: charCreation.nameSelected,
  [SC.MAIN_MENU]: menus.mainMenu,
  [SC.DATA_MENU]: menus.multiButton
};

export default SceneFuncs;
