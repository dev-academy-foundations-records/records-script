// Math.max() -

//The Math.max() method is a method in the JavaScript Math object that returns the largest of zero or more numbers. It takes one or more numbers as arguments and returns the number with the highest value.
//Example:
let result = Math.max(10, 20, 30, 40)
console.log(result)

// Math.max() can also be used with an array of numbers.
// Example:
let numbers = [5, 10, 15, 20]
let resultArray = Math.max(...numbers)
console.log(resultArray)

// Math.max() only works with numbers. If you pass values of any other type to the method, they will be converted to numbers before the method is performed.

//.filter() -

// The .filter() method is an Array method in JavaScript that creates a new array that returns all the elements from an another array that meet the test conditions provided from the function.
// Here's an example of using the .filter() method to create a new array of even numbers from an existing array:
let numbersArray = [1, 5, 3, 2, 6, 4]

let evenNumbers = numbersArray.filter(function (num) {
  return num % 2 === 0
})

console.log(evenNumbers)
