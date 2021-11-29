const middle = require("../middle");
const assertEqualArrays = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

console.log("middle of [1, 2, 3, 4, 5, 6] is",middle([1, 2, 3, 4, 5, 6]));
console.log("middle of [1, 2, 6] is",middle([1, 2, 6]));
console.log(assertEqualArrays(eqArrays(middle([1, 2, 3, 4, 5, 6]),[3,4]),true));
console.log(assertEqualArrays(eqArrays(middle([6, 2, 12, 4, 5]),[12]),true));