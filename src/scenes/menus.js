import * as UI from "../actions/UI";
const MainMenuText = `CoC Engine: Clean Version
  
Original concept by Fenoxo and crew
Converted to JS/React by Matraia

Version extremely early.

Click on New Game to Start 
`;

function mainMenu() {
  let actions = [UI.HIDE_STATS];
  return { actions };
}

function startNewGame() {
  const newButtons = {
    b1: {
      id: "b1",
      newOutput: MainMenuText,
      label: "Go back to Main Menu",
      nextScene: mainMenu
    }
  };
  const newMenuArr = ["main", "data", "level"];
  const actions = [UI.SHOW_STATS];
  return { newButtons, newMenuArr, actions };
}

function multiButton() {
  const newButtons = {
    b1: {
      id: "b1",
      newOutput: MainMenuText,
      label: "Go back to Main Menu",
      nextScene: mainMenu
    },
    b3: {
      id: "b3",
      newOutput: MainMenuText,
      label: "Go back to Main Menu",
      nextScene: mainMenu
    }
  };
  const newMenuArr = ["main", "data", "level"];
  return { newButtons, newMenuArr };
}

const Menus = {
  main: {
    id: "main",
    label: "New Game",
    newOutput: "New Game",
    toolTip: "Start a new game.",
    nextScene: startNewGame
  },
  data: {
    id: "data",
    label: "Data",
    newOutput: "Data",
    toolTip: "Save or load your files.",
    nextScene: multiButton
  },
  level: {
    id: "level",
    label: "Level Up",
    newOutput: "Level Up"
  },
  stats: {
    id: "stats",
    label: "Stats",
    newOutput: "Stats Screen",
    toolTip: "View your stats."
  },
  perks: {
    id: "perks",
    label: "Perks",
    newOutput: "Perks Screen",
    toolTip: "View your perks."
  },
  appearance: {
    id: "appearance",
    label: "Appearance",
    newOutput: "Appearance Screen",
    toolTip: "View your detailed appearance."
  }
};

export { Menus, MainMenuText };
