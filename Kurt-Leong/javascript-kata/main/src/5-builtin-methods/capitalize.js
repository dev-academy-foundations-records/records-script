// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

function capitalize(str) {
  let arr = str.split(' ')
  let newArr = arr.map(capitalFirstLetter)

  return newArr.join(' ')
}
function capitalFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1)
}
// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
