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

module.exports = middle;