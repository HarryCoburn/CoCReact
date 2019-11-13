import * as Engine from "../Engine";
import * as SceneMsg from "../../scenes/sceneSymbols";

describe("Testing Engine functions", () => {
  describe("fetchScene function", () => {
    it("should throw on false scene", () => {
      expect(() => {
        Engine.fetchScene("bad");
      }).toThrow();
    });

    it("should throw on false sceneFunction", () => {
      expect(() => {
        Engine.fetchScene(SceneMsg.FETCH_SCENE_TEST_NOFUNC);
      }).toThrow();
    });

    it("should run a scene function normally", () => {
      expect(Engine.fetchScene(SceneMsg.FETCH_SCENE_TEST)).toEqual(undefined);
    });

    it("should detect go back", () => {
      expect(Engine.fetchScene(SceneMsg.GO_BACK)).toEqual(undefined);
    });
  });
});
