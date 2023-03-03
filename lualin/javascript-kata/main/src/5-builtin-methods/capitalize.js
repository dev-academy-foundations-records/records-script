// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

function capitalize(string) {
  const splitStrArray = string.split(' ') //Split the string into words in an array seperated by ' '
  // Maps through the words array, capitalise first letter of all words then adds the rest of letters behind it
  const firstLetterCapitalised = splitStrArray.map(
    (cap) => cap.charAt(0).toUpperCase() + cap.slice(1)
  )
  // Joins all words into a string with space between each word
  const finalStr = firstLetterCapitalised.join(' ')
  return finalStr
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
