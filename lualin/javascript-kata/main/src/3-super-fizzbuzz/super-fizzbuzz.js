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
  // Checks if given parameter is array, returns a string (Not an array!) if it is not an array
  if (Array.isArray(arrayParameter)) {
    // Maps every elements in the given array to check if each number is divisible by 3, 5, or 15.
    return arrayParameter.map((number) => {
      if (number % 15 === 0) return 'FizzBuzz' // Checks the element of array with biggest number first (15) as the number divisible by 15 can be also divided by 3 and 5. Then it passes to next line if not divisible. Returns 'FizzBuzz' if divisible by 15
      if (number % 3 === 0) return 'Fizz' // Returns 'Fizz' if divisible by 3 otherwise pass to next line
      if (number % 5 === 0) return 'Buzz' // Returns 'Buzz' if divisible by 5 otherwise pass to next line
      return number // If not passed by conditions above, return as what was given
    })
  } else return 'Not an array!'
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { superFizzbuzz }
