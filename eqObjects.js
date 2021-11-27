const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {

    if (object1[key] instanceof Array) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] instanceof Object) {

      return eqObjects(object1[key], object2[key]);

    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
// const ab = {a: "1", b: "2"};
// const ba = {b: "2", a: "1"};

// console.log(eqObjects(ba,ab));

// const abc = {a: "1", b: "2", c: "3"};
// console.log(eqObjects(ab,abc));

// const cd = {c: "1", d: ["2",3]};
// const dc = {d:["2", 3], c: "1"};
// console.log(eqObjects(cd, dc));

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

let uwu = { u: { w: "u" }, o: "w", uwu: {w: "hats", t:"his"}};
let owo = { u: { w: "u" }, o: "w", uwu: {w: "hats", t:"his"}};
console.log(eqObjects(uwu, owo));
console.log(assertEqual(eqObjects(uwu, owo), true));
