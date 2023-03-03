// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.
let text = 'How are you doing today?'
function capitalize(string) {
  const array = string.split(' ')
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  let newArray = array.map(capitalizeFirstLetter)
  return (CapitalizedString = newArray.join(' '))
}
capital = capitalize(text)

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
