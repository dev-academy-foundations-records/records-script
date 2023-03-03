// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

function capitalize(string) {

  let arrays = string.split(' ')
  let array2 = []

  for (let word of arrays) {
    word = word.charAt(0).toUpperCase()+word.substr(1)
    array2.push(word)
  }

  return array2.join(' ')
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
