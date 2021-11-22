const assertEqual = function(actual, expected) {

  if (actual === expected) {

    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  } else {

    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  }

};
const tail = function(arr) {

  let newArr = arr.slice(1);

  return newArr;

};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result, ["Lighthouse", "Labs"]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log([words]);
console.log(assertEqual(words.length,3));