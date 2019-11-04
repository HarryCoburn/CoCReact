import SceneFuncs from "../scenes/sceneFunctions";

export function fetchScene(scene) {
  let sceneFunction = SceneFuncs[scene.id];

  let stateUpdates = sceneFunction();
  let output = scene.text;

  return { output, stateUpdates };
}
