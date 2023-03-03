// Write a function called fizzbuzz which takes a number as its input. It should return the number that is passed to it, unless the number is:

// divisible by 15, then it should be replaced with the string "FizzBuzz"
// divisible by 5, then it should be replaced with the string "Buzz"
// divisible by 3, then it should be replaced with the string "Fizz"

// use if statements to create conditions.
// use remainder operator to filter in divisible numbers.
// return appropriate string.
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
// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { fizzbuzz }
