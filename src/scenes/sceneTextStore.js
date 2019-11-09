import React from "react";
import * as SC from "./sceneSymbols";
import NameInput from "../components/nameInput";

const SceneText = {
  CharCreation: {
    [SC.START_NEW_GAME]: {
      id: SC.START_NEW_GAME,
      text: (
        <>
          <p>
            You grew up in the small village of Ingnam, a remote village with
            rich traditions, buried deep in the wilds. Every year for as long as
            you can remember, your village has chosen a champion to send to the
            cursed Demon Realm.
          </p>
          <p>
            Legend has it that in years Ingnam has failed to produce a champion,
            chaos has reigned over the countryside. Children disappear, crops
            wilt, and disease spreads like wildfire.
          </p>
          <p>
            This year, <b>you</b> have been selected to be the champion.
          </p>
          <p>What is your name?</p>
          <NameInput />
        </>
      )
    },
    [SC.NAME_SELECTED]: {
      id: SC.NAME_SELECTED,
      text: (
        <>
          <p>We've selected a name!</p>
        </>
      )
    }
  },
  Menus: {
    [SC.MAIN_MENU]: {
      id: SC.MAIN_MENU,
      text: (
        <>
          <p>CoC Engine: Clean Version</p>
          <p>
            Original concept by Fenoxo and crew
            <br />
            Converted to JS/React by Matraia
          </p>
          <p>Version extremely early.</p>
          <p>Click on New Game to Start </p>
        </>
      )
    },
    [SC.DATA_MENU]: {
      id: SC.DATA_MENU,
      text: (
        <>
          <p>Data Menu</p>
        </>
      )
    }
  }
};

export default SceneText;
