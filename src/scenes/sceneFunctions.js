import * as SC from "./sceneSymbols";
import * as charCreation from "./charCreation";
import * as menus from "./menus";

const SceneFuncs = {
  [SC.START_NEW_GAME]: charCreation.startNewGame,
  [SC.MAIN_MENU]: menus.mainMenu,
  [SC.DATA_MENU]: menus.multiButton
};

export default SceneFuncs;
