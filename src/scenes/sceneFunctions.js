import * as SC from "./sceneSymbols";
import * as charCreation from "./charCreation";
import * as menus from "./menus";
import * as testing from "./tests/testing";
import * as Core from "../actions/Core";
import store from "../store/store";

const SceneFuncs = {
  [SC.FETCH_SCENE_TEST]: testing.fetchSceneTest,
  [SC.FETCH_SCENE_TEST_NOFUNC]: "Nofunction!",
  [SC.START_NEW_GAME]: charCreation.startNewGame,
  [SC.GENDER_SELECT]: charCreation.genderSelect,
  [SC.IS_A_MAN]: charCreation.isAMan,
  [SC.IS_A_WOMAN]: charCreation.isAWoman,
  [SC.BUILD_AVERAGE_MALE]: charCreation.buildAverageMale,
  [SC.BUILD_LEAN_MALE]: charCreation.buildLeanMale,
  [SC.BUILD_THICK_MALE]: charCreation.buildThickMale,
  [SC.BUILD_GIRLY_MALE]: charCreation.buildGirlyMale,
  [SC.BUILD_SLENDER_FEMALE]: charCreation.buildSlenderFemale,
  [SC.BUILD_AVERAGE_FEMALE]: charCreation.buildAverageFemale,
  [SC.BUILD_CURVY_FEMALE]: charCreation.buildCurvyFemale,
  [SC.BUILD_TOMBOYISH_FEMALE]: charCreation.buildTomboyishFemale,
  [SC.MAIN_MENU]: () => {
    return menus.mainMenu(store);
  },
  [SC.DATA_MENU]: menus.dataMenu,
  [SC.INSTRUCTIONS]: menus.instructions,
  [SC.GO_BACK]: () => {
    Core.goBack();
  }
};

export default SceneFuncs;
