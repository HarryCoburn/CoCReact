import React from "react";
import * as Core from "../../actions/Core";
import * as Utils from "../../utils";
import Flags from "../../store/gameFlags";
import { addShopItem, transactionYes } from "../shopFunctions";
import weapons from "../../symbols/items/weapons";
import armors from "../../symbols/items/armors";
import consumables from "../../symbols/items/consumables";
import store from "../../store/store";

export const startIngnam = () => {
  // Banished
  //Banished to Mareth.
  /*
      if (getGame().time.days >= 0 && flags[kFLAGS.INGNAM_PROLOGUE_COMPLETE] <= 0 && flags[kFLAGS.GRIMDARK_MODE] < 1) {
          getBanishedToMareth();
          return;
      }
      
       */
  Core.newText(
    <>
      <p>
        <i>(Credit for Ingnam content goes to Kitteh6660)</i>
      </p>
      <p>
        Ingnam is a rich and prosperous village despite its small size. There is
        already a well-established array of shops with a constant hum of
        tradesmen and merchants. The temple sits within view of the patrons
        sitting at tables at the tavern which serves as a hub for people near
        and far to drink and dance. On the road leading out of the plaza that
        sits before the temple is a trail that meanders its way to a large farm
        in the distance.
      </p>
      <p>
        Looming ominously in the distance is a mountain known by the locals as
        Mount Ilgast.
      </p>
      {(Core.getHours() >= 21 || Core.getHours() < 6) && (
        <p>
          It's dark outside. Stars dot the night sky and a moon casts the
          moonlight over the landscape, providing little light. Shops are closed
          at this time.
        </p>
      )}
    </>
  );
  Core.showStatBar();
  Core.changeButtons([
    [0, "Explore", exploreIngnam],
    [1, "Shops", shopsIngnam],
    [2, "Temple", templeIngnam],
    [3, "Inn", innIngnam],
    [4, "Farm", farmIngnam]
  ]);
};

const exploreIngnam = () => {
  if (Utils.rand(4) === 1) {
    console.log("Thief scene here.");
  } else {
    Core.newText(
      <p>
        You explore the village of Ingnam for a while but you don't find
        anything interesting.
      </p>
    );
    Core.changeTime({ hour: 1 });
    Core.changeButtons([[0, "Next", startIngnam]]);
  }
};

/* Shops */

const shopsIngnam = () => {
  Core.newText(<p>Which shop would you like to visit?</p>);
  Core.changeButtons([
    [0, "Blacksmith", shopBlacksmith],
    [1, "Tailor", shopTailor],
    [2, "Alchemist", shopAlchemist],
    [3, "Trading Post", shopTradingPost],
    [4, "Black Market", shopBlackMarket],
    [14, "Back", startIngnam]
  ]);
};

const shopBlacksmith = () => {
  Core.storeState();
  Core.newText(
    <>
      <p>
        You enter the armor shop, noting the sign depicting armors. Some armor
        is proudly displayed on racks. You can hear the sound of hammering
        although it stops shortly after you enter. The local blacksmith, Ben,
        comes from the rear door and steps up to the counter and wipes away
        sweat from his face flushed red by the forge, "
        <i>Welcome to my shop. In a need of protection? Or something sharp?</i>"
      </p>
      {Flags.INGNAM_WEAPONSMITH_TALKED === 0 && (
        <>
          <p>
            Before you can get a word in Ben lets out an exasperated sigh "
            <i>Ah, just forget about…</i>"
          </p>
          <p>
            You crook an eyebrow questioningly at the blacksmith. Ben then
            realizes his blunder.
          </p>
          <p>
            <i>
              Ah, well it’s just… You’re the new Champion, right? None of the
              people I’ve seen who get sent to the portal brought a weapon but I
              don't think the elders would object to you bringing your weapon.
              Still, if you want to train and defend yourself with weapons, you
              can go ahead and buy them. A little preparation never hurt anyone.
            </i>
            " the blacksmith says.
          </p>
        </>
      )}
      <p>
        <b>
          <u>Blacksmith's pricings</u>
        </b>
      </p>
    </>
  );
  Flags.INGNAM_WEAPONSMITH_TALKED = 1;
  Core.changeButtons();
  addShopItem(weapons.DAGGER, 40);
  addShopItem(weapons.PIPE, 50);
  addShopItem(weapons.SPEAR, 140);
  addShopItem(weapons.KATANA, 200);
  addShopItem(weapons.MACE, 80);
  addShopItem(armors.LEATHERA, 50);
  addShopItem(armors.FULLCHN, 150);
  addShopItem(armors.SCALEML, 200);
  Core.addButton(14, "Leave", shopsIngnam);
};

