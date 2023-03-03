// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

function capitalize(string) {
  return string
    .split(' ') //splits string into seperate arrays via " "
    .map((sentance) => sentance[0].toUpperCase() + sentance.slice(1))
    .join(' ') // joins " " back together to make setnacnes one string"
}
// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
