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

const middle = function(array) {

  if (array.length <= 2) {

    return [];

  }
  //finds the middle of the array
  let middle = Math.floor(array.length / 2);
  
  const popAndShift = function(array) {

    array.pop();
    array.shift();

  };
  //if array.length is odd it will run pop and shift one less time, leaving 2 items in array
  if (array.length % 2 === 0) {

    middle -= 1;

  }
  let newArray = [...array];
  
  let i = 0;
  while (i < middle) {

    popAndShift(newArray);

    i++;
  }
  return newArray;
};

console.log("middle of [1, 2, 3, 4, 5, 6] is",middle([1, 2, 3, 4, 5, 6]));
console.log("middle of [1, 2, 6] is",middle([1, 2, 6]));
console.log(assertEqualArrays(eqArrays(middle([1, 2, 3, 4, 5, 6]),[3,4]),true));
console.log(assertEqualArrays(eqArrays(middle([6, 2, 12, 4, 5]),[12]),true));