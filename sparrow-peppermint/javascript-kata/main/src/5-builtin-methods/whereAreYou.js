// This function takes an array of objects. 
// Use the .find() method and return the first object that “Scooby” is hiding within. 
// Look at the tests in the whereAreYou.test.js file or use console.log inside of the function to determine the structure of objects in the array.

function whereAreYou(arrayOfObjects) {
  function isScooby(door) {             //check if object has the property hiding: Scooby
    return door.hiding === "Scooby";    //return true when found
  }
  return (arrayOfObjects.find(isScooby));   //return the first object where hiding: Scooby is true

}




// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { whereAreYou }
