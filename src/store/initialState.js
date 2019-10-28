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
  return newButtons;
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
  return newButtons;
};

// And we need an initial state
const initialState = {
  output: "This is the old stuff...",
  currStats: [
    {
      name: "Strength",
      val: 100
    },
    {
      name: "Toughness",
      val: 100
    },
    {
      name: "Speed",
      val: 100
    },
    {
      name: "Intelligence",
      val: 100
    },
    {
      name: "Libido",
      val: 100
    },
    {
      name: "Sensitivity",
      val: 100
    },
    {
      name: "Corruption",
      val: 100
    }
  ],
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
