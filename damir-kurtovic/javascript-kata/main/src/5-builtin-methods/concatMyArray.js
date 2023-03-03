// This function takes an array of individual strings
// and then will need to .join() them together to return one string.

function concatMyArray(arr, separator = '') {
  return arr.join(separator)

  const elements = ['Fire', 'Air', 'Water']
  console.log(concatMyArray(elements))
}
// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { concatMyArray }
