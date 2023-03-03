// This function takes an array of individual strings
// and then will need to .join() them together to return one string.

function concatMyArray(arrayOfStrings) {
  const finalStr = arrayOfStrings.join('') // Joins all words in the given array into a string
  return finalStr
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { concatMyArray }
