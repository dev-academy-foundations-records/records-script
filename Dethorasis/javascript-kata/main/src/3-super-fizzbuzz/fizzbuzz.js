// Write a function called fizzbuzz which takes a number as its input. It should return the number that is passed to it, unless the number is:

// divisible by 15, then it should be replaced with the string "FizzBuzz"
// divisible by 5, then it should be replaced with the string "Buzz"
// divisible by 3, then it should be replaced with the string "Fizz"

function fizzbuzz(numberParameter) {
  // if number is divisible by 3 and has 0 remainder, return Fizz
  // if number is divisible by 5 and has 0 remainder, return Buzz
  // if number is divisible by 15 and has 0 remainder, return FizzBuzz
  // else return that number

  if (numberParameter % 3 === 0 && numberParameter % 5 === 0) {
    return `FizzBuzz`
  } else if (numberParameter % 3 === 0) {
    return `Fizz`
  } else if (numberParameter % 5 === 0) {
    return `Buzz`
  } else {
    return numberParameter
  }
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { fizzbuzz }
