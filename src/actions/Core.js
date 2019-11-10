// Contains functions that control the core of the engine

import SceneFuncs from "../scenes/sceneFunctions";
import store from "../store/store";
import * as UI from "./UI";
import * as Player from "./Player";

/**
 * Takes a scene noun, calls its matching function,
 * then calls all related dispateches to create the new state.
 * @param {Symbol} scene
 * @returns {object} object containing new scene information
 */
export function fetchScene(scene) {
  let stateUpdates;
  let sceneFunction = SceneFuncs[scene];

  // Make sure there's a sceneFunction
  if (typeof sceneFunction === "function") {
    stateUpdates = sceneFunction();
  } else {
    throw Error(
      "Core.fetchscene tried to retrieve a sceneFunction that was not a function."
    );
  }

  // Make sure the scene function returns something
  if (stateUpdates === undefined) {
    throw Error("stateUpdates returned undefined");
  }

  // Unpack it
  let {
    newButtons = {},
    newStats = {},
    newMenus = {},
    actions = null,
    newText = ""
  } = stateUpdates;

  // Future text processing
  let processedOutput = newText;

  // Call all standard dispatches
  store.dispatch(UI.buttonChange(newButtons)); // Undefined means clear lower menu completely
  store.dispatch(UI.menuChange(newMenus)); // Undefined will just return state
  store.dispatch(Player.statChange(newStats));
  store.dispatch(UI.updateView(processedOutput));

  // Then call action dispatches
  if (actions !== null) {
    actions.forEach(action => {
      store.dispatch(UI.actionSelect(action));
    });
  }
}
