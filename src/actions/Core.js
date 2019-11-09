import SceneFuncs from "../scenes/sceneFunctions";

export function fetchScene(scene) {
  console.log(scene);
  let sceneFunction = SceneFuncs[scene];
  console.log(sceneFunction);
  if (typeof sceneFunction === "function") {
    let stateUpdates = sceneFunction();
    return stateUpdates;
  } else {
    throw Error(
      "Core.fetchscene tried to retrieve a sceneFunction that was not a function."
    );
  }
}