const shopTailor = () => {
  Core.newText(
    <>
      <p>
        You enter the tailor’s. The interior is laden with mannequins wearing
        half-finished works. Clothes are displayed on racks without obvious
        flaws. A fastidious, well-groomed young man with an immaculate blue
        three-piece suit topped with a measuring tape draping around his collar
        stands behind the counter and smiles at you with deference.
      </p>
      <p>
        "<i>Welcome to my shop. Do you need to get outfitted?</i>" he says
        pulling keenly at the measuring tape draping his shoulders.
      </p>
      <p>
        <b>
          <u>Tailor shop pricings</u>
        </b>
      </p>
    </>
  );
  Core.changeButtons();
  addShopItem(armors.C_CLOTH, 10);
  addShopItem(armors.ADVCLTH, 75);
  addShopItem(armors.CLSSYCL, 100);
  addShopItem(armors.TUBETOP, 40);
  addShopItem(armors.OVERALL, 30);
  addShopItem(armors.M_ROBES, 75);
  addShopItem(armors.LTHRPNT, 200);
  addShopItem(armors.RBBRCLT, 500);
  addShopItem(armors.T_BSUIT, 650);
  Core.addButton(14, "Leave", shopsIngnam);
};

const shopAlchemist = () => {
  if (Flags.INGNAM_ALCHEMIST_TALKED === 0) {
    Core.newText(
      <>
        <p>
          As you approach the stone building the overpowering smell of herbs and
          plants being brewed hits your nose. The crimson banner over the heavy
          wooden door indicates that this is where the potions are made. You
          enter what appears to be the place where the alchemist works on his
          famed remedies.
        </p>
        <p>
          You open the door and enter. Despite the establishment being dimly lit
          by candlelight you can make out the vast multicolored rows of
          countless potions, elixirs and tonics. Fragrant drying herbs are
          hanging from the rafters and various strange-looking equipment is set
          up in a variety of locations in the store.
        </p>
        <p>
          An ancient-looking man in a much-singed pair of robes is working on
          something volatile in the corner until he hears your presence. He
          stops and shuffles up to the timber counter, drumming it under his
          stained fingers. "<i>What can I do for you, young master?</i>" he says
          from under his frayed hood.
        </p>
      </>
    );
    Flags.INGNAM_ALCHEMIST_TALKED = 1;
  } else {
    Core.newText(
      <>
        <p>
          Once again, you return to the alchemist, letting the overpowering
          smell of herbs and plants being brewed hits your nose.
        </p>
        <p>
          The alchemist senses your presences and he steps up to the counter and
          says, "<i>How may I help you?</i>"
        </p>
      </>
    );
  }
  Core.addText(
    <b>
      <u>Alchemy shop pricings</u>
    </b>
  );
  Core.changeButtons();
  addShopItem(consumables.REDUCTO, 100);
  addShopItem(consumables.GROPLUS, 100);
  addShopItem(consumables.L_DRAFT, 30);
  addShopItem(consumables.LACTAID, 50);
  Core.addButton(14, "Leave", shopsIngnam);
};

