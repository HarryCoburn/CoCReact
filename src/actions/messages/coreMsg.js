/* Core messages for the engine */



/* Stat Bar */

/* Change stats by a given amount, up to set minimum or maximum */
export const CHANGE_STATS = Symbol("CHANGE_STATS");
/* Set stat to a specific number, up to a set minumum or maximum */
export const SET_STATS = Symbol("SET_STATS");
/* Hide the stat bar from view */
export const HIDE_STATS = Symbol("HIDE_STATS");
/* Show the stat bar if it's hidden */
export const SHOW_STATS = Symbol("SHOW_STATS");



/* States */

/* Restores previously saved state */
export const GO_BACK = Symbol("GO_BACK");
/* Saves a state */
export const STATE_STORE = Symbol("STATE_STORE");

/* Combat */

/* Starts Combat */
export const START_COMBAT = Symbol("START_COMBAT");
