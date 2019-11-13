import * as CoreMsg from "../actions/coreMsg";
import { START_NEW_GAME, DATA_MENU, MAIN_MENU, GO_BACK } from "./sceneSymbols";
import store from "../store/store";

export function mainMenu(store) {
  console.log("We've entred the main menu...");
  const prevState = store.getState();
  const newMenus = {
    u1: MenuButtons.goBack,
    u2: MenuButtons.data
  };
  let actions = [CoreMsg.HIDE_STATS, CoreMsg.SHOW_MENU_BAR];
  return { newMenus, actions, prevState };
}

export function dataMenu() {
  const newMenus = {
    u2: MenuButtons.data
  };
  const newButtons = {
    b1: {
      id: "b1",
      label: "Go back to Main Menu",
      nextScene: MAIN_MENU
    },
    b3: {
      id: "b3",
      label: "Go back to Main Menu",
      nextScene: MAIN_MENU
    }
  };
  return { newMenus, newButtons };
}

export function goBack() {
  let oldStore = store.getState();
  console.log(oldStore.engine.prevState);
  store.dispatch({
    type: CoreMsg.GO_BACK,
    payload: oldStore.engine.prevState
  });
}

export const MenuButtons = {
  newGame: {
    id: "newGame",
    label: "New Game",
    toolTip: "Start a new game.",
    nextScene: START_NEW_GAME
  },
  data: {
    id: "data",
    label: "Data",
    toolTip: "Save or load your files.",
    nextScene: DATA_MENU
  },
  main: {
    id: "main",
    label: "Main Menu",
    nextScene: MAIN_MENU
  },
  goBack: {
    id: "goBack",
    label: "Go Back",
    nextScene: GO_BACK
  },
  level: {
    id: "level",
    label: "Level Up",
    nextScene: null
  },
  stats: {
    id: "stats",
    label: "Stats",
    toolTip: "View your stats.",
    nextScene: null
  },
  perks: {
    id: "perks",
    label: "Perks",
    toolTip: "View your perks.",
    nextScene: null
  },
  appearance: {
    id: "appearance",
    label: "Appearance",
    toolTip: "View your detailed appearance.",
    nextScene: null
  }
};
