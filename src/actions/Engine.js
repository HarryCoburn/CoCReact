import SceneFuncs from "../scenes/sceneFunctions";
import * as SceneMsg from "../scenes/sceneSymbols";

/**
 * Takes a scene noun, calls its matching function,
 * then calls all related dispateches to create the new state.
 * @param {Symbol} scene
 * @returns {object} object containing new scene information
 */
export function fetchScene(scene) {
  console.log("Incoming scene is...");
  console.log(scene);
  let stateUpdates;
  let sceneFunction = SceneFuncs[scene];
  console.log("Our scene function is...");
  console.log(sceneFunction);

  // Make sure there's a sceneFunction
  if (typeof sceneFunction === "function") {
    stateUpdates = sceneFunction();
    console.log("State updates has: ");
    console.log(stateUpdates);
  } else {
    throw Error(
      "Core.fetchscene tried to retrieve a sceneFunction that was not a function."
    );
  }

  if (scene === SceneMsg.GO_BACK) {
    console.log("Detected GO_BACK, aborting the rest of fetch scene.");
    return;
  }

  /*
    // Make sure the scene function returns something
    if (stateUpdates === undefined) {
      return;
    }
  
    // Unpack it
    let {
      newButtons = {},
      newStats = {},
      newMenus = {},
      actions = null,
      newText = "",
      prevState = null
    } = stateUpdates;
  
    if (prevState !== null) {
      store.dispatch(stateStore(prevState));
    }
  
    // Future text processing
    let processedOutput = newText;
  
    // Call all standard dispatches
    store.dispatch(buttonChange(newButtons)); // Undefined means clear lower menu completely
    store.dispatch(menuChange(newMenus)); // Undefined will just return state
    store.dispatch(statChange(newStats));
    store.dispatch(updateView(processedOutput));
  
    store.dispatch(gameStarted());
  
    // Then call action dispatches
    if (actions !== null) {
      actions.forEach(action => {
        store.dispatch(actionSelect(action));
      });
    }
    */
}
