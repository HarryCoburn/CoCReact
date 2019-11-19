import SceneFuncs from "../scenes/sceneFunctions";

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
        "Core.fetchscene tried to retrieve a sceneFunction that was not a function."
      );
    }
  }
}
