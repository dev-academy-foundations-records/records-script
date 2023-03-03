// This function takes an array of individual strings
// and then will need to .join() them together to return one string.

const arrayOfStrings = ['i', 'peaked', 'in', 'sprint-2']

function concatMyArray(arrayOfStrings) {
  const arrayConcat = arrayOfStrings.join('')
  return arrayConcat
}

console.log(concatMyArray(arrayOfStrings))

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { concatMyArray }
