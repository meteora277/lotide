const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"])[0];
console.log(assertEqual(result, "Lighthouse"));
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(assertEqual(words.length,3));