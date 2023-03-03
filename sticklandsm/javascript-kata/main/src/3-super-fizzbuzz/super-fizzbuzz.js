const { fizzbuzz } = require('./fizzbuzz')
// The above line of code is importing your fizzbuzz function from the previous file you were working on
// This allows you to use that function in this exercise

// Write a function called superfizzbuzz which takes an array of numbers as its input.

// It should loop over that array and then return a "fizzbuzzed" array
// i.e. the array is identical to the original, but with the following changes:
// For example:

// super_fizzbuzz([1,2,3])         will return [1, 2, "Fizz"]
// super_fizzbuzz([1,2,5])         will return [1, 2, "Buzz"]
// super_fizzbuzz([1,2,15])        will return [1, 2, "FizzBuzz"]
// super_fizzbuzz([30, 9, 20, 1])  will return ["FizzBuzz", "Fizz", "Buzz", 1]

// write your code below this line---------------------------------

//Pseudocode: make an empy array.
// loop through the given array and run the previous function on each number, then push it to the empy array.
//return the array
//I realise I probably should have used Map. Oh well.

function superFizzbuzz(arrayParameter) {
  const fizzbuzzed = []
  arrayParameter.forEach((element) => {
    fizzbuzzed.push(fizzbuzz(element))
  })
  return fizzbuzzed
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { superFizzbuzz }
