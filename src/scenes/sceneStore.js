import * as SC from "./sceneSymbols";
import * as charCreation from "./charCreation";
import * as menus from "./menus";

const Scenes = {
  CharCreation: {
    [SC.START_NEW_GAME]: {
      function: charCreation.startNewGame,
      text: "Started a new game"
    }
  },
  Menus: {
    [SC.MAIN_MENU]: {
      function: menus.mainMenu,
      text: `CoC Engine: Clean Version
  
      Original concept by Fenoxo and crew
      Converted to JS/React by Matraia
      
      Version extremely early.
      
      Click on New Game to Start 
      `
    },
    [SC.DATA_MENU]: {
      function: menus.multiButton,
      text: "Data Menu"
    }
  }
};

export default Scenes;
