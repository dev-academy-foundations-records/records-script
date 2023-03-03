// This function takes an array of objects.
// Use the .find() method and return the first object that “Scooby” is hiding within.
// Look at the tests in the whereAreYou.test.js file or use console.log inside of the function to determine the structure of objects in the array.

let doors = [
  { doorNumber: 1, hiding: 'Daphne' },
  { doorNumber: 2, hiding: 'Shaggy' },
  { doorNumber: 3, hiding: 'Velma' },
  { doorNumber: 4, hiding: 'Fred' },
  { doorNumber: 5, hiding: 'Scooby' },
]

function whereAreYou(arrayOfObjects) {
  return arrayOfObjects.find((hidingPlace) => hidingPlace.hiding === 'Scooby')
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { whereAreYou }
