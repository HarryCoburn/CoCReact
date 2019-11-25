import React from "react";
import { loadEnemy, applyDamage } from "../../actions/Enemy";
import * as Core from "../../actions/Core";

import store from "../../store/store";

export const startCombat = enemy => {
  Core.hideMenuBar();
  loadEnemy(enemy);
  Core.newText(
    <>
      <p>You are fighting the {enemy[0].name}! Prepare for battle</p>
    </>
  );
  Core.changeButtons([[0, "Begin", startRound]]);
};

const startRound = () => {
  let playerTurn = store.getState().combat.playerTurn;

  if (playerTurn === true) {
    Core.newText(
      <>
        <p>What would you like to do this turn?</p>
      </>
    );
    Core.changeButtons([[0, "Fight", playerFight]]);
  }
};

const playerFight = () => {
  let damage = Math.floor(Math.random() * 5);
  applyDamage(damage);
  Core.addText(
    <>
      <p>You deal {damage} points of damage!</p>
    </>
  );
};
