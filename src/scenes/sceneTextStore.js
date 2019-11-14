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
    },
    [SC.INSTRUCTIONS]: {
      id: SC.INSTRUCTIONS,
      text: (
        <div>
          <h1>Instructions</h1>
          <b>
            <u>How To Play:</u>
          </b>
          <p>
            Click the buttons corresponding to the actions you want to take.
            Your 'goal' is to obviously put an end to the demonic corruption
            around you, but do whatever the hell you want. There is a story but
            sometimes it's fun to ignore it
          </p>
          <b>Exploration:</b>
          <p>
            The lake is a safe zone when you start the game. It's a good place
            to explore, and Whitney's farm can offer some nice stat boosts to
            help get you on your feet. Once you feel comfortable, the forest is
            probably the next safest area, but beware of tentacle monsters. The
            desert is the next toughest area, and the mountains offer further
            challenges. There are more areas beyond that, but that's a good way
            to get started. You'll uncover plenty of new 'places' exploring,
            which can be accessed from the <b>Places</b> menu. You'll also find
            some interesting characters when you try to discover new explorable
            locations by choosing <b>Explore</b> twice.
          </p>
          <b>Combat:</b>
          <p>
            Combat is won by raising an opponent's lust to 100 or taking their
            HP to 0. You lose if your enemy does the same to you. Loss isn't
            game over, but some losses will make it harder in the future by
            lowering your stats. Beware. Don't be afraid to spam the <b>Run</b>{" "}
            option when you're in over your head.
          </p>
          <b>Controls:</b>
          <p>
            The game features numerous hot-keys to make playing quicker and
            easier.
            <br />
            P key - Perks Menu
            <br />
            D key - Data Menu
            <br />
            A key - Appearance
            <br />
            Screen
            <br />
            1 Through 5 - The top row of 'choice' buttons.
            <br />
            6 Through 0 - The bottom row of 'choice' buttons.
            <br />Q through T - Alternative bottom 'choice' hotkeys.
            <br />
            Space Bar - Next/Back/Leave
            <br />
            Home Key - Toggle text field background.
            <br />S key - Stats Screen
            <br />
            (Save Hotkeys - May not work in all players)
            <br />
            F1-F5 -Quicksave to slot 1 through 5. Only works when Data is
            visible.
            <br />
            F6-F0 - Quick Load from slots 1-5.
          </p>
          <p>
            <b>Save often using the Data Menu</b> - you never know when your
            journey will come to an end!
          </p>
        </div>
      )
    }
  }
};

export default SceneText;
