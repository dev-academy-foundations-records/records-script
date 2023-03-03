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
//loop array
//function Fizzbuzz apply on array

//--------using .map--------//
// function superFizzbuzz(arr) {
//   return arr.map(fizzbuzz)
// }

function superFizzbuzz(arr) {
  let newArray = []
  for (const element of arr) {
    newArray.push(fizzbuzz(element))
  }
  return newArray
}

//uncomment the code below to see the way without using `function fizzbuzz`
// function superFizzbuzz(arrayParameter) {
//   let array = []
//   for (let i = 0; i < arrayParameter.length; i++) {
//     if (arrayParameter[i] % 15 === 0) {
//       array.push('FizzBuzz')
//     } else if (arrayParameter[i] % 3 === 0) {
//       array.push('Fizz')
//     } else if (arrayParameter[i] % 5 === 0) {
//       array.push('Buzz')
//     } else {
//       array.push(arrayParameter[i])
//     }
//   }
//   return array
// }

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { superFizzbuzz }
