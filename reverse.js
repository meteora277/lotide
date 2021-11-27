const args = process.argv.slice(2);

//function that accepts an arguements from CLI and reverses the characters in each item
const reverse = function(args) {
  let reversedArray = [];

  args.forEach(item => {
    
    let reversedWord = "";
    for (let i = 0; i < item.length; i++) {

      reversedWord += item[item.length - 1 - i];
      
    }
    reversedArray.push(reversedWord);
  
  });
  return reversedArray;
};

console.log(reverse(args));