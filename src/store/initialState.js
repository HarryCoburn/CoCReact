import { Menus, MainMenuText } from "../scenes/menus.js";

// For experimentation
/*
const succ = () => {
  console.log("We did it!");
  const newButtons = {
    b1: {
      newOutput: `This is the extra new stuff`,
      label: "New shiny label!",
      nextScene: bigSucc,
      newButtons: {}
    }
  };
  const newStats = {
    strength: {
      change: -50
    },
    toughness: {
      change: +45
    }
  };
  return { newButtons, newStats };
};
const bigSucc = () => {
  console.log("We really did it!");
  const newButtons = [
    {
      newOutput: "Hey, the other button works!",
      label: "New shiny shiny label!",
      nextScene: bigSucc,
      newButtons: {}
    }
  ];
  return { newButtons };
};
*/

// And we need an initial state
const initialState = {
  output: MainMenuText,
  day: "0",
  hour: "12",
  minute: "00",
  statsUI: {
    byID: {
      strength: {
        id: "strength",
        name: "Strength",
        value: 100,
        max: null
      },
      toughness: {
        id: "toughness",
        name: "Toughness",
        value: 100,
        max: null
      },
      speed: {
        id: "speed",
        name: "Speed",
        value: 100,
        max: null
      },
      intelligence: {
        id: "intelligence",
        name: "Intelligence",
        value: 100,
        max: null
      },
      libido: {
        id: "libido",
        name: "Libido",
        value: 100,
        max: null
      },
      sensitivity: {
        id: "sensitivity",
        name: "Sensitivity",
        value: 100,
        max: null
      },
      corruption: {
        id: "corruption",
        name: "Corruption",
        value: 100,
        max: null
      },
      hp: {
        id: "hp",
        name: "HP",
        value: 100,
        max: 100
      },
      lust: {
        id: "lust",
        name: "Lust",
        value: 100,
        max: 100
      },
      fatigue: {
        id: "fatigue",
        name: "Fatigue",
        value: 100,
        max: 100
      },
      hunger: {
        id: "hunger",
        name: "Hunger",
        value: 100,
        max: 100
      },
      level: {
        id: "level",
        name: "Level",
        value: 1,
        max: 99
      },
      xp: {
        id: "xp",
        name: "XP",
        value: 0,
        max: 99
      },
      gems: {
        id: "gems",
        name: "Gems",
        value: 0,
        max: 9999
      }
    },
    coreIDs: [
      "strength",
      "toughness",
      "speed",
      "intelligence",
      "libido",
      "sensitivity",
      "corruption"
    ],
    combatIDs: ["hp", "lust", "fatigue", "hunger"],
    advIDs: ["level", "xp", "gems"],
    allIDs: [
      "strength",
      "toughness",
      "speed",
      "intelligence",
      "libido",
      "sensitivity",
      "corruption",
      "hp",
      "lust",
      "fatigue",
      "hunger",
      "level",
      "xp",
      "gems"
    ]
  },
  Buttons: {
    byID: {
      main: Menus.main,
      data: Menus.data
    },
    lowerIDs: [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5",
      "b6",
      "b7",
      "b8",
      "b9",
      "b10",
      "b11",
      "b12",
      "b13",
      "b14",
      "b15"
    ],
    upperIDs: ["main", "data"]
  }
};

export default initialState;
