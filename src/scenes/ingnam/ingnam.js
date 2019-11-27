import React from "react";
import * as Core from "../../actions/Core";
import * as Utils from "../../utils";
import Flags from "../../store/gameFlags";
import { addShopItem } from "../shopFunctions";
import weapons from "../../symbols/items/weapons";
import armors from "../../symbols/items/armors";
import consumables from "../../symbols/items/consumables";
import { INGNAM_INN, MAIN_MENU } from "../sceneSymbols";
import store from "../../store/store";

export const startIngnam = () => {
  if (store.getState().time.day >= 3) {
    getBanishedToMareth();
    return;
  }

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
    [3, "Inn", INGNAM_INN],
    [4, "Farm", farmIngnam],
    [9, "Wait", Core.doWait, startIngnam]
  ]);
  if (
    store.getState().stats.stats.fat.value > 40 ||
    store.getState().stats.stats.hp.value /
      store.getState().stats.stats.hp.max <=
      0.9
  ) {
    Core.addButton(9, "Rest", Core.rest, startIngnam);
  }
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

const farmIngnam = () => {};

const getBanishedToMareth = () => {
  Core.newText(
    <>
      <p>
        Your time has come to meet up with the village elders. You know you are
        going to get sent to the demon realm and you're most likely not going to
        be able to return to Ingnam. You give your family and friends a long
        farewell.
      </p>
      <p>
        <i>This is the end of the Ingnam demo. Flags will now be reset</i>
      </p>
    </>
  );
  Flags.INGNAM_BLACKMARKET_TALKED = 0;
  Flags.INGNAM_RUMORS = 0;
  Flags.INGNAM_ALCHEMIST_TALKED = 0;
  Flags.INGNAM_WEAPONSMITH_TALKED = 0;
  Core.changeButtons([[0, "Back to main", MAIN_MENU]]);
};
