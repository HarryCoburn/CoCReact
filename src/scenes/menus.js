const MainMenuText = `CoC Engine: Clean Version
  
Original concept by Fenoxo and crew
Converted to JS/React by Matraia

Version extremely early.

Click on New Game to Start 
`;

function startNewGame() {
  const newButtons = {
    b1: {
      newOutput: MainMenuText,
      label: "Go back to Main Menu",
      runFunc: mainMenu
    }
  };
  return { newButtons };
}

function mainMenu() {
  return {};
}

const Menus = {
  main: {
    id: "main",
    label: "New Game",
    newOutput: "New Game",
    toolTip: "Do we work on top?",
    runFunc: startNewGame
  },
  data: {
    id: "data",
    label: "Data",
    newOutput: "Data",
    runFunc: null
  },
  level: {
    id: "level",
    label: "Level Up",
    newOutput: "Level Up",
    runFunc: null
  },
  stats: {
    id: "stats",
    label: "Stats",
    newOutput: "Stats Screen",
    runFunc: null
  },
  perks: {
    id: "perks",
    label: "Perks",
    newOutput: "Perks Screen",
    runFunc: null
  },
  appearance: {
    id: "appearance",
    label: "Appearance",
    newOutput: "Appearance Screen",
    runFunc: null
  }
};

export { Menus, MainMenuText };
