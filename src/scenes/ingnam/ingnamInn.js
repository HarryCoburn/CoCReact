import * as Core from "../../actions/Core";
import * as Player from "../../actions/Player";
import Flags from "../../store/gameFlags";
import store from "../../store/store";
import { transactionYes } from "../shopFunctions";
import consumables from "../../symbols/items/consumables";
import React from "react";
import { INGNAM_DEMO } from "../sceneSymbols";
import StatusEffects from "../../symbols/statuses";

export const innIngnam = () => {
  Core.newText(
    <>
      <p>
        The inn is a cozy little nook that exudes a warm and welcoming air. You
        see several guardsmen roaring with laughter over a few steins and a hand
        of cards, and some townsfolk chatting about random topics. The innkeeper
        stands behind the polished wooden counter, serving beverages to his
        patrons and cleaning up spilled drinks.
      </p>
    </>
  );
  Core.changeButtons([
    [0, "Order Drink", orderDrink, , "Buy some refreshing beverages"],
    [1, "Order Food", orderFood, , "Buy some food"],
    ...(Flags.INGNAM_RUMORS < 3
      ? [
          [
            2,
            "Stories",
            hearRumors,
            ,
            "Hear the story the innkeeper has to offer."
          ]
        ]
      : [,]),
    [14, "Leave", INGNAM_DEMO]
  ]);
};

const orderDrink = () => {
  Core.newText(
    <>
      <p>What kind of drink would you like?</p>
      <b>
        <u>Pricings</u>
      </b>
      <br />
      5 gems - Beer
      <br />
      2 gems - Milk
      <br />3 gems - Root Beer
    </>
  );
  Core.changeButtons([
    [0, "Beer", buyBeer],
    [1, "Milk", buyMilk],
    [2, "Root Beer", buyRootBeer],
    [15, "Back", innIngnam]
  ]);
};

const buyBeer = () => {
  if (store.getState().stats.stats.gems.value < 5) {
    Core.newText("You don't have enough gems for that.");
    Core.changeButtons([[0, "Next", orderDrink]]);
    return;
  }
  Core.changeStats({ gems: -5, lus: 20, hun: 10 });
  Core.newText(
    <>
      <p>
        "<i>I'd like a glass of beer please,</i>" you say. You hand over the
        five gems to the innkeeper and he pours you a glass of beer.
      </p>
      <p>You kick back and drink the beer slowly.</p>
    </>
  );
  if (!Player.hasStatusEffect(StatusEffects.Drunk)) {
    Player.createStatusEffect(StatusEffects.Drunk, 2, 1, 1, 0);
  }
  Core.changeTime({ minute: 5 });
  Core.changeButtons([[0, "Next", innIngnam]]);
};

const buyMilk = () => {
  if (store.getState().stats.stats.gems.value < 2) {
    Core.newText("You don't have enough gems for that.");
    Core.changeButtons([[0, "Next", orderDrink]]);
    return;
  }
  Core.changeStats({
    gems: -2,
    hp: store.getState().stats.stats.hp.max / 4,
    fat: -15,
    hun: 10
  });

  Core.newText(
    <>
      <p>
        "<i>I'd like a glass of milk please,</i>" you say. You hand over the
        three gems to the innkeeper and he pours you a glass of milk.
      </p>
      <p>You drink the cup of milk. You feel nourished.</p>
    </>
  );
  Core.changeTime({ minute: 5 });
  Core.changeButtons([[0, "Next", innIngnam]]);
};

const buyRootBeer = () => {
  if (store.getState().stats.stats.gems.value < 3) {
    Core.newText("You don't have enough gems for that.");
    Core.changeButtons([[0, "Next", orderDrink]]);
    return;
  }
  Core.changeStats({
    gems: -3,
    hp: store.getState().stats.stats.hp.max / 4,
    fat: -15,
    hun: 10
  });

  Core.newText(
    <>
      <p>
        "<i>I'd like a glass of root beer please,</i>" you say. You hand over
        the three gems to the innkeeper and he pours you a glass of root beer.
      </p>
      <p>You drink the cup of root beer. Refreshing!</p>
    </>
  );
  Core.changeTime({ minute: 5 });
  Core.changeButtons([[0, "Next", innIngnam]]);
};

const orderFood = () => {
  Core.newText(
    <>
      <p>You take a seat and look at the menu. What would you like?</p>
      <b>
        <u>Pricings</u>
      </b>
      <br />
      5 gems - Sandwich
      <br />
      2 gems - Soup
      <br />
      5 gems - Hard biscuits (Packed)
      <br />
      10 gems - Trail mix (Packed)
    </>
  );
  Core.changeButtons([
    [0, "Sandwich", buySandwich],
    [1, "Soup", buySoup],
    [2, "Biscuits", buyHardBiscuits],
    [3, "Trail Mix", buyTrailMix],
    [15, "Back", innIngnam]
  ]);
};

