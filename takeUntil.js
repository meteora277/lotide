const takeUntil = function(array, callback) {

  let newArray = [];

  for (let item of array) {
    console.log(callback(item),item);
    if (callback(item)) {
      
      newArray.push(item);
    } else {
      return newArray;
    }

  }
  return newArray;
};

