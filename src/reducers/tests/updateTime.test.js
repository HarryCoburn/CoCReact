import updateTime from "../updateTime";
import { updateObject } from "../../utils";

const testTime = {
  hour: 0,
  day: 0,
  minute: 0
};

describe("Testing updateTime function", () => {
  it("should fail with bad input", () => {
    expect(() => {
      updateTime(testTime, "Bad");
    }).toThrow();
  });
  it("should change time stats", () => {
    let action = { payload: { hour: 1, day: 1, minute: 1 } };
    let newTime = updateObject({}, testTime);
    newTime = updateTime(newTime, action);
    expect(newTime.hour).toEqual(1);
    expect(newTime.minute).toEqual(1);
    expect(newTime.day).toEqual(1);
  });
  it("should leave unchanged stats alone", () => {
    let action = { payload: { hour: 1 } };
    let newTime = updateObject({}, testTime);
    newTime = updateTime(newTime, action);
    expect(newTime.hour).toEqual(1);
    expect(newTime.minute).toEqual(0);
    expect(newTime.day).toEqual(0);
    newTime = updateTime(newTime, { payload: { hour: 0 } });
    expect(newTime.hour).toEqual(1);
    expect(newTime.minute).toEqual(0);
    expect(newTime.day).toEqual(0);
  });

  it("Should roll over hour and day", () => {
    let newTime = updateObject({}, testTime);
    newTime = updateTime(newTime, { payload: { minute: 90 } });
    expect(newTime.hour).toEqual(1);
    expect(newTime.minute).toEqual(30);
    newTime = updateTime(newTime, { payload: { hour: 25 } });
    expect(newTime.day).toEqual(1);
    expect(newTime.hour).toEqual(2);
  });
});
