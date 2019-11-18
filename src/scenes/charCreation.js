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
  Core.changeButtons({
    b1: {
      id: "b1",
      label: "Confirm Name",
      toolTip: "Click to confirm name",
      nextScene: GENDER_SELECT
    }
  });

  Core.newText(SceneText.CharCreation[START_NEW_GAME].text);
  Core.changeMenus({
    u1: MenuButtons.main,
    u2: MenuButtons.data,
    u3: MenuButtons.level
  });
  Core.setStats({
    strength: 15,
    toughness: 15,
    speed: 15,
    intelligence: 15,
    sensitivity: 15,
    libido: 15,
    corruption: 15,
    hunger: 80,
    obey: 10,
    esteem: 50,
    will: 80,
    lust: 15,
    xp: 0,
    level: 1,
    gems: 0
  });
  Player.restoreHP();
  Core.showStatBar();
  return;
};

export const genderSelect = () => {
  // TODO Put check in here before loading for having valid name, or setting default.
  Core.changeButtons({
    b1: {
      label: "Man",
      nextScene: IS_A_MAN
    },
    b2: {
      label: "Woman",
      nextScene: IS_A_WOMAN
    }
  });

  Core.newText(
    "Your name carries little significance beyond it being your name.  What is your gender?"
  );

  return;
};

export const isAMan = () => {
  Core.changeStats({ strength: 3, toughness: 2 });
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

  Core.changeButtons({
    b1: {
      label: "Lean",
      nextScene: BUILD_LEAN_MALE
    },
    b2: {
      label: "Average",
      nextScene: BUILD_AVERAGE_MALE
    },
    b3: {
      label: "Thick",
      nextScene: BUILD_THICK_MALE
    },
    b4: {
      label: "Girly",
      nextScene: BUILD_GIRLY_MALE
    }
  });
};

export const buildLeanMale = () => {
  Core.changeStats({ strength: -1, speed: 1 });
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
  Core.changeStats({ speed: -4, strength: 2, toughness: 2 });
  Player.setPlayerAppearance({ femininity: 29, thickness: 70 });
  Player.changeBreasts({ size: BreastCup.FLAT });
  Player.changePlayerAppearance({ tone: -5 });
  Player.setButt({ rating: Butt.AVERAGE });
  Player.setHips({ rating: Hips.AVERAGE });
  chooseComplexion();
};

export const buildGirlyMale = () => {
  Core.changeStats({ strength: -2, speed: +2 });
  Player.setPlayerAppearance({ femininity: 50, thickness: 50, tone: 26 });
  Player.changeBreasts({ size: BreastCup.A });
  Player.setButt({ rating: Butt.NOTICEABLE });
  Player.setHips({ rating: Hips.SLENDER });
  Player.changeBreasts({ rating: BreastCup.A });

  chooseComplexion();
};

export const isAWoman = () => {
  Core.changeStats({ speed: 3, intelligence: 2 });
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
  Core.changeButtons({
    b1: {
      label: "Slender",
      nextScene: BUILD_SLENDER_FEMALE
    },
    b2: {
      label: "Average",
      nextScene: BUILD_AVERAGE_FEMALE
    },
    b3: {
      label: "Curvy",
      nextScene: BUILD_CURVY_FEMALE
    },
    b4: {
      label: "Tomboyish",
      nextScene: BUILD_TOMBOYISH_FEMALE
    }
  });
};

export const buildSlenderFemale = () => {
  Core.changeStats({ strength: -1, speed: 1 });
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
  Core.changeStats({ speed: -2, strength: 1, toughness: 1 });
  Player.setPlayerAppearance({ femininity: 71, thickness: 70 });
  Player.changeBreasts({ size: BreastCup.D });
  Player.setButt({ rating: Butt.LARGE });
  Player.setHips({ rating: Hips.CURVY });
  chooseComplexion();
};

export const buildTomboyishFemale = () => {
  Core.changeStats({ strength: 1, speed: -1 });
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
  Core.changeButtons({
    b1: {
      label: "Light",
      nextScene: SET_COMPLEXION,
      params: ["light"]
    },
    b2: {
      label: "Fair",
      nextScene: SET_COMPLEXION,
      params: ["fair"]
    },
    b3: {
      label: "Olive",
      nextScene: SET_COMPLEXION,
      params: ["olive"]
    },
    b4: {
      label: "Dark",
      nextScene: SET_COMPLEXION,
      params: ["dark"]
    },
    b5: {
      label: "Ebony",
      nextScene: SET_COMPLEXION,
      params: ["ebony"]
    },
    b6: {
      label: "Mahogany",
      nextScene: SET_COMPLEXION,
      params: ["mahogany"]
    },
    b7: {
      label: "Russet",
      nextScene: SET_COMPLEXION,
      params: ["russet"]
    }
  });
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

  Core.changeButtons({
    b1: {
      label: "Blonde",
      nextScene: SET_HAIR,
      params: ["blonde"]
    },
    b2: {
      label: "Brown",
      nextScene: SET_HAIR,
      params: ["brown"]
    },
    b3: {
      label: "Red",
      nextScene: SET_HAIR,
      params: ["red"]
    },
    b4: {
      label: "Gray",
      nextScene: SET_HAIR,
      params: ["gray"]
    },
    b5: {
      label: "White",
      nextScene: SET_HAIR,
      params: ["white"]
    },
    b6: {
      label: "Auburn",
      nextScene: SET_HAIR,
      params: ["auburn"]
    }
  });
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
  Core.changeButtons({
    b1: {
      label: "Proceed",
      nextScene: CONFIRM_STYLE
    }
  });
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
  Core.changeButtons({
    b1: {
      label: "Complexion",
      nextScene: CONFIRM_COMPLEXION
    },
    b2: {
      label: "Hair Color",
      nextScene: CONFIRM_HAIR_COLOR
    },
    b4: {
      label: "Set Height",
      nextScene: CONFIRM_HEIGHT
    },
    ...(A.hasCock() && {
      b6: { label: "Cock Size", nextScene: CONFIRM_COCK_LENGTH }
    }),
    b7: {
      label: "Breast Size",
      nextScene: CONFIRM_BREAST_SIZE
    },
    b10: {
      label: "Done",
      nextScene: CHOOSE_ENDOWMENT
    }
  });
};
