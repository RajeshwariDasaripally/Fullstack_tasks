const process = require('process')
const path = require('path');

// logical OR operator ||  
// isNaN() function returns true only if the argument is NaN
if (process.argv.length <= 4 || isNaN(process.argv[2]) || isNaN(process.argv[3]) || isNaN(process.argv[4])) {

  // path.basename() method in path that extracts the base filename from a given path
  // __filename  is built in varable
  console.log(`Usage: ${path.basename(__filename)} RANDOMIZED_NUMBERS_COUNT MIN_VALUE MAX_VALUE`)
  //  exit the program with an error code if the program's arguments are incorrect process.exit(-1)
  // process.exit(0) indicates program completed sucessfully
  process.exit(-1)
}

const count  = parseInt(process.argv[2]);
const min = parseInt(process.argv[3]);
const max = parseInt(process.argv[4]);

const numbers = []

for (let i= 0; i< count; i++){

  // to extract random numbers between min and max 
const random = Math.random()*(max - min + 1) + min

// Math.floor function used to convert floating number to integer
const randoNum = Math.floor(random)  

// push() method adds new items to the end of an array.
numbers.push(randoNum);   
}

console.log(numbers);