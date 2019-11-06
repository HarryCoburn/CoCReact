import { fetchScene } from "../Core";
import { FETCH_SCENE_TEST } from "../../scenes/sceneSymbols";

const mockScene = {
  id: FETCH_SCENE_TEST,
  text: "Worked"
};

describe("Testing fetchScene function", () => {
  it("should return correct object shape", () => {
    expect(fetchScene(mockScene)).toStrictEqual({
      output: "Worked",
      stateUpdates: "Worked"
    });
    expect(() => {
      fetchScene({ id: "idThatReturnsNoFunc", text: "foo" });
    }).toThrow();
  });
});
