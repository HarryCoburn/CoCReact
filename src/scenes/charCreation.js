import React from "react";
import SceneText from "./sceneTextStore";
import { MenuButtons } from "./menus";
import {
  GENDER_SELECT,
  START_NEW_GAME,
  IS_A_MAN,
  IS_A_WOMAN,
  BUILD_LEAN_MALE,
  BUILD_AVERAGE_MALE,
  BUILD_THICK_MALE,
  BUILD_GIRLY_MALE,
  BUILD_SLENDER_FEMALE,
  BUILD_AVERAGE_FEMALE,
  BUILD_CURVY_FEMALE,
  BUILD_TOMBOYISH_FEMALE,
  SET_COMPLEXION,
  SET_HAIR,
  CONFIRM_STYLE,
  CONFIRM_COMPLEXION,
  CONFIRM_HAIR_COLOR,
  CONFIRM_HEIGHT,
  CONFIRM_COCK_LENGTH,
  CONFIRM_BREAST_SIZE,
  CHOOSE_ENDOWMENT
} from "./sceneSymbols";
import * as A from "../appearance/appearance";
import * as Core from "../actions/Core";
import * as Player from "../actions/Player";
import Butt from "../symbols/butt";
import Hips from "../symbols/hips";
import BreastCup from "../symbols/breastCup";

export const startNewGame = () => {
  Core.changeButtons([
    ["Confirm Name", GENDER_SELECT, , "Click to confirm name"]
  ]);
  Core.newText(SceneText.CharCreation[START_NEW_GAME].text);
  Core.changeMenus([MenuButtons.main, MenuButtons.data, MenuButtons.level]);
  Core.setStats({
    str: 15,
    tou: 15,
    spe: 15,
    int: 15,
    sen: 15,
    lib: 15,
    cor: 15,
    hun: 80,
    obey: 10,
    esteem: 50,
    will: 80,
    lust: 15,
    xp: 0,
    lvl: 1,
    gems: 0
  });
  Player.restoreHP();
  Core.showStatBar();
  return;
};

export const genderSelect = () => {
  // TODO Put check in here before loading for having valid name, or setting default.
  Core.changeButtons([["Man", IS_A_MAN], ["Woman", IS_A_WOMAN]]);
  Core.newText(
    "Your name carries little significance beyond it being your name.  What is your gender?"
  );
  return;
};

export const isAMan = () => {
  Core.changeStats({ str: 3, tou: 2 });
  Player.setPlayerAppearance({ tallness: 71, tone: 60 });
  Player.setHair({ length: 1 });
  Player.setPregStats({ fertility: 5 });
  Player.setBalls({ number: 2, size: 1 });
  Player.createCock();
  Player.createBreastRow();

  Core.newText(
    <>
      <p>
        You are a man. Your upbringing has provided you an advantage in strength
        and toughness.
      </p>
      <p>What type of build do you have?</p>
    </>
  );

  Core.changeButtons([
    ["Lean", BUILD_LEAN_MALE],
    ["Average", BUILD_AVERAGE_MALE],
    ["Thick", BUILD_THICK_MALE],
    ["Girly", BUILD_GIRLY_MALE]
  ]);
};

export const buildLeanMale = () => {
  Core.changeStats({ str: -1, spe: 1 });
  Player.setPlayerAppearance({ femininity: 34, thickness: 30 });
  Player.changePlayerAppearance({ tone: 5 });
  Player.changeBreasts({ size: BreastCup.FLAT });
  Player.setButt({ rating: Butt.TIGHT });
  Player.setHips({ rating: Hips.SLENDER });
  chooseComplexion();
};

export const buildAverageMale = () => {
  Player.setPlayerAppearance({ femininity: 30, thickness: 50 });
  Player.changeBreasts({ size: BreastCup.FLAT });
  Player.setButt({ rating: Butt.AVERAGE });
  Player.setHips({ rating: Hips.AVERAGE });
  chooseComplexion();
};

export const buildThickMale = () => {
  Core.changeStats({ spe: -4, str: 2, tou: 2 });
  Player.setPlayerAppearance({ femininity: 29, thickness: 70 });
  Player.changeBreasts({ size: BreastCup.FLAT });
  Player.changePlayerAppearance({ tone: -5 });
  Player.setButt({ rating: Butt.AVERAGE });
  Player.setHips({ rating: Hips.AVERAGE });
  chooseComplexion();
};

export const buildGirlyMale = () => {
  Core.changeStats({ str: -2, spe: +2 });
  Player.setPlayerAppearance({ femininity: 50, thickness: 50, tone: 26 });
  Player.changeBreasts({ size: BreastCup.A });
  Player.setButt({ rating: Butt.NOTICEABLE });
  Player.setHips({ rating: Hips.SLENDER });
  Player.changeBreasts({ rating: BreastCup.A });

  chooseComplexion();
};

