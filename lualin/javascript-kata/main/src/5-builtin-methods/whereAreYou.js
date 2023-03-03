// This function takes an array of objects.
// Use the .find() method and return the first object that “Scooby” is hiding within.
// Look at the tests in the whereAreYou.test.js file or use console.log inside of the function to determine the structure of objects in the array.

function whereAreYou(arrayOfObjects) {
  const isScooby = arrayOfObjects.find(({ hiding }) => hiding === 'Scooby') // Finds from the given object where the value of hiding strictly equals to 'Scooby'
  return isScooby
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { whereAreYou }
