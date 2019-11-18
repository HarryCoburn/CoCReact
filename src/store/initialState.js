import React from "react";
import { START_NEW_GAME, DATA_MENU } from "../scenes/sceneSymbols";
import * as Skin from "../symbols/skin";

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
  stats: {
    strength: {
      name: "Strength",
      value: 0,
      max: 100,
      min: 0
    },
    toughness: {
      name: "Toughness",
      value: 0,
      max: 100,
      min: 0
    },
    speed: {
      name: "Speed",
      value: 0,
      max: 100,
      min: 0
    },
    intelligence: {
      name: "Intelligence",
      value: 0,
      max: 100,
      min: 0
    },
    libido: {
      name: "Libido",
      value: 0,
      max: 100,
      min: 0
    },
    sensitivity: {
      name: "Sensitivity",
      value: 0,
      max: 100,
      min: 0
    },
    corruption: {
      name: "Corruption",
      value: 0,
      max: 100,
      min: 0
    },
    hp: {
      name: "HP",
      value: 0,
      max: 100,
      min: 0,
      displayMax: true
    },
    lust: {
      name: "Lust",
      value: 0,
      max: 100,
      min: 0,
      displayMax: true
    },
    fatigue: {
      name: "Fatigue",
      value: 0,
      max: 100,
      min: 0,
      displayMax: true
    },
    hunger: {
      name: "Hunger",
      value: 0,
      max: 100,
      min: 0,
      displayMax: true
    },
    level: {
      name: "Level",
      value: 1,
      max: 99
    },
    xp: {
      name: "XP",
      value: 0,
      min: 0,
      max: 99,
      displayMax: true
    },
    gems: {
      name: "Gems",
      value: 0,
      min: 0,
      max: 9999
    },
    obey: 0,
    esteem: 0,
    will: 0
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
    stats: {
      length: 5,
      color: "brown"
    },
    allIDs: ["length", "color"]
  },
  butt: {
    stats: {
      rating: null
    },
    allIDs: ["rating"]
  },
  hips: {
    stats: {
      rating: null
    },
    allIDs: ["rating"]
  },
  skin: {
    stats: {
      tone: "light",
      type: Skin.TYPE.PLAIN
    },
    allIDs: ["tone", "type"]
  },
  stats: {
    tallness: 60,
    tone: 50,
    femininity: 0,
    thickness: 50
  },
  allIDs: ["name", "tallness", "tone", "femininity", "thickness"]
};

export const iPregnancy = {
  stats: {
    fertility: 0
  },
  allIDs: ["fertility"]
};

export const iCocks = {
  balls: {
    stats: {
      number: 0,
      size: 0
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
  hour: 0, //to reduce
  minute: 0, //to reduce
  allIDs: ["day", "hour", "minute"]
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