export const isAWoman = () => {
  Core.changeStats({ spe: 3, int: 2 });
  Player.setPregStats({ fertility: 10 });
  Player.setHair({ length: 10 });
  Player.setPlayerAppearance({ tallness: 67, tone: 30 });
  Player.setBalls({ number: 0, size: 0 });
  Player.createBreastRow();
  Player.createVagina();
  Core.newText(
    <>
      <p>
        You are a woman. Your upbringing has provided you an advantage in speed
        and intellect.
      </p>
      <p>What type of build do you have?</p>
    </>
  );
  Core.changeButtons([
    ["Slender", BUILD_SLENDER_FEMALE],
    ["Average", BUILD_AVERAGE_FEMALE],
    ["Curvy", BUILD_CURVY_FEMALE],
    ["Tomboyish", BUILD_TOMBOYISH_FEMALE]
  ]);
};

export const buildSlenderFemale = () => {
  Core.changeStats({ str: -1, spe: 1 });
  Player.setPlayerAppearance({ thickness: 30, femininity: 66 });
  Player.changePlayerAppearance({ tone: 5 });
  Player.changeBreasts({ size: BreastCup.B });
  Player.setButt({ rating: Butt.TIGHT });
  Player.setHips({ rating: Hips.AMPLE });
  chooseComplexion();
};

export const buildAverageFemale = () => {
  Player.setPlayerAppearance({ femininity: 70, thickness: 50 });
  Player.changeBreasts({ size: BreastCup.C });
  Player.setButt({ rating: Butt.NOTICEABLE });
  Player.setHips({ rating: Hips.AMPLE });
  chooseComplexion();
};

export const buildCurvyFemale = () => {
  Core.changeStats({ spe: -2, str: 1, tou: 1 });
  Player.setPlayerAppearance({ femininity: 71, thickness: 70 });
  Player.changeBreasts({ size: BreastCup.D });
  Player.setButt({ rating: Butt.LARGE });
  Player.setHips({ rating: Hips.CURVY });
  chooseComplexion();
};

export const buildTomboyishFemale = () => {
  Core.changeStats({ str: 1, spe: -1 });
  Player.setPlayerAppearance({ femininity: 56, thickness: 50, tone: 50 });
  Player.changeBreasts({ size: BreastCup.A });
  Player.setButt({ rating: Butt.TIGHT });
  Player.setHips({ rating: Hips.SLENDER });
  chooseComplexion();
};

const chooseComplexion = () => {
  Core.newText(
    <>
      <p>What is your complexion?</p>
    </>
  );
  Core.changeButtons([
    ["Light", SET_COMPLEXION, ["light"]],
    ["Fair", SET_COMPLEXION, ["fair"]],
    ["Olive", SET_COMPLEXION, ["olive"]],
    ["Dark", SET_COMPLEXION, ["dark"]],
    ["Ebony", SET_COMPLEXION, ["ebony"]],
    ["Mahogany", SET_COMPLEXION, ["mahogany"]],
    ["Russet", SET_COMPLEXION, ["russet"]]
  ]);
};

export const setComplexion = params => {
  let [color] = params;
  Player.setSkin({ tone: color });
  //player.arms.claws.tone = "";
  chooseHair();
};

const chooseHair = () => {
  Core.newText(
    <>
      <p>You selected a {A.skinColor()} complexion</p>
      <p>What color is your hair?</p>
    </>
  );

  Core.changeButtons([
    ["Blonde", SET_HAIR, ["blonde"]],
    ["Brown", SET_HAIR, ["brown"]],
    ["Red", SET_HAIR, ["red"]],
    ["Gray", SET_HAIR, ["gray"]],
    ["White", SET_HAIR, ["white"]],
    ["Auburn", SET_HAIR, ["auburn"]]
  ]);
};

export const setHair = params => {
  let [color] = params;
  Player.setHair({ color: color });
  Core.newText(
    <>
      <p>You have {A.hairDesc()}.</p>
      <p>You may now proceed to final customization</p>
    </>
  );
  Core.changeButtons([["Proceed", CONFIRM_STYLE]]);
};

export const confirmStyle = () => {
  Core.newText(
    <>
      <p>
        You can finalize your appearance customization before you proceed to
        perk selection. You will be able to alter your appearance through the
        usage of certain items.
      </p>
      <p>
        Height: {Math.floor(A.tallness() / 12)}'{A.tallness() % 12}"
      </p>
      <p>Skin tone: {A.skinColor()}</p>
      <p>Hair color: {A.hairColor()}</p>
      {A.hasCock() && (
        <p>
          Cock size: {A.cockLength()}" long, {A.cockThickness()}" thick
        </p>
      )}
      <p>Breast size: {A.breastCup()}</p>
    </>
  );
  Core.changeButtons([
    ["Complexion", CONFIRM_COMPLEXION],
    [
      "Hair Color",
      CONFIRM_HAIR_COLOR
    ] /*if (player.mf("m", "f") === "m") {
				if (player.hasBeard()) outputText("Beard: " + player.beardDescript() + "\n");
				addButton(2, "Beard Style", menuBeardSettings);
      }	 */,

    ["Set Height", CONFIRM_HEIGHT],

    ...(A.hasCock() ? ["Cock Size", CONFIRM_COCK_LENGTH] : [,]),
    ["Breast Size", CONFIRM_BREAST_SIZE],

    ["Done", CHOOSE_ENDOWMENT]
  ]);
};
