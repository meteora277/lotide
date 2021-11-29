const eqArrays = require("./eqArrays");

const assertEqualArrays = function(actual, expected) {

  if (eqArrays(actual, expected)) {

    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  } else {

    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  }

};

module.exports = assertEqualArrays;