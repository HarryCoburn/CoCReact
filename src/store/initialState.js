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
    str: {
      name: "Strength",
      value: 0,
      max: 100,
      min: 0
    },
    tou: {
      name: "Toughness",
      value: 0,
      max: 100,
      min: 0
    },
    spe: {
      name: "Speed",
      value: 0,
      max: 100,
      min: 0
    },
    int: {
      name: "Intelligence",
      value: 0,
      max: 100,
      min: 0
    },
    lib: {
      name: "Libido",
      value: 0,
      max: 100,
      min: 0
    },
    sen: {
      name: "Sensitivity",
      value: 0,
      max: 100,
      min: 0
    },
    cor: {
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
    fat: {
      name: "Fatigue",
      value: 0,
      max: 100,
      min: 0,
      displayMax: true
    },
    hun: {
      name: "Hunger",
      value: 0,
      max: 100,
      min: 0,
      displayMax: true
    },
    lvl: {
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
  coreIDs: ["str", "tou", "spe", "int", "lib", "sen", "cor"],
  combatIDs: ["hp", "lust", "fat", "hun"],
  advIDs: ["lvl", "xp", "gems"],
  allIDs: [
    "str",
    "tou",
    "spe",
    "int",
    "lib",
    "sen",
    "cor",
    "hp",
    "lust",
    "fat",
    "hun",
    "lvl",
    "xp",
    "gems",
    "obey",
    "esteem",
    "will"
  ]
};

export const iLower = {
  past: [],
  present: [],
  maxButtons: 16
};

export const iUpper = {
  past: [],
  present: [
    {
      label: "New Game",
      toolTip: "Start a new game.",
      nextScene: START_NEW_GAME
    },
    {
      id: "data",
      label: "Data",
      toolTip: "Save or load your files.",
      nextScene: DATA_MENU
    }
  ],
  maxButtons: 8
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
  beard: {
    stats: {
      length: 0,
      style: 0
    },
    allIDs: ["length", "style"]
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
