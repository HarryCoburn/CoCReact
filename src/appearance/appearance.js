import store from "../store/store";

export const skinColor = () => {
  return store.getState().appearance.skin.byID.tone.value;
};
