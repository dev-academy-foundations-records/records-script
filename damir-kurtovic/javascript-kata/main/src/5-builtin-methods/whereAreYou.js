// This function takes an array of objects.
// Use the .find() method and return the first object that “Scooby” is hiding within.
// Look at the tests in the whereAreYou.test.js file or use console.log inside of the function
//to determine the structure of objects in the array.

function whereAreYou(arrayOfObjects) {
  return arrayOfObjects.find((obj) => {
    return obj.hiding === 'Scooby'
  })
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { whereAreYou }
