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

// Returns a single item from an array with relative weighting of odds
// Code taken from chancejs.com/chance.js and altered
// https://chancejs.com/miscellaneous/weighted.html
export const weighted = function(arr, weights, trim) {
  if (arr.length !== weights.length) {
    throw new RangeError("Chance: Length of array and weights must match");
  }

  // scan weights array and sum valid entries
  let sum = 0;
  let val;
  for (let weightIndex = 0; weightIndex < weights.length; ++weightIndex) {
    val = weights[weightIndex];
    if (isNaN(val)) {
      throw new RangeError("Chance: All weights must be numbers");
    }

    if (val > 0) {
      sum += val;
    }
  }

  if (sum === 0) {
    throw new RangeError("Chance: No valid entries in array weights");
  }

  // select a value within range
  var selected = Math.random() * sum;

  // find array entry corresponding to selected value
  var total = 0;
  var lastGoodIdx = -1;
  var chosenIdx;
  for (let weightIndex = 0; weightIndex < weights.length; ++weightIndex) {
    val = weights[weightIndex];
    total += val;
    if (val > 0) {
      if (selected <= total) {
        chosenIdx = weightIndex;
        break;
      }
      lastGoodIdx = weightIndex;
    }

    // handle any possible rounding error comparison to ensure something is picked
    if (weightIndex === weights.length - 1) {
      chosenIdx = lastGoodIdx;
    }
  }

  var chosen = arr[chosenIdx];
  trim = typeof trim === "undefined" ? false : trim;
  if (trim) {
    arr.splice(chosenIdx, 1);
    weights.splice(chosenIdx, 1);
  }

  return chosen;
};
