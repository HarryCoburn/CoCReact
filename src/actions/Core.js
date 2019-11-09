import SceneFuncs from "../scenes/sceneFunctions";

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
