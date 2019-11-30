/* Lower Buttons */

/* Delete the current lower buttons and add new buttons */
export const CHANGE_BUTTONS = Symbol("CHANGE_BUTTONS");
/* Add new button to the current set. Will overwrite existing button */
export const ADD_BUTTON = Symbol("ADD_BUTTON");
/* Remove button from the current set */
export const REMOVE_BUTTON = Symbol("REMOVE_BUTTON");

/* Upper Buttons */

/* Delete the current upper buttons and add new buttons */
export const CHANGE_MENUS = Symbol("UPDATE_MENUS");

export const ADD_MENU = Symbol("ADD_MENU");
export const REMOVE_MENU = Symbol("REMOVE_MENU");


/* UI */

/* Hide the menu bar from view */
export const HIDE_MENU_BAR = Symbol("HIDE_MENU_BAR");
/* Show the menu bar if it's hidden */
export const SHOW_MENU_BAR = Symbol("SHOW_MENU_BAR");
