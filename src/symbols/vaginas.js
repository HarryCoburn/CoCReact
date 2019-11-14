import { makeSymbols } from "../utils";

export const TYPE = makeSymbols(["HUMAN", "EQUINE", "BLACK_SAND_TRAP"]);

export const WETNESS = makeSymbols([
  "DRY",
  "NORMAL",
  "WET",
  "SLICK",
  "DROOLING",
  "SLAVERING"
]);

export const LOOSENESS = makeSymbols([
  "TIGHT",
  "NORMAL",
  "LOOSE",
  "GAPING",
  "GAPING_WIDE",
  "CLOWN_CAR"
]);
