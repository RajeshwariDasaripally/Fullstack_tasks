let fs = require('fs');   // fs module is to file processing

fs.readFile('./numbers.txt', (error, data) => {
    if (error) console.error(error)
     let numbers = data.toString(); // string form 1,3,4,6,10,12
     
    // The split() method splits a string into an array of substrings.
     const nums = numbers.split(','); // [ '1', '3', '4', '6', '10', '12' ]
     const numsArray = nums.map(Number);  // [ 1, 3, 4, 6, 10, 12 ] (string to array of digits)

     // sum of the numbers using reduce method
     //The reduce() method executes a reducer function for array element.

     const tValue = 0;
     const sumOfNumbers = numsArray.reduce((tValue, cValue)=> tValue + cValue,tValue);

     console.log(`Sum is ${sumOfNumbers}`);

    })

console.log("Reading file and calculate a sum...")