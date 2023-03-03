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

//create an array
const arrayParameter = []

//generate random numbers for the array above
function generateRandomNumbers(min, max, times) {
  for (let i = 0; i < times; i++) {
    //add those numbers to the array
    arrayParameter.push(Math.floor(Math.random() * (max - min) + min))
  }
  //return updated numArray
  return arrayParameter
}

//run the function to get the random numbers
generateRandomNumbers(1, 100, 4)

//console.log the random numbers unchanged
console.log(
  `The random array of numbers to super fizzbuzz is ${arrayParameter}`
)

//fizzbuzz all the numbers in the arrayParameter
function superFizzbuzz(arrayParameter) {
  const fizzbuzzedArray = []

  //look at all the numbers in the array
  arrayParameter.forEach((num) => {
    fizzbuzz(num)
    const newNum = fizzbuzz(num)
    //put results of fizzbuzz in new array
    fizzbuzzedArray.push(newNum)
  })
  return fizzbuzzedArray
}

//superfizzbuzz the new numbers and return them changed
superFizzbuzz(arrayParameter)

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { superFizzbuzz }
