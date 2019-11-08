export const STAT_SET = "player/STAT_SET";
export const STAT_CHANGE = "player/STAT_CHANGE";
export const RESTORE_HP = "player/RESTORE_HP";

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

export function restoreHP() {
  return {
    type: RESTORE_HP
  };
}
