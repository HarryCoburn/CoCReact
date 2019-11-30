import React from "react";
import { receiveDamage } from "../../actions/Player";
import * as Core from "../../actions/Core";
import * as SC from "../sceneSymbols";
import store from "../../store/store";
import Goblin from "../../symbols/enemies/goblin";

const enemyDead = () =>
  store.getState().combat.enemy.every(enemy => enemy.hp <= 0);
const playerDead = () => store.getState().stats.stats.hp.value <= 0;
const enemyTurn = () => store.getState().combat.playerTurn === false;
const inCombat = () => store.getState().engine.present.inCombat === true;

export const combatDemo = () => {
  Core.storeState();
  Core.newText(
    <>
      <p>What do you want to fight?</p>
    </>
  );
  Core.changeButtons([
    [0, "1 Goblin", startCombat, [Goblin]],
    [1, "2 Goblins", startCombat, [Goblin, Goblin]]
  ]);
};

export const startCombat = enemy => {
  Core.hideMenuBar();
  Core.showStatBar();
  Core.loadEnemy(enemy);
  Core.newText(
    <>
      <p>You are fighting the {enemy[0].name}! Prepare for battle</p>
    </>
  );
  Core.changeButtons([[0, "Begin", startRound]]);
};

const startRound = () => {
  let playerTurn = store.getState().combat.playerTurn;
  if (!inCombat()) {
    Core.newText(
      <>
        <p>What would you like to do this turn?</p>
      </>
    );
  }
  Core.startCombat();
  Core.changeButtons([[0, "Fight", playerFight]]);
};

const playerFight = () => {
  let damage = Math.floor(Math.random() * 5);
  let enemyInd = store.getState().combat.enemy.findIndex(enemy => enemy.hp > 0);

  Core.applyDamage(enemyInd, damage);
  Core.addText(
    <>
      <p>You deal {damage} points of damage!</p>
    </>
  );
  checkCombatResult();
};

const checkCombatResult = () => {
  if (enemyDead()) {
    Core.addText(<>You Win!</>);
    combatCleanup("player");
    return;
  } else if (playerDead()) {
    Core.addText(<>You Lose!</>);
    combatCleanup("enemy");
    return;
  }

  Core.changeTurn();
  if (enemyTurn()) {
    store.getState().combat.enemy.forEach(enemy => enemyFight(enemy));
    checkCombatResult();
  } else {
    startRound();
  }
};

const enemyFight = enemy => {
  let damage = enemy.doFight();
  receiveDamage(-damage);
  Core.addText(
    <>
      <p>You receive {damage} points of damage!</p>
    </>
  );
};

const combatCleanup = winner => {
  if (winner === "player") {
    Core.addText(<> You receive some stuff.</>);
  } else if (winner === "enemy") {
    Core.addText(<> You lose some stuff.</>);
  }
  Core.changeButtons([[0, "Go Back", SC.GO_BACK]]);
  Core.setStats({ hp: 1 });
  Core.endCombat();
};
