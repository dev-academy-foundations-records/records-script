// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

const string = 'have had enough of joseph, susan, wiremu and elizabeth'

function capitalize(string) {
  const stringArray = string.split(' ')
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] =
      stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1)
  }
  let capString = stringArray.join(' ')
  return capString
}

console.log(capitalize(string))

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
