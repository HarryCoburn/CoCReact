export function fetchScene(scene) {
  let stateUpdates = scene.function();
  let output = scene.text;

  return { output, stateUpdates };
}
