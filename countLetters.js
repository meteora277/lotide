const assertEqual = function(actual, expected) {

  if (actual === expected) {

    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  } else {

    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  }

};

const countLetters = function(sentence) {

  let noSpaces = sentence.split(" ").join("");
  let charactersObject = {};

  for (let letter of noSpaces) {

    if (charactersObject[letter]) {
      charactersObject[letter] += 1;
    } else {
      charactersObject[letter] = 1;
    }
  }
  return charactersObject;
};

module.exports = countLetters;
// console.log(countLetters("lighthouse in the house"));