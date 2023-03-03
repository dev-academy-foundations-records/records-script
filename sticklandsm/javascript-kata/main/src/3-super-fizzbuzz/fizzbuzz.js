// Write a function called fizzbuzz which takes a number as its input. It should return the number that is passed to it, unless the number is:

// divisible by 15, then it should be replaced with the string "FizzBuzz"
// divisible by 5, then it should be replaced with the string "Buzz"
// divisible by 3, then it should be replaced with the string "Fizz"

//Psuedocode: Make a switch to return the words if their divisible by 15, 5, or 3. Use % to check this

//Using a switch because I'm trying to get used to them
function fizzbuzz(numberParameter) {
  
  switch (true) {
    case ((numberParameter % 15) === 0):
      return "FizzBuzz"
    case (numberParameter % 5) === 0:
      return `Buzz`
    case (numberParameter % 3) === 0:
      return `Fizz`
    default:
      return numberParameter
  }
}

console.log(fizzbuzz(10))

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { fizzbuzz }
