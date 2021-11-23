//recursive version of flatten

// const flatten = function(array) {

//   let arr = [];

//   for (let item of array) {

//     if (Array.isArray(item)) {
      
//       const nestedArr = flatten(item);

//       nestedArr.forEach(item => arr.push(item));

//     } else {

//       arr.push(item);

//     }

//   }
//   return arr;
// };
// console.log(flatten([[1],2,3,4,[5,[6,7]]]));

const flatten = function(array) {

  let unnestedArray = [];

  for (let item of array) {

    if (Array.isArray(item)) {

      unnestedArray = [...unnestedArray, ...item];

    } else {

      unnestedArray.push(item);

    }

  }
  return unnestedArray;
};

console.log(flatten([1, 2, [3, 4, 6, 8], 5, [6]]));

