import React from "react";
import initialState from "../store/initialState";
import * as UI from "../actions/UI";
import * as Player from "../actions/Player";
import updateStats from "./updateStats";
import updateLowerButtons from "./updateLowerButtons";
import updateMenuBar from "./updateMenuBar";
import * as Utils from "../utils";

function uiReducer(uiState, action) {
  switch (action.type) {
    case UI.HIDE_STATS:
      return Utils.updateObject(uiState, { showStats: false });
    case UI.SHOW_STATS:
      return Utils.updateObject(uiState, { showStats: true });
    case UI.HIDE_MENU_BAR:
      return Utils.updateObject(uiState, { showMenuBar: false });
    case UI.SHOW_MENU_BAR:
      return Utils.updateObject(uiState, { showMenuBar: true });
    default:
      return uiState;
  }
}

function outputReducer(
  output = (
    <>
      <p>CoC Engine: Clean Version</p>
      <p>
        Original concept by Fenoxo and crew
        <br />
        Converted to JS/React by Matraia
      </p>
      <p>Version extremely early.</p>
      <p>Click on New Game to Start </p>
    </>
  ),
  action
) {
  switch (action.type) {
    case UI.UPDATE_VIEW:
      return action.newText;
    default:
      return output;
  }
}

function statsReducer(stats, action) {
  switch (action.type) {
    case Player.STAT_CHANGE:
    case Player.STAT_SET:
    case Player.RESTORE_HP:
      return updateStats(stats, action);
    default:
      return stats;
  }
}

function buttonsReducer(buttons, action) {
  switch (action.type) {
    case UI.BUTTON_CHANGE:
      return updateLowerButtons(buttons, action);
    case UI.MENU_CHANGE:
      return updateMenuBar(buttons, action);
    default:
      return buttons;
  }
}

function appearanceReducer(appearance, action) {
  switch (action.type) {
    case Player.SET_PLAYER_NAME:
      return { ...appearance, name: action.payload };
    default:
      return appearance;
  }
}

export default function rootReducer(state = initialState, action) {
  return {
    output: outputReducer(state.output, action),
    UI: uiReducer(state.UI, action),
    stats: statsReducer(state.stats, action),
    buttons: buttonsReducer(state.buttons, action),
    appearance: appearanceReducer(state.appearance, action)
  };
}
