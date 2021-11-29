const head = function(arr) {

  if (Array.isArray(arr)) {

    return arr[0];

  } else {

    return undefined;

  }

};

module.exports = head;
// console.log(assertEqual(head([5,6,7]), 5));
// console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
// console.log(assertEqual(head([]), 5));
// console.log(assertEqual(head(["owo", "Lighthouse", "Labs"]), "Hello"));