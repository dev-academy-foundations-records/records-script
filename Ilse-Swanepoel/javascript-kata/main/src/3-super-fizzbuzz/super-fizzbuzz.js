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

//function with array
// declare new array
//for loop and iterator for (i=0, i<superFizzbuzz.length, i++)?
// forEach number in array?
// run function
// return output and push into new array
// maybe something like console.log(fizzbuzz(arr[1]))
//new array fizzbuzzed with out put of returned values
//print new array

/* Saving this in case I need this, but Im starting to think it should be an of loop with an iterator instead

OMG This one was so close too!!

function super_fizzbuzz(arrayParameter) {
let fizzbuzzed =[]
  arrayParameter.forEach(number =>
     fizzbuzz(number)      <- this line just needed to be fizzbuzzed.push(fizzBuzz(number))

  ) 

return fizzbuzzed[]

} */

function superFizzbuzz(arrayParameter) {
  let fizzbuzzedarray = [] // This will be our new array that will print out our results

  for (i = 0; i < arrayParameter.length; i++) {
    let num = arrayParameter[i] //This part makes sure we use the number thats in the array. if we didn't have this and only used i, it would just look at the position, not the number at that position

    let fizzbuzzed = fizzbuzz(num) // saves our output to the variable fizzbuzzed. So no we have to push this value into our new array

    fizzbuzzedarray.push(fizzbuzzed)
  }

  return fizzbuzzedarray
}

//alternative code
//my for loop code was so close to this, I just hadd assumed it was going to return an ordered array so I just used [i] rather than (arr[i]) when calling the function.
// nice to know that I was close

/*

function super_fizzbuzz(arr) {
  
  
  let fizzbuzzedarray =[]

for (i=0, i<arrayParameter.length, i++) {
  fizzbuzzedarray.push(fizzBuzz(arr[i]))

}
return fizzbuzzedarray

}
*/

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { superFizzbuzz }
