// Write a function called fizzbuzz which takes a number as its input. It should return the number that is passed to it, unless the number is:

// divisible by 15, then it should be replaced with the string "FizzBuzz"
// divisible by 5, then it should be replaced with the string "Buzz"
// divisible by 3, then it should be replaced with the string "Fizz"

//function with if/else if/else if / else and return
// parameter % by 15, 5, and 3, use % ===0

function fizzbuzz(numberParameter) {
  if (numberParameter % 15 === 0) {
    return 'FizzBuzz'
  } else if (numberParameter % 5 === 0) {
    return 'Buzz'
  } else if (numberParameter % 3 === 0) {
    return 'Fizz'
  } else {
    return numberParameter
  }
}

//

console.log(fizzbuzz(10))

// need an array that cycles through numbers? numbers 1-100. So could use a forEach? or even a for loop with iterator?
//for each number in array, complete the funtion
//print the outcome of the function

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { fizzbuzz }
