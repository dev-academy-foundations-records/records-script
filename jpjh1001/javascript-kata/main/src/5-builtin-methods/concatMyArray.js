// This function takes an array of individual strings
// and then will need to .join() them together to return one string.

const connect = ['James', 'Jin', ' Hwan', 'Park']

function concatMyArray(arrayOfStrings) {
  return arrayOfStrings.join('')
}

concatMyArray(connect)

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { concatMyArray }
