import * as SC from "./sceneSymbols";
import * as charCreation from "./charCreation";
import * as menus from "./menus";
import * as testing from "./tests/testing";
import * as Core from "../actions/Core";
import store from "../store/store";

const SceneFuncs = {
  [SC.FETCH_SCENE_TEST]: testing.fetchSceneTest,
  [SC.START_NEW_GAME]: charCreation.startNewGame,
  [SC.NAME_SELECTED]: charCreation.nameSelected,
  [SC.MAIN_MENU]: () => {
    return menus.mainMenu(store);
  },
  [SC.DATA_MENU]: menus.dataMenu,
  [SC.GO_BACK]: () => {
    Core.goBack();
  }
};

export default SceneFuncs;
