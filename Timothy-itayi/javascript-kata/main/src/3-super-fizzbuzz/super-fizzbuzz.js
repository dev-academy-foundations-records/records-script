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
function superFizzbuzz(array) {
    return array.map(num => {
      if (num % 15 === 0) return "FizzBuzz";
      if (num % 5 === 0) return "Buzz";
      if (num % 3 === 0) return "Fizz";
      return num;
    });
  }

















// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { superFizzbuzz }
