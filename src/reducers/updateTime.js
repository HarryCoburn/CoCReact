import * as Utils from "../utils";

export default function updateTime(time, action) {
  let changes = action.payload;
  if (changes !== Object(changes)) {
    throw Error("Update Time received malformed changes object: " + changes);
  }

  let newTime = Utils.updateObject({}, time);

  newTime.hour += changes.hour || 0;
  newTime.day += changes.day || 0;
  newTime.minute += changes.minute || 0;

  while (newTime.minute > 60) {
    newTime.hour++;
    newTime.minute -= 60;
  }
  while (newTime.hour > 23) {
    newTime.day++;
    newTime.hour -= 24;
  }

  return newTime;
}
