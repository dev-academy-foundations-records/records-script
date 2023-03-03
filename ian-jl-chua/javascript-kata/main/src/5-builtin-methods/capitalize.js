// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

function capitalize(string) {
  return string
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
