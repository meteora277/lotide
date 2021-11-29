const middle = require("../middle");
const { assert } = require('chai');

describe("middle ()", () => {

  it('should return [3,4] if passed in [1, 2, 3, 4, 5, 6]', () => {

    const actual = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3,4];

    assert.deepEqual(actual, expected);
  });

});

describe("middle ()", () => {

  it('should return [5, 2, 12, 4, 5] if passed in [12]', () => {

    const actual = middle([6, 2, 12, 4, 5]);
    const expected = [12];

    assert.deepEqual(actual, expected);
  });

});
 

// console.log("middle of [1, 2, 3, 4, 5, 6] is",middle([1, 2, 3, 4, 5, 6]));
// console.log("middle of [1, 2, 6] is",middle([1, 2, 6]));
// console.log(assertEqualArrays(eqArrays(middle([1, 2, 3, 4, 5, 6]),[3,4]),true));
// console.log(assertEqualArrays(eqArrays(middle([6, 2, 12, 4, 5]),[12]),true));