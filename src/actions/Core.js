// The core of the engine
import SceneFuncs from "../scenes/sceneFunctions";
import store from "../store/store";
import * as CoreMsg from "./coreMsg";
import * as EngineMsg from "./engineMsg";
import * as SceneMsg from "../scenes/sceneSymbols";
// Here are our actions

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
}

export function stateStore(payload) {
  console.log("StateStore Called");
  let oldState = store.getState();
  return {
    type: CoreMsg.STATE_STORE,
    payload: oldState
  };
}

export function updateTime(payload) {
  return {
    type: CoreMsg.UPDATE_TIME,
    payload: payload
  };
}

/**
 * Message sender for certain simple UI actions,
 * mostly hiding and showing parts of the UI.
 * @param {const} action
 * @return {object} Redux action
 */
export function actionSelect(action) {
  switch (action) {
    case CoreMsg.HIDE_STATS:
      return {
        type: action
      };
    case CoreMsg.SHOW_STATS:
      return {
        type: action
      };
    case CoreMsg.HIDE_MENU_BAR:
      return {
        type: action
      };
    case CoreMsg.SHOW_MENU_BAR:
      return {
        type: action
      };
    default:
      throw Error(
        "Attempted to send an action to Core.actionSelect that isn't in the switch case. Confirm you're sending the right actions!"
      );
  }
}

export function gameStarted() {
  return {
    type: EngineMsg.GAME_STARTED
  };
}

/**
 * Message sender for updating the text in the view.
 * @param {JSX} payload
 * @return {object} Redux action
 */
export function updateView(payload) {
  return {
    type: CoreMsg.UPDATE_VIEW,
    payload
  };
}

/**
 * Message sender for updating the buttons in the lower part of the UI
 * Shape of object: { b1: { // button info } }
 * All buttons must have the nextScene property set!
 * @param {object} payload
 * @return {object} Redux action
 */
export function buttonChange(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("UI.buttonChange did not receive an object");
  }
  //TODO Check for all required button properties before sending message
  return {
    type: CoreMsg.UPDATE_BUTTONS,
    payload
  };
}

/**
 * Message sender for updating the buttons in the upper part of the UI
 * Shape of object: { u1: { //button info} }
 * All buttons must have the nextScene property set!
 * @param {object} payload
 * @return {object} Redux action
 */
export function menuChange(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("UI.menuChange did not receive an object");
  }
  //TODO Check for all required button properties before sending message
  return {
    type: CoreMsg.UPDATE_MENUS,
    payload
  };
}

/**
 * Sends message to set a stat to a particular number
 * Payload shape: { strength: 23 }
 * @param {object} payload
 * @return {object} Redux action
 */
export function setStats(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("Player.statChange did not receive an object");
  }
  return {
    type: CoreMsg.SET_STATS,
    payload
  };
}

/**
 * Sends message to increase or decrease a stat by a particular number
 * Payload shape: { strength: 8 } or { strength: -19 }
 * @param {object} payload
 * @return {object} Redux action
 */
export function statChange(payload) {
  if (!(payload instanceof Object) || payload === undefined) {
    throw Error("UI.statChange did not receive an object");
  }
  return {
    type: CoreMsg.UPDATE_STATS,
    payload
  };
}
