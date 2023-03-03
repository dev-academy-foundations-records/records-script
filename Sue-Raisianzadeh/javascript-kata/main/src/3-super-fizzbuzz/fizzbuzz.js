// Write a function called fizzbuzz which takes a number as its input. It should return the number that is passed to it, unless the number is:

// divisible by 15, then it should be replaced with the string "FizzBuzz"
// divisible by 5, then it should be replaced with the string "Buzz"
// divisible by 3, then it should be replaced with the string "Fizz"

function fizzbuzz(numberParameter) {
   if (numberParameter % 15 === 0) return "FizzBuzz";
   if (numberParameter % 5 === 0) return "Buzz";
   if (numberParameter % 3 ===0) return "Fizz";
   return numberParameter;
}






















// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { fizzbuzz }
