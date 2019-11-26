import * as Core from "../../actions/Core";

export const Apple = {
  name: "Apple",
  longName: "a fresh apple",
  effect: () => Core.changeStats({ hp: 10 })
};

export default Apple;
