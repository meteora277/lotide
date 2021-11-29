const eqArrays = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {

    if (array1[i] !== array2[i]) {

      return false;

    }

  }
  return true;
};

const assertEqualArrays = function(actual, expected) {

  if (eqArrays(actual, expected)) {

    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  } else {

    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  }

};

//console.log(assertEqualArrays(["uwu"], ["owo"]));

const letterPositions = function(string) {

  let letterIndexObject = {};

  for (let i = 0; i < string.length; i++) {

    if (string[i] !== " ") {
      if (letterIndexObject[string[i]]) {

        letterIndexObject[string[i]].push(i);

      } else {

        letterIndexObject[string[i]] = [i];

      }
    }
  }

  return letterIndexObject;
};
let str = letterPositions("hello");
// console.log(str);
// console.log(assertEqualArrays(str, [2,3]));
// console.log(assertEqualArrays(letterPositions("hello").e, [1]));

module.exports = letterPositions;