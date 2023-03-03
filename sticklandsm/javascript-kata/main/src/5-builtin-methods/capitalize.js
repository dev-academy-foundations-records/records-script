// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

SeanSentence = 'sean is very lower case'

function capitalize(string) {
  let words = string.split(' ')
  words = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1, string.length)
  })
  return words.join(' ')
}

console.log(capitalize(SeanSentence))

// write your code above this line---------------------------------- 
// -----------------------------------------------------------------
module.exports = { capitalize }
