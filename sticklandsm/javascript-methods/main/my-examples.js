// Write your two examples here

//Object.values()
//Contrary to Object.keys, This method returns an array listing the objects values in order, instead of the keys
// Example: getObjectValues(filmData) should return ['Jurassic Park', 'Steven Spielberg', 1993, 'Dinosaurs']

const filmData = {
  title: 'Jurassic Park',
  director: 'Steven Spielberg',
  yearReleased: 1993,
  genre: 'Dinosaurs',
}

const getObjectValues = (data) => Object.values(data)

//.forEach is an array method that takes a function as an arguments and does that function once to every element in the array
//Example: when given an array of numbers, multiplyByTwo should return an array that has the same numbers doubled

const array1 = [2, 5, 7, 3, 8, 56, 78, 9, 4, 3, 8]

function multiplyByTwo(array) {
  let multipliedByTwo = []
  array.forEach((element) => multipliedByTwo.push(element * 2))
  return multipliedByTwo
}

//.eval() evaluates a string representing a piece of code and returns what the string would return
//Example: getEvalOfScript should run whatever script is put into it as a string, so the variable below should console log the same array as the above function.

scriptAsString = `multiplyByTwo(array1)`

function getEvalOfScript(string1) {
  return eval(string1)
}

// ------------ Calling the functions -----------

const getObjectValuesResults = getObjectValues(filmData)
console.log(`getObjectValuesResults: `, getObjectValuesResults)

const multipliedByTwoResults = multiplyByTwo(array1)
console.log(`multiplyByTwoResults: `, multipliedByTwoResults)

console.log(`getEvalofScriptResult: `, getEvalOfScript(scriptAsString))
