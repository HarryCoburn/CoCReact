import React from "react";
import * as Core from "../../actions/Core";
import * as Utils from "../../utils";
import Flags from "../../store/gameFlags";

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
    [
      2,
      "Alchemist",
      shopAlchemist
    ] /*
    [3, "Trading Post", shopTradingPost],
    [4, "Black Market", shopBlackMarket],*/,

    [14, "Back", startIngnam]
  ]);
};

const shopBlacksmith = () => {
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
  Core.addButton(14, "Leave", shopsIngnam); // Check this
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
  Core.addButton(14, "Leave", shopsIngnam);
};

/* Temple */

const templeIngnam = () => {};

const innIngnam = () => {};

const farmIngnam = () => {};
