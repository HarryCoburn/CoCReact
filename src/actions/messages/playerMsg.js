/* Actions related to the player */

/* Appearance-related actions */

export const SET_PLAYER_NAME = Symbol("player/SET_PLAYER_NAME");
export const SET_APPEARANCE = Symbol("player/SET_APPEARANCE");
export const CHANGE_APPEARANCE = Symbol("player/CHANGE_APPEARANCE");
export const SET_HAIR = Symbol("player/SET_HAIR");
export const SET_BALLS_STATS = Symbol("player/SET_BALLS_STATS");
export const CHANGE_BALLS_STATS = Symbol("player/SET_BALLS_STATS");
export const SET_BUTT_STATS = Symbol("player/SET_BUTT_STATS");
export const SET_HIPS_STATS = Symbol("player/SET_HIPS_STATS");
export const CREATE_COCK = Symbol("player/CREATE_COCK");
export const CREATE_BREAST_ROW = Symbol("player/CREATE_BREAST_ROW");
export const CHANGE_BREAST_ROW = Symbol("player/CHANGE_BREAST_ROW");
export const CREATE_VAGINA = Symbol("player/CREATE_VAGINA");
export const SET_SKIN = Symbol("player/SET_SKIN");

/* Pregnancy-related actions */

export const SET_PREG_STATS = Symbol("player/SET_PREG_STATS");
export const CHANGE_PREG_STATS = Symbol("player/SET_PREG_STATS");

/* Status-effect-related actions */

export const CREATE_STATUS_EFFECT = Symbol("player/CREATE_STATUS_EFFECT");
export const REMOVE_STATUS_EFFECT = Symbol("player/REMOVE_STATUS_EFFECT");
export const ADD_STATUS_VALUE = Symbol("player/ADD_STATUS_VALUE");

/* Misc */

export const RESTORE_HP = Symbol("player/RESTORE_HP");