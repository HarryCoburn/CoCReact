import React from "react";
import { weighted } from "../../utils";
import * as Core from "../../actions/Core";

const Thief = {
  name: "thief",
  long:
    "The thief standing before you is a human.  His skin is fairly pale and his hair is brown.  He's wearing a set of leather armor and wielding a dagger in his right hand.  He's intent on knocking you out so he can take your gems.",
  race: "Human",
  level: 1,
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

export default Thief;
