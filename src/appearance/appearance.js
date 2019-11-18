import store from "../store/store";
import sample from "lodash/sample";
import BreastCup from "../symbols/breastCup";

export const hasCock = () => {
  return store.getState().cocks.cocks.length > 0;
};

export const cockLength = (cockInd = 0) => {
  return store.getState().cocks.cocks[cockInd].length;
};

export const cockThickness = (cockInd = 0) => {
  return store.getState().cocks.cocks[cockInd].thickness;
};

export const breastCup = (breastInd = 0) => {
  let symbol = store.getState().breasts.breasts[breastInd].size;
  return {
    [BreastCup.FLAT]: "flat-chested",
    [BreastCup.A]: "A-cup",
    [BreastCup.B]: "B-cup",
    [BreastCup.C]: "C-cup",
    [BreastCup.D]: "D-cup"
  }[symbol];
};

export const skinColor = () => {
  return store.getState().appearance.skin.byID.tone.value;
};

export const hairColor = () => {
  return store.getState().appearance.hair.byID.color.value;
};

export const tallness = () => {
  return store.getState().appearance.byID.tallness.value;
};

export const hairDesc = (hairObj = store.getState().appearance.hair.byID) => {
  let lengthNum = hairObj.length.value;
  let color = hairObj.color.value;
  // let type = hairObj.type.value

  let length;

  if (lengthNum === 0) {
    length =
      sample(["shaved", "bald", "smooth", "hairless", "glabrous"]) + "head";
  } else if (lengthNum < 1) {
    length = sample(["close-cropped, ", "trim, ", "very short, "]);
  } else if (lengthNum < 3) {
    length = sample(["short, "]);
  } else if (lengthNum < 6) {
    length = sample(["shaggy, "]);
  } else if (lengthNum < 10) {
    length = sample(["moderately long, "]);
  } else if (lengthNum < 16) {
    length = sample(["long, ", "shoulder-length, "]);
  } else if (lengthNum < 26) {
    length = sample(["very long, ", "flowing locks of "]);
  } else if (lengthNum < 40) {
    length = sample(["ass-length, "]);
  } else if (lengthNum < tallness()) {
    length = sample(["obscenely-long, "]);
  } else {
    length = sample(["floor-length, ", "floor-dragging, "]);
  }

  if (lengthNum === 0) {
    return length;
  }

  return `${length} ${color} hair`;
};

/*
public static function hairDescription(i_creature:Creature):String {

  var options:Array;


  
  //
  // HAIR WORDS
  //
  switch (i_creature.hair.type) {
    case Hair.BASILISK_SPINES:
      options = [
        "rubbery spines",
        "spiny crown",
        "basilisk spines",
        "reptilian spines",
      ];
      return description + randomChoice(options);
    case Hair.BASILISK_PLUME:
      options = [
        "feathered hair",
        "fluffy plume",
        "basilisk plume",
        "shock of feathers",
      ];
      return description + randomChoice(options);
    case Hair.WOOL:
      options = [
        "woolen hair",
        "poofy hair",
        "soft wool",
        "untameable woolen hair",
      ];
      return description + randomChoice(options);
    case Hair.LEAF:
      options = [
        "leafy hair",
        "grassy hair",
        "pine needle hair",
      ];
      return description + randomChoice(options);
    default:
      //Move along.
  }
  // TODO: Fix the spaghetti-code below to use a switch-case-return and it'll be
  // case Hair.GOO: return description + "goo-mane";
  // and so on. (Stadler76)
  //If furry and longish hair sometimes call it a mane (50%)
  if (i_creature.hasFur() && i_creature.hair.length > 3 && rand(2) === 0) {
    if (i_creature.hair.type === Hair.FEATHER) description += "feather-";
    else if (i_creature.hair.type === Hair.GHOST) description += "transparent ";
    else if (i_creature.hair.type === Hair.GOO) description += "goo-";
    else if (i_creature.hair.type === Hair.ANEMONE) description += "tentacle-";
    else if (i_creature.hair.type === Hair.QUILL) description += "quill-";
    else if (i_creature.hair.type === Hair.WOOL) description += "wool-";
    description += "mane";
    return description;
  }

  //If nothing else used, use hair!
  if (i_creature.hair.type === Hair.FEATHER) description += "feather-";
  else if (i_creature.hair.type === Hair.GHOST) description += "transparent ";
  else if (i_creature.hair.type === Hair.GOO) description += "goo-";
  else if (i_creature.hair.type === Hair.ANEMONE) description += "tentacle-";
  else if (i_creature.hair.type === Hair.QUILL) description += "quill-";
  else if (i_creature.hair.type === Hair.WOOL) description += "woolen ";
  description += "hair";
  return description;
}
*/
