// Write a function called fizzbuzz which takes a number as its input. It should return the number that is passed to it, unless the number is:

// divisible by 15, then it should be replaced with the string "FizzBuzz"
// divisible by 5, then it should be replaced with the string "Buzz"
// divisible by 3, then it should be replaced with the string "Fizz"


// -----NOTES------//
// to check if a number is divisible by another, we can use the %(remainder) operator. It will
// divide our parameter by the chosen number and return the remainder of the division. For example, if 'x' is
// divisible by 3, the remainder will be zero (x % 3 == 0). 

function fizzbuzz(numberParameter) {
    if (numberParameter > 0 && numberParameter % 15 === 0){
    return 'FizzBuzz';
    
        } else if (numberParameter > 0 && numberParameter % 3 === 0){
             return 'Fizz';

            } else if (numberParameter > 0 && numberParameter % 5 === 0){
                 return 'Buzz';
                
                }else {
                     return numberParameter;
                    }
}

// the fizzbuzz function takes an array of numbers and pass it to some "filters" to apply
// and return the required changes.


















// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { fizzbuzz }
