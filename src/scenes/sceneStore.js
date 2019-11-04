import * as SC from "./sceneSymbols";

const Scenes = {
  CharCreation: {
    [SC.START_NEW_GAME]: {
      id: SC.START_NEW_GAME,
      text: "Started a new game"
    }
  },
  Menus: {
    [SC.MAIN_MENU]: {
      id: SC.MAIN_MENU,
      text: `CoC Engine: Clean Version
  
      Original concept by Fenoxo and crew
      Converted to JS/React by Matraia
      
      Version extremely early.
      
      Click on New Game to Start 
      `
    },
    [SC.DATA_MENU]: {
      id: SC.DATA_MENU,
      text: "Data Menu"
    }
  }
};

export default Scenes;
