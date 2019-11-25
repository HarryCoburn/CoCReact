import React from "react";
import {
  START_NEW_GAME,
  DATA_MENU,
  START_COMBAT
} from "../scenes/sceneSymbols";
import * as Skin from "../symbols/skin";
import Face from "../symbols/face";
import LowerBody from "../symbols/lowerBody";
import Tongue from "../symbols/tongue";
import Tail from "../symbols/tail";
import Wings from "../symbols/wings";
import { armors, weapons, undergarments } from "../symbols/gear";
import { Goblin } from "../symbols/enemies/goblin";

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
    gameStarted: false,
    selectedPerk: null,
    perks: [],
    inDungeon: false,
    inCombat: false,
    dungeonLoc: 0,
    inRoomedDungeon: false,
    inRoomedDungeonResume: null,
    perksGained: []
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
      value: 15,
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
  present: [
    {
      label: "Combat Demo",
      toolTip: "Start combat demo",
      nextScene: START_COMBAT,
      params: [Goblin, Goblin]
    }
  ],
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
      rating: null,
      looseness: 0,
      wetness: 0,
      fullness: 0
    },
    allIDs: ["rating", "looseness", "wetness", "fullness"]
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
      type: Skin.TYPE.PLAIN,
      desc: "skin",
      adj: ""
    },
    allIDs: ["tone", "type", "desc", "adj"]
  },
  beard: {
    stats: {
      length: 0,
      style: 0
    },
    allIDs: ["length", "style"]
  },
  lowerBody: {
    stats: {
      type: LowerBody.HUMAN,
      legCount: 2
    },
    allIDs: ["type", "legCount"]
  },
  face: {
    stats: {
      type: Face.HUMAN,
      horns: 0
    },
    allIDs: ["type", "horns"]
  },
  eyes: {
    stats: {
      type: null,
      count: 2
    },
    allIDs: ["type", "count"]
  },
  tongue: {
    stats: {
      type: Tongue.HUMAN
    },
    allIDs: ["type"]
  },
  wings: {
    stats: {
      type: Wings.NONE
    },
    allIDs: ["type"]
  },
  tail: {
    stats: {
      type: Tail.NONE,
      venom: 0,
      recharge: 0
    },
    allIDs: ["type", "venom", "recharge"]
  },
  piercings: {
    stats: {
      nipplesPierced: 0,
      nipplesPShort: "",
      nipplesPLong: "",
      lipPierced: 0,
      lipPShort: "",
      lipPLong: "",
      tonguePierced: 0,
      tonguePShort: "",
      tonguePLong: "",
      eyebrowPierced: 0,
      eyebrowPShort: "",
      eyebrowPLong: "",
      earsPierced: 0,
      earsPShort: "",
      earsPLong: "",
      nosePierced: 0,
      nosePShort: "",
      nosePLong: ""
    },
    allIDs: [
      "nipplesPierced",
      "nipplesPShort",
      "nipplesPLong",
      "lipPierced",
      "lipPShort",
      "lipPLong",
      "tonguePierced",
      "tonguePShort",
      "tonguePLong",
      "eyebrowPierced",
      "eyebrowPShort",
      "eyebrowPLong",
      "earsPierced",
      "earsPShort",
      "earsPLong",
      "nosePierced",
      "nosePShort",
      "nosePLong"
    ]
  },
  stats: {
    tallness: 60,
    tone: 50,
    femininity: 50,
    thickness: 50
  },
  allIDs: ["name", "tallness", "tone", "femininity", "thickness"]
};

export const iPregnancy = {
  stats: {
    fertility: 5
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

export const iSex = {
  stats: {
    hoursSinceCum: 0,
    cumMultiplier: 1
  },
  allIDs: ["hoursSinceCum", "cumMultiplier"]
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

export const iInventory = {
  inventory: [],
  maxSlots: 3
};

export const iCombat = {
  armor: armors.C_CLOTH,
  weapon: weapons.FISTS,
  undergarment: undergarments.C_LOIN,
  enemy: null,
  playerTurn: true,
  playerAttack: 5
};
