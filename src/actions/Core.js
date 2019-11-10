// Contains functions that control the core of the engine

import SceneFuncs from "../scenes/sceneFunctions";

/**
 * Takes a scene noun and calls its matching function to generate a new scene
 * @param {Symbol} scene
 * @returns {object} object containing new scene information
 */
export function fetchScene(scene) {
  let sceneFunction = SceneFuncs[scene];
  if (typeof sceneFunction === "function") {
    let stateUpdates = sceneFunction();
    return stateUpdates;
  } else {
    throw Error(
      "Core.fetchscene tried to retrieve a sceneFunction that was not a function."
    );
  }
}
