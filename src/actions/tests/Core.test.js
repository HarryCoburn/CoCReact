import { fetchScene } from "../Core";
import { FETCH_SCENE_TEST } from "../../scenes/sceneSymbols";

const mockScene = FETCH_SCENE_TEST;

describe("Testing fetchScene function", () => {
  it("should return correct object shape", () => {
    expect(fetchScene(mockScene)).toStrictEqual({
      newText: "Worked"
    });
    expect(() => {
      fetchScene({ id: "idThatReturnsNoFunc", text: "foo" });
    }).toThrow();
  });
});
