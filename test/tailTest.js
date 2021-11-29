const tail = require("../tail");
const { assert, expect } = require('chai');

describe("tail ()", () => {

  it("should return ['Lighthouse', 'Labs'] when passed in ['Hello', 'Lighthouse', 'Labs']", () => {

    const actual = tail(['Hello', 'Lighthouse', 'Labs']);
    const expected = ['Lighthouse', 'Labs'];

    assert.deepEqual(actual, expected);

  });

});

describe("tail ()", () => {

  it("should return ['Lighthouse', 5] when passed in ['Hello', 'Lighthouse', 5]", () => {

    const actual = tail(['Hello', 'Lighthouse', 5]);
    const expected = ['Lighthouse', 5];

    assert.deepEqual(actual, expected);

  });

});



// const result = tail(["Hello", "Lighthouse", "Labs"])[0];
// console.log(assertEqual(result, "Lighthouse"));
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(assertEqual(words.length,3));