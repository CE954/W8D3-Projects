const readline = require ('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("input number:", function(num) { 
      const userNum = parseInt(num);
      console.log(sum += userNum);
      addNumbers(sum, numsLeft - 1, completionCallback)
    })
  } else {
    reader.close();
    return completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