const shopTradingPost = () => {
  Core.newText(
    <>
      <p>
        The trading post is one of the larger buildings in the village with its
        porch covered in barrels filled with pickled goods, preserved delicacies
        and dried goods from the humble local farm to exotic faraway lands. The
        interior is packed with crowded shelves that boast a variety of goods,
        all arranged neatly on shelves.
      </p>
      <p>You suspect you could buy some imported goods here.</p>
      <p>
        <b>
          <u>Trading post pricings</u>
        </b>
      </p>
    </>
  );
  Core.changeButtons();
  addShopItem(consumables.VITAL_T, 30, 5);
  addShopItem(consumables.SMART_T, 30, 5);
  addShopItem(consumables.FISHFIL, 5, 5);
  Core.addButton(14, "Leave", shopsIngnam);
};

const shopBlackMarket = () => {
  if (Flags.INGNAM_BLACKMARKET_TALKED === 0) {
    Core.newText(
      <>
        <p>
          You walk into an alley you swear you have never explored before. You
          stifle your fear as you walk into the dingy looking alley.
        </p>
        <p>
          Unease creeps over you until you hear a raspy voice whisper from the
          darkness of the alley. You look around to see a hooded figure skulk
          from the shadows to approach you.
        </p>
        <p>
          "
          <i>
            Greetings. I know you. You’re going to be the new Champion, right?
          </i>
          " The hooded figure croaks. His face is mostly concealed by the shade
          of his hood. Slightly unnerved by the prowling figure you tell him
          that yes, you’re going to be the Champion of Ingnam.
        </p>
        <p>
          He pulls his hood down, quickly looking for the all-clear and rasps, "
          <i>
            I’ve managed to sneak into the portal at the mountains. There is
            extraordinary stuff that can transform you! It takes me years of
            planning as the portal is only open for a short window of time
            before it closes for the rest of the year.
          </i>
          "
        </p>
        <p>
          With a skin-crawling chuckle he opens up his coat and shows you the
          array of goods and says, "
          <i>
            I’ve managed to smuggle these in. They aren’t cheap but I guarantee
            you, they’re the real deal! See anything you like?
          </i>
          "
        </p>
      </>
    );
    Flags.INGNAM_BLACKMARKET_TALKED = 1;
  } else {
    Core.newText(
      <>
        <p>
          "Once again, you walk into the alley where the shady dealer should be.
          He approaches you as if he knows you.
        </p>
        <p>
          <i>Back, I see? See any deals you like?</i>" The shady man asks.
        </p>
      </>
    );
  }
  Core.addText(
    <b>
      <u>Black market pricings</u>
    </b>
  );
  Core.changeButtons();
  addShopItem(consumables.W_FRUIT, 75, 6);
  addShopItem(consumables.CANINEP, 75, 6);
  addShopItem(consumables.EQUINUM, 75, 6);
  addShopItem(consumables.INCUBID, 75, 6);
  addShopItem(consumables.SUCMILK, 75, 6);
  Core.addButton(14, "Leave", shopsIngnam);
};

/* Temple */

const templeIngnam = () => {
  Core.newText(
    <>
      <p>
        The village’s temple appears humble looking from its stony exterior but
        the interior of temple is truly a marvel to behold - intricately
        decorated wooden arches adorned with complex patterns of arcane runes of
        the Old World, walls adorned with majestic tapestries depicting the Gods
        and their most valiant of feats and, to the end of the temple stands an
        incredibly designed shrine to the All-Giving, the mother of all Gods.
      </p>
      <p>
        Incense languorously wafts from the alcoves where offerings of fruit are
        left out for the Gods. Monks passively move amongst the parishioners,
        offering solace to those in need, food or drink to those who are weary,
        or in meditation.
      </p>
      <p>
        There are several soft mats on the floor to provide soft areas for
        people to pray on.
      </p>
    </>
  );
  Core.changeButtons([[0, "Meditate", meditate], [14, "Leave", startIngnam]]);
};

const meditate = () => {
  Core.newText(
    <>
      <p>You meditate for 30 minutes and feel refreshed.</p>
    </>
  );
  Core.changeTime({ minute: 30 });
  Core.changeButtons([[0, "Next", startIngnam]]);
};

const innIngnam = () => {
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
    [14, "Leave", startIngnam]
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
  Core.changeButtons([[0, "Next", startIngnam]]);
};

const farmIngnam = () => {};
