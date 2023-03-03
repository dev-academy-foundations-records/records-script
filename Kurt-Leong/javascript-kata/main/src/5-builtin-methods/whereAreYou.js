// This function takes an array of objects.
// Use the .find() method and return the first object that “Scooby” is hiding within.
// Look at the tests in the whereAreYou.test.js file or use console.log inside of the function to determine the structure of objects in the array.

function whereAreYou(arrayOfObjects) {
  // find the then name of key in object
  return arrayOfObjects.find(({ hiding }) => hiding === 'Scooby')

  // for (let element of arrayOfObjects) {
  //   arrayOfObjects.find((element) => {
  //     Object.hiding == 'Scooby'
  //   })
  //   console.log(element)
  // }
}
// let findFirstWrod = whereAreYou(arrayOfObjects)
// console.log(findFirstWrod)
// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { whereAreYou }
