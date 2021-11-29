const without = function(array, excludes) {
  
  let newArray = [...array];
  
  for (let exclude of excludes) {
    
    newArray = newArray.filter(item => item !== exclude);
  }

  return newArray;

};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"],[1, 2, "3"]));

module.exports = without;