//Math.min()

//This method will return the smallest of the numbers given as parameters.
//Example Math.min(-10, -5) will return -10

/*
  In this example we have an array comprising of several different numbers. Using the spread operator
  we can tell our Math.min() function to determine the lowest number within the entire array.
*/

const listOfNumbers = [52, 10, 5, 160, 3, -4, 245]
console.log(Math.min(...listOfNumbers))

//Math.max()

//This method will return the largest of the numbers given as parameters
//Example Math.max(56, 14) will return 14

/*
  The below function creates an empty array. The array will then be populated with a random
  number up to 100 and will do that 5 times. The function will then console.log the largest
  number in the array and then use the Math.max() method and determine the largest number in 
  that array.
*/

function returnLargestNumber() {
  let newListofNumbers = []

  for (i = 0; i <= 5; i++) {
    let randomNum = Math.floor(Math.random() * 100)
    newListofNumbers.push(randomNum)
  }
  console.log(newListofNumbers)
  console.log(Math.max(...newListofNumbers))
}
returnLargestNumber()

//.Map()

//This method will create a new array with the results of a provided function executed on an old array
//The below example will create a new array with each element being * 10 of the old array.
//Example const newMap = array1.map(x => x * 10)

/*
  The below example will take in a previously set array and divided each element by
  5. It will then populate a new array with these results.
*/

const exampleArray = [10, 100, 45, 6000, 560, 75]

const mappedArray = exampleArray.map((x) => x / 5)
console.log(mappedArray)
