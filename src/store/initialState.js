// For experimentation
const succ = () => {
  console.log("We did it!");
  const newButtons = [
    {
      newOutput: `This is the extra new stuff`,
      label: "New shiny label!",
      runFunc: bigSucc,
      newButtons: []
    }
  ];
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
      newButtons: []
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
      }
    },
    allIDs: [
      "strength",
      "toughness",
      "speed",
      "intelligence",
      "libido",
      "sensitivity",
      "corruption"
    ]
  },

  currComStats: [
    {
      name: "HP",
      currVal: 100,
      maxVal: 100
    },
    {
      name: "Lust",
      currVal: 100,
      maxVal: 100
    },
    {
      name: "Fatigue",
      currVal: 100,
      maxVal: 100
    },
    {
      name: "Hunger",
      currVal: 100,
      maxVal: 100
    }
  ],
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
