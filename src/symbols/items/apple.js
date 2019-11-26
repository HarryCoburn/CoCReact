import * as Core from "../../actions/Core";

export const Apple = {
  name: "Apple",
  effect: () => Core.changeStats({ hp: 10 })
};
