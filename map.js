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
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const words = ["ground", "control", "to", "major", "tom"];

// assertEqualArrays(
//   map(words, (word) => word[0]),["g", "c", "t", "m", "t"]
// );
// assertEqualArrays(
//   map(words, (word) => word + " uwu"),["ground uwu", "control uwu", "to uwu", "major uwu", "tom uwu"]
// );
// assertEqualArrays(
//   map(words, (word) => word.split("").map(letter => letter === "r" ? "ow" : letter).join("")),["gowound", "contowol", "to", "majoow", "tom"]
// );

module.exports = map;