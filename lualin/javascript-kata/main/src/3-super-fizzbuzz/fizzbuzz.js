// Write a function called fizzbuzz which takes a number as its input. It should return the number that is passed to it, unless the number is:

// divisible by 15, then it should be replaced with the string "FizzBuzz"
// divisible by 5, then it should be replaced with the string "Buzz"
// divisible by 3, then it should be replaced with the string "Fizz"

function fizzbuzz(numberParameter) {
  // Below ternary statement takes numberParameter to check if the given number is divisible by 3,5 or 15.
  return numberParameter % 15 === 0
    ? (numberParameter = 'FizzBuzz') //If the number is divisible by 15, it returns 'FizzBuzz'
    : numberParameter % 5 === 0
    ? (numberParameter = 'Buzz') //If the number is divisible by 5, it returns 'Buzz'
    : numberParameter % 3 === 0
    ? (numberParameter = 'Fizz') //If the number is divisible by 3, it returns 'Fizz'
    : numberParameter //Else statement. If the number is not divisible by none of above, it returns the number as it is
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { fizzbuzz }
