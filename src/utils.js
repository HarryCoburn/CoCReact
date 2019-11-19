export function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues);
}

export function makeSymbols(arr) {
  let obj = {};
  for (let val in arr) {
    obj[arr[val]] = Symbol(arr[val]);
  }
  return Object.freeze(obj);
}

export function makeEnums(arr) {
  let obj = {};
  arr.forEach((item, ind) => {
    obj[item] = ind + 1;
  });
  return Object.freeze(obj);
}

export const types = {
  get: function(prop) {
    return Object.prototype.toString.call(prop);
  },
  null: "[object Null]",
  object: "[object Object]",
  array: "[object Array]",
  string: "[object String]",
  boolean: "[object Boolean]",
  number: "[object Number]",
  date: "[object Date]"
};
