const head = require("../head");
const { assert, expect } = require("chai");
const { array } = require("yargs");

describe("#head", () => {

  it("returns 5 for [5, 6, 7]", () => {

    assert.strictEqual(head([5, 6, 7]),5);

  });

});
describe("#head", () => {

  it("returns 5 for [5]", () => {

    assert.strictEqual(head([5]),5);

  });

});
describe("#head", () => {

  it("returns Hello for head(['Hello', 'Lighthouse', 'Labs'])", () => {

    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]),"Hello");

  });

});
describe("#head", () => {

  it("returns undefined if passed in []", () => {

    expect(head([])).to.be.undefined;

  });

});
