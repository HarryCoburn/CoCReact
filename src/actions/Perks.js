import * as Engine from "./engineMsg";
import store from "../store/store";

const _setPerk = () => {
  return {
    type: Engine.SET_PERK
  };
};

export const setPerk = () => store.dispatch(_setPerk());
