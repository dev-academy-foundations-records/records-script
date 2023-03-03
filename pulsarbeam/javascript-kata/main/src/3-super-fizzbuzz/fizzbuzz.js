// Write a function called fizzbuzz which takes a number as its input. It should return the number that is passed to it, unless the number is:

// divisible by 15, then it should be replaced with the string "FizzBuzz"
// divisible by 5, then it should be replaced with the string "Buzz"
// divisible by 3, then it should be replaced with the string "Fizz"
// We need some way to breakdown each number divisable by 15, 5, 3
// Needs to return a different string for each number
//
function fizzbuzz(num) {
  if (num % 15 === 0) {
    return 'FizzBuzz'
  } else if (num % 5 === 0) {
    return 'Buzz'
  } else if (num % 3 === 0) {
    return 'Fizz'
  } else {
    return num
  }
}
// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { fizzbuzz }
