// This function takes a sentence, which is a string. 
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

function capitalize(string) {
  return string.split(' ').map((el) => el[0].toUpperCase() + el.slice(1)).join(' ')
}

module.exports = { capitalize }
