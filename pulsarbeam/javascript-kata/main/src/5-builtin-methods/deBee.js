// This function takes a string.
// You will need to split the string into individual words before you filter out all those annoying buzzing sounds!
// It might be helpful to look at the tests in the deBee.test.js file or use console.log inside of the function.

function deBee(sentence) {
  // Split the string into an array of words using the .split() method, with a space as the separator
  return sentence
    .split(' ')
    .filter((word) => word.replace(/buzz/gi, ''))
    .join(' ')
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { deBee }
