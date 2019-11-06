import SceneFuncs from "../scenes/sceneFunctions";

export function fetchScene(scene) {
  let sceneFunction = SceneFuncs[scene.id];
  if (typeof sceneFunction === "function") {
    let stateUpdates = sceneFunction();
    let output = scene.text;

    return { output, stateUpdates };
  } else {
    throw Error(
      "Core.fetchscene tried to retrieve a sceneFunction that was not a function."
    );
  }
}
