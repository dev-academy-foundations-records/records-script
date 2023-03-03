// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

//use .split() to store words in sentence in an array.
//use .map() to map through every word.
// use toUpperCase and charAt() to capitalize the first letter of every array.

function capitalize(string) {
  return string
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}
console.log(capitalize('hey what we doing tonight'))
module.exports = { capitalize }
