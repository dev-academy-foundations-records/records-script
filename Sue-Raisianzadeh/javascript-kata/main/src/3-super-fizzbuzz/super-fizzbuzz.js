const { fizzbuzz } = require('./fizzbuzz') 
// The above line of code is importing your fizzbuzz function from the previous file you were working on
// This allows you to use that function in this exercise


// Write a function called super_fizzbuzz which takes an array of numbers as its input.

// It should loop over that array and then return a "fizzbuzzed" array 
// i.e. the array is identical to the original, but with the following changes:
// For example:

// super_fizzbuzz([1,2,3])         will return [1, 2, "Fizz"]
// super_fizzbuzz([1,2,5])         will return [1, 2, "Buzz"]
// super_fizzbuzz([1,2,15])        will return [1, 2, "FizzBuzz"]
// super_fizzbuzz([30, 9, 20, 1])  will return ["FizzBuzz", "Fizz", "Buzz", 1]


// write your code below this line---------------------------------

 function superFizzbuzz(arrayParameter) {
  let numbers = [];
  for (let i = 0; i < arrayParameter.length; i++) {
     numbers.push(fizzbuzz(arrayParameter[i]))

   }
   return numbers;  
}



// another solution:

// function superFizzbuzz(arrayParameter) {

//   return arrayParameter.map(num => {
//   if (num % 3 === 0){ 
//        return "Fizz";
//   } else if (num % 5 === 0) {
//         return "Buzz";
//   } else if (num % 15 === 0) {
//     return "FizzBuzz";
//   }else {
//     return num;
//   }
// });
// }

//  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//  console.log(superFizzbuzz(numbers));
















// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { superFizzbuzz }
