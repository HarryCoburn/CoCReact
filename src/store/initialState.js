import React from "react";
import { Menus } from "../scenes/menus.js";

// And we need an initial state
const initialState = {
  output: (
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
  ),
  day: "0", //to reduce
  hour: "12", //to reduce
  minute: "00", //to reduce
  UI: {
    showStats: false,
    showMenuBar: true
  },
  stats: {
    byID: {
      strength: {
        id: "strength",
        name: "Strength",
        value: 100,
        max: 100,
        min: 0
      },
      toughness: {
        id: "toughness",
        name: "Toughness",
        value: 100,
        max: 100,
        min: 0
      },
      speed: {
        id: "speed",
        name: "Speed",
        value: 100,
        max: 100,
        min: 0
      },
      intelligence: {
        id: "intelligence",
        name: "Intelligence",
        value: 100,
        max: 100,
        min: 0
      },
      libido: {
        id: "libido",
        name: "Libido",
        value: 100,
        max: 100,
        min: 0
      },
      sensitivity: {
        id: "sensitivity",
        name: "Sensitivity",
        value: 100,
        max: 100,
        min: 0
      },
      corruption: {
        id: "corruption",
        name: "Corruption",
        value: 100,
        max: 100,
        min: 0
      },
      hp: {
        id: "hp",
        name: "HP",
        value: 100,
        max: 100,
        min: 0
      },
      lust: {
        id: "lust",
        name: "Lust",
        value: 100,
        max: 100,
        min: 0
      },
      fatigue: {
        id: "fatigue",
        name: "Fatigue",
        value: 100,
        max: 100,
        min: 0
      },
      hunger: {
        id: "hunger",
        name: "Hunger",
        value: 100,
        max: 100,
        min: 0
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
        max: 99
      },
      gems: {
        id: "gems",
        name: "Gems",
        value: 0,
        min: 0,
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
  buttons: {
    byID: {
      u1: Menus.main,
      u2: Menus.data
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
    upperIDs: ["u1", "u2", "u3", "u4", "u5", "u6", "u7"]
  }
};

export default initialState;
