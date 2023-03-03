// This function takes an array of individual strings
// and then will need to .join() them together to return one string.

let seanChar = ['s', 'e', 'a', 'n']

function concatMyArray(arrayOfStrings) {
  return arrayOfStrings.join('')
}

console.log(concatMyArray(seanChar))

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { concatMyArray }
