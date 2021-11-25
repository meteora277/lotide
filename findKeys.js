const assertEqual = function(actual, expected) {

  if (actual === expected) {

    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  } else {

    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  }

};
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("uwu", "uwu"));
console.log(assertEqual(3,2));

const findKeys = function(array, callback) {

  return array

};