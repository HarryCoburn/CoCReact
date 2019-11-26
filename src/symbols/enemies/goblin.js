import React from "react";
import { weighted } from "../../utils";
import * as Core from "../../actions/Core";

const Goblin = {
  name: "goblin",
  hp: 5,
  atk: 2,
  def: 1,
  doFight: () => weighted([gobAttack, gobCrit], [10, 1])()
};

const gobAttack = () => {
  Core.addText(<>The Goblin attacks you with claws!</>);
  return Math.floor(Math.random() * 5);
};

const gobCrit = () => {
  Core.addText(<>The Goblin attacks you with a mighty blow!</>);
  return 10;
};

export default Goblin