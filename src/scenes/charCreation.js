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
  BUILD_GIRLY_MALE
} from "./sceneSymbols";
import * as Core from "../actions/Core";
import * as Player from "../actions/Player";

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
      id: "b1",
      label: "Man",
      nextScene: IS_A_MAN
    },
    b2: {
      id: "b2",
      label: "WOMAN",
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

  /*
  
			
			//Genetalia
			player.balls = 2;
			player.ballSize = 1;
			player.createCock();
			player.cocks[0].cockLength = 5.5;
			player.cocks[0].cockThickness = 1;
			player.cocks[0].cockType = CockTypesEnum.HUMAN;
      player.createBreastRow(); //breasts
  */
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
      id: "b1",
      label: "Lean",
      nextScene: BUILD_LEAN_MALE
    },
    b2: {
      id: "b2",
      label: "Average",
      nextScene: BUILD_AVERAGE_MALE
    },
    b3: {
      id: "b3",
      label: "Thick",
      nextScene: BUILD_THICK_MALE
    },
    b4: {
      id: "b4",
      label: "Girly",
      nextScene: BUILD_GIRLY_MALE
    }
  });
};

export const buildLeanMale = () => {
  /*
  player.str -= 1;
			player.spe += 1;
			player.femininity = 34;
			player.thickness = 30;
			player.tone += 5;
			player.breastRows[0].breastRating = BreastCup.FLAT;
			player.butt.rating = Butt.RATING_TIGHT;
			player.hips.rating = Hips.RATING_SLENDER;
      chooseComplexion();
      */
};

export const buildAverageMale = () => {
  /*
  player.femininity = 30;
  player.thickness = 50;
  player.breastRows[0].breastRating = BreastCup.FLAT;
  player.butt.rating = Butt.RATING_AVERAGE;
  player.hips.rating = Hips.RATING_AVERAGE;
  chooseComplexion();
  */
};

export const buildThickMale = () => {
  /*
  player.spe -= 4;
			player.str += 2;
			player.tou += 2;
			player.femininity = 29;
			player.thickness = 70;
			player.tone -= 5;
			player.breastRows[0].breastRating = BreastCup.FLAT;
			player.butt.rating = Butt.RATING_NOTICEABLE;
			player.hips.rating = Hips.RATING_AVERAGE;
      chooseComplexion();
      */
};

export const buildGirlyMale = () => {
  /*
  	player.str -= 2;
			player.spe += 2;
			player.femininity = player.hasVagina() ? 49 : 50;
			player.thickness = 50;
			player.tone = 26;
			player.breastRows[0].breastRating = BreastCup.A;
			player.butt.rating = Butt.RATING_NOTICEABLE;
			player.hips.rating = Hips.RATING_SLENDER;
      chooseComplexion();
  */
};

export const isAWoman = () => {
  /*if (flags[kFLAGS.NEW_GAME_PLUS_LEVEL] === 0) { //attributes
				player.spe += 3;
				player.inte += 2;
			}
			//Body attributes
			player.fertility = 10;
			player.hair.length = 10;
			player.tallness = 67;
			player.tone = 30;
			//Genetalia
			player.balls = 0;
			player.ballSize = 0;
			player.createVagina();
			player.createBreastRow(); //breasts
			clearOutput();
			outputText(images.showImage("event-question"));
			outputText("You are a woman.  Your upbringing has provided you an advantage in speed and intellect.\n\nWhat type of build do you have?");
			menu(); //choices
			addButton(0, "Slender", buildSlenderFemale);
			addButton(1, "Average", buildAverageFemale);
			addButton(2, "Curvy", buildCurvyFemale);
      addButton(3, "Tomboyish", buildTomboyishFemale);
      */
};
