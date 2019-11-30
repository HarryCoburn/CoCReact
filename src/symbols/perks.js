import * as PerkMsg from "../actions/messages/perkMsg";


const Perks = {
  STRONG: 1,
  FAST: 2,
  properties: {
    1: { id: "STRONG", name: "Strong" },
    2: { id: "FAST", name: "Fast" }
  }
};

export const createPerkList = () => {
  return [Perks.STRONG, Perks.FAST];
};

export const preparePerk = item => {
  return {
    type: PerkMsg.PREPARE_PERK_LIST,
    payload: item
  };
};



export default Perks;