const buySandwich = () => {
  if (store.getState().stats.stats.gems.value < 5) {
    Core.newText("You don't have enough gems for that.");
    Core.changeButtons([[0, "Next", orderFood]]);
    return;
  }
  Core.changeStats({
    gems: -5,
    hp: store.getState().stats.stats.hp.max / 3,
    hun: 25
  });

  Core.newText(
    // TODO, add the connection below for the text
    <>
      <p>
        You tell the innkeeper that you would like a sandwich and toss five gems
        at him. \"<i>Certainly, " + player.mf("sir", "madam") + ",</i>\" he says
        as he quickly grabs a plate and assembles a sandwich. Hey, it's your
        favorite type!
      </p>
      <p>You eat the sandwich. Delicious!</p>
    </>
  );
  Core.changeTime({ minute: 5 });
  Core.changeButtons([[0, "Next", innIngnam]]);
};

const buySoup = () => {
  if (store.getState().stats.stats.gems.value < 3) {
    Core.newText("You don't have enough gems for that.");
    Core.changeButtons([[0, "Next", orderFood]]);
    return;
  }
  Core.changeStats({
    gems: -3,
    hp: store.getState().stats.stats.hp.max / 3,
    hun: 20
  });

  Core.newText(
    // TODO, add the connection below for the text
    <>
      <p>
        You tell the innkeeper that you would like a bowl of soup and toss three
        gems at him. \"<i>Certainly, " + player.mf("sir", "madam") + ",</i>\" he
        says as he grabs a bowl and fills it with steaming soup. Hey, it's your
        favorite type!
      </p>
      <p>
        You take one spoonful at a time, blowing to make sure the soup isn't too
        hot. You eventually finish the soup. Delicious!
      </p>
    </>
  );
  Core.changeTime({ minute: 5 });
  Core.changeButtons([[0, "Next", innIngnam]]);
};

const buyHardBiscuits = () => {
  if (store.getState().stats.stats.gems.value < 5) {
    Core.newText("You don't have enough gems for that.");
    Core.changeButtons([[0, "Next", orderFood]]);
    return;
  }
  transactionYes([consumables.H_BISCU, 5, orderFood]);
};

const buyTrailMix = () => {
  if (store.getState().stats.stats.gems.value < 10) {
    Core.newText("You don't have enough gems for that.");
    Core.changeButtons([[0, "Next", orderFood]]);
    return;
  }
  transactionYes([consumables.TRAILMX, 10, orderFood]);
};

const hearRumors = () => {
  Core.newText("You ask the innkeeper if he has anything special to tell you.");
  if (Flags.INGNAM_RUMORS === 0) {
    Core.addText(
      <>
        <p>
          He nods and says, "
          <i>
            Let me tell you. You know what happens to the so-called 'champions'?
          </i>
          "
        </p>
        <p>
          You nod in response and he continues, "
          <i>
            Well... Nobody ever came. I've seen twenty people departing over the
            course of my career. Twenty years. None of them ever returned. Who
            knows what happened to them? Some say they're abducted by an evil
            presence as soon as they set foot into the portal.
          </i>
          "
        </p>
        <p>
          He looks at you and sniffles. "
          <i>
            Truth be told, you're going to be the Champion of Ingnam. You will
            be sent to the so-called 'portal' that is supposedly located in
            Mount Ilgast. I will miss your patronage at the inn. You're still
            welcome anytime.
          </i>
          "
        </p>
      </>
    );
    Flags.INGNAM_RUMORS = 1;
  } else if (Flags.INGNAM_RUMORS === 1) {
    Core.addText(
      <>
        <p>
          He nods and says, "<i>You know Mount Ilgast?</i>"
        </p>
        <p>
          You nod in response and he continues, "
          <i>
            Before I began my work as an innkeeper, I was an adventurer. I've
            explored Mount Ilgast once. There was something glowing. It's a
            portal but it's no ordinary portal. Even strange was that there was
            something stirring in my groin. Honestly, I swear I never felt that
            sensation before. I winded up masturbating at the cave entrance just
            because of that warmth. As soon as I go near the portal, the warm
            sensation came back again. It's just strange, really strange. So
            I've hurried back to Ingnam and never visited the mountain again.
          </i>
          "
        </p>
        <p>You thank him for telling you.</p>
      </>
    );
    Flags.INGNAM_RUMORS = 2;
  } else if (Flags.INGNAM_RUMORS === 2) {
    Core.newText(
      <>
        <p>
          He nods and says, "
          <i>Would you really like to know something special?</i>" You nod in
          response and he continues, "
          <i>
            One time I've seen a man with cat ears and a tail. I thought they
            were just accessories but he insisted it was real. So I tugged on
            his ears and it was... real. I thought he used a lot of glue but he
            insisted that it's real. His ears do feel real. His tail even
            swished from side to side like it's an actual cat tail. He told me
            about something called 'Whisker Fruit' or something. So my guess is
            that the food in the so-called 'demon realm' can change you.
          </i>
          "
        </p>
        <p>
          You tell him if he has some tips for you. He says, "
          <i>
            Yes. If I were you, I would eat them only as last resort. Even a
            food that could transform you can make the difference between life
            and death.
          </i>
          " You thank him for the advice.
        </p>
        <p>
          <i>
            You're welcome. I have nothing left to tell you but you're always
            welcome,
          </i>
          " he says.
        </p>
      </>
    );

    Flags.INGNAM_RUMORS = 3; //Finished
  }
  Core.changeTime({ hour: 1 });
  Core.changeButtons([[0, "Next", INGNAM_DEMO]]);
};
