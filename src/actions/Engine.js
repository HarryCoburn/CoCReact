import SceneFuncs from "../scenes/sceneFunctions";

/**
 * Takes a scene noun, calls its matching function,
 * then calls all related dispateches to create the new state.
 * @param {Symbol} scene
 * @returns {object} object containing new scene information
 */
export function fetchScene(scene, params) {
  let sceneFunction = SceneFuncs[scene];

  if (typeof sceneFunction === "function") {
    sceneFunction(params);
  } else {
    throw Error(
      "Core.fetchscene tried to retrieve a sceneFunction that was not a function."
    );
  }
}
