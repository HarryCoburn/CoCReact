import * as Player from "../Player";
import * as PlayerMsg from "../playerMsg";

describe("Player actions", () => {
  it("should send restore HP message", () => {
    expect(Player.restoreHP()).toEqual({ type: PlayerMsg.RESTORE_HP });
  });

  it("should send set player name action", () => {
    expect(Player.setPlayerName("mattibun")).toEqual({
      type: PlayerMsg.SET_PLAYER_NAME,
      payload: "mattibun"
    });
  });
});
