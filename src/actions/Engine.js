import SceneFuncs from "../scenes/sceneFunctions";
import * as Engine from "./engineMsg";
import store from "../store/store";

/**
 * Either calls a function with its parameters, or looks up a scene
 * through the lookup table an calls its matching function with parameters.
 * This isolates scenes from one another and avoids circular dependencies.
 * @param {Symbol} scene
 * @returns {object} object containing new scene information
 */
export function fetchScene(scene, params) {
  if (typeof scene === "function") {
    scene(params);
  } else {
    let sceneFunction = SceneFuncs[scene];

    if (typeof sceneFunction === "function") {
      sceneFunction(params);
    } else {
      throw Error(
        "Core.fetchScene tried to retrieve a sceneFunction that was not a function."
      );
    }
  }
}

export const Perks = {
  STRONG: 1,
  FAST: 2,
  properties: {
    1: { id: "STRONG", name: "Strong" },
    2: { id: "FAST", name: "Fast" }
  }
};

export const createPerkList = () => {
  return [Perks.STRONG, Perks.FAST];
};

function _preparePerk(input) {
  return {
    type: Engine.PREPARE_PERK,
    payload: input
  };
}

export const preparePerk = input => store.dispatch(_preparePerk(input));
