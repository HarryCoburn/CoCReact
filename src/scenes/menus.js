const MainMenuText = `CoC Engine: Clean Version
  
Original concept by Fenoxo and crew
Converted to JS/React by Matraia

Version extremely early.

Click on New Game to Start 
`;

function mainMenu() {
  return {};
}

function startNewGame() {
  const newButtons = {
    b1: {
      newOutput: MainMenuText,
      label: "Go back to Main Menu",
      nextScene: mainMenu
    }
  };
  return { newButtons };
}

const Menus = {
  main: {
    id: "main",
    label: "New Game",
    newOutput: "New Game",
    toolTip: "Do we work on top?",
    nextScene: startNewGame
  },
  data: {
    id: "data",
    label: "Data",
    newOutput: "Data"
  },
  level: {
    id: "level",
    label: "Level Up",
    newOutput: "Level Up"
  },
  stats: {
    id: "stats",
    label: "Stats",
    newOutput: "Stats Screen"
  },
  perks: {
    id: "perks",
    label: "Perks",
    newOutput: "Perks Screen"
  },
  appearance: {
    id: "appearance",
    label: "Appearance",
    newOutput: "Appearance Screen"
  }
};

export { Menus, MainMenuText };
