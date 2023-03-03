// Write a function called fizzbuzz which takes a number as its input. It should return the number that is passed to it, unless the number is:

// divisible by 15, then it should be replaced with the string "FizzBuzz"
// divisible by 5, then it should be replaced with the string "Buzz"
// divisible by 3, then it should be replaced with the string "Fizz"

function fizzbuzz(num) {
  /* let i
  for (i = 1; i <= 100; i++) {   */
  // number divisible by 3 and 5 will
  // always be divisible by 15, print
  // 'FizzBuzz' in place of the number
  if (num % 15 == 0) return 'FizzBuzz'
  // number divisible by 3? print 'Fizz'
  // in place of the number
  else if (num % 5 == 0) return 'Buzz'
  // number divisible by 5, print 'Buzz'
  // in place of the number
  else if (num % 3 == 0) return 'Fizz'
  // print the number
  else return num
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { fizzbuzz }
