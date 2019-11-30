import * as PerkMsg from "./messages/perkMsg";
import store from "../store/store";

const _setPerk = () => {
  return {
    type: PerkMsg.SET_PERK
  };
};

export const setPerk = () => store.dispatch(_setPerk());
