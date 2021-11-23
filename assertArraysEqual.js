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

console.log(assertEqualArrays(["uwu"], ["owo"]));