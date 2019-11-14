import * as PlayerMsg from "../actions/playerMsg";

export default function updateBodyArr(part, action) {
  let type = action.type;
  let changes = action.payload;

  if (changes !== Object(changes)) {
    throw Error("UpdateBodyArr did not receive object: " + changes);
  }

  switch (type) {
    case PlayerMsg.CREATE_COCK:
      return { ...part, cocks: [...part.cocks, action.payload] };
    case PlayerMsg.CREATE_BREAST_ROW:
      if (part.breasts.length > part.maxBreastRows) {
        return part;
      } else {
        return { ...part, breasts: [...part.breasts, action.payload] };
      }
    default:
      return part;
  }
}
