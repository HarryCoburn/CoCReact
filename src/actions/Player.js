export const STAT_SET = "player/STAT_SET";
export const STAT_CHANGE = "player/STAT_CHANGE";
export const RESTORE_HP = "player/RESTORE_HP";
export const SET_PLAYER_NAME = "player/SET_PLAYER_NAME";

// Set player stats to a fixed number
export function setStats(changes) {
  if (!(changes instanceof Object) || changes === undefined) {
    throw Error("Player.statChange did not receive an object");
  }
  return {
    type: STAT_SET,
    changes
  };
}

// Changes player stats by the amount given
export function statChange(changes) {
  if (!(changes instanceof Object) || changes === undefined) {
    throw Error("UI.statChange did not receive an object");
  }
  return {
    type: STAT_CHANGE,
    changes
  };
}

// Restore player to maximum HP
export function restoreHP() {
  return {
    type: RESTORE_HP
  };
}

export function setPlayerName(name) {
  return {
    type: SET_PLAYER_NAME,
    payload: name
  };
}
