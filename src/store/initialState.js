// For experimentation
const succ = () => {
  console.log("We did it!");
  const newButtons = {
    b1: {
      newOutput: `This is the extra new stuff`,
      label: "New shiny label!",
      runFunc: bigSucc,
      newButtons: {}
    }
  };
  const newStats = [["strength", -50], ["toughness", +45]];
  return { newButtons, newStats };
};
const bigSucc = () => {
  console.log("We really did it!");
  const newButtons = [
    {
      newOutput: "Hey, the other button works!",
      label: "New shiny shiny label!",
      runFunc: bigSucc,
      newButtons: {}
    }
  ];
  return { newButtons };
};

// And we need an initial state
const initialState = {
  output: "This is the old stuff...",
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
    advIDs: ["level", "xp", "gems"]
  },

  currComStats: [],
  currAdvStats: [
    {
      name: "Level",
      value: 1
    },
    {
      name: "XP",
      value: 0
    },
    {
      name: "Gems",
      value: 0
    }
  ],
  lowerButtons: {
    byID: {
      b1: {
        id: "b1",
        label: "Click me",
        newOutput: "This is the new stuff",
        runFunc: succ
      },
      b3: {
        id: "b3",
        label: "Click me",
        newOutput: "This is the new stuff",
        runFunc: succ
      }
    },
    allIDs: [
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
    ]
  },
  currButtons: [
    {
      label: "Click me",
      newOutput: "This is the new stuff",
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    },
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ
    }
  ]
};

export default initialState;
