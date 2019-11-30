/* Messages related to enemies and combat */

/* Starts Combat */
export const START_COMBAT = Symbol("START_COMBAT");

/* Loads enemy for combat */
export const LOAD_ENEMY = Symbol("enemy/LOAD_ENEMY");

/* Applies damage to the enemy */
export const APPLY_DAMAGE = Symbol("enemy/APPLY_DAMAGE");

/* Ends Combat */
export const END_COMBAT = Symbol("enemy/END_COMBAT");

/* Changes whose turn it is for combat */
export const CHANGE_TURN = Symbol("enemy/CHANGE_TURN");

/* Applies damage to the player */
export const RECEIVE_DAMAGE = Symbol("player/RECEIVE_DAMAGE");
