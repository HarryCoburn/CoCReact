import React from "react";
import { START_NEW_GAME, DATA_MENU } from "../scenes/sceneSymbols";

export const iUIState = {
  past: [],
  present: {
    showStats: false,
    showMenuBar: true
  }
};

export const iEngineState = {
  past: [],
  present: {
    gameStarted: false
  }
};

export const iStats = {
  byID: {
    strength: {
      id: "strength",
      name: "Strength",
      value: 0,
      max: 100,
      min: 0
    },
    toughness: {
      id: "toughness",
      name: "Toughness",
      value: 0,
      max: 100,
      min: 0
    },
    speed: {
      id: "speed",
      name: "Speed",
      value: 0,
      max: 100,
      min: 0
    },
    intelligence: {
      id: "intelligence",
      name: "Intelligence",
      value: 0,
      max: 100,
      min: 0
    },
    libido: {
      id: "libido",
      name: "Libido",
      value: 0,
      max: 100,
      min: 0
    },
    sensitivity: {
      id: "sensitivity",
      name: "Sensitivity",
      value: 0,
      max: 100,
      min: 0
    },
    corruption: {
      id: "corruption",
      name: "Corruption",
      value: 0,
      max: 100,
      min: 0
    },
    hp: {
      id: "hp",
      name: "HP",
      value: 0,
      max: 100,
      min: 0,
      displayMax: true
    },
    lust: {
      id: "lust",
      name: "Lust",
      value: 0,
      max: 100,
      min: 0,
      displayMax: true
    },
    fatigue: {
      id: "fatigue",
      name: "Fatigue",
      value: 0,
      max: 100,
      min: 0,
      displayMax: true
    },
    hunger: {
      id: "hunger",
      name: "Hunger",
      value: 0,
      max: 100,
      min: 0,
      displayMax: true
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
      min: 0,
      max: 99,
      displayMax: true
    },
    gems: {
      id: "gems",
      name: "Gems",
      value: 0,
      min: 0,
      max: 9999
    },
    obey: {
      id: "obey",
      value: 0
    },
    esteem: {
      id: "esteem",
      value: 0
    },
    will: {
      id: "will",
      value: 0
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
    "gems",
    "obey",
    "esteem",
    "will"
  ]
};

export const iLower = {
  past: [],
  present: {},

  IDs: [
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
};

export const iUpper = {
  past: [],
  present: {
    u1: {
      id: "newGame",
      label: "New Game",
      toolTip: "Start a new game.",
      nextScene: START_NEW_GAME
    },
    u2: {
      id: "data",
      label: "Data",
      toolTip: "Save or load your files.",
      nextScene: DATA_MENU
    }
  },
  IDs: ["u1", "u2", "u3", "u4", "u5", "u6", "u7", "u8"]
};

export const iAppearance = {
  name: "",
  hair: {
    byID: {
      length: {
        value: 0
      }
    },
    allIDs: ["length"]
  },
  byID: {
    tallness: {
      value: 0
    },
    tone: {
      value: 0
    }
  },
  allIDs: ["name", "tallness", "tone"]
};

export const iPregnancy = {
  byID: {
    fertility: {
      value: 0
    }
  },
  allIDs: ["fertility"]
};

export const iCocks = {
  balls: {
    byID: {
      number: {
        value: 0
      },
      size: {
        value: 0
      }
    },
    allIDs: ["number", "size"]
  },
  cocks: []
};

export const iBreasts = {
  breasts: [],
  maxBreastRows: 10
};

export const iVaginas = {
  vaginas: []
};

export const iTime = {
  day: 0, //to reduce
  hour: 12, //to reduce
  minute: 0 //to reduce
};

export const iOutput = {
  past: [],
  present: (
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
};

export const iState = {};
