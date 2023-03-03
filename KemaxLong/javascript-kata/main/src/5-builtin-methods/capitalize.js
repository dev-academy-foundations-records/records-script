// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

function capitalize(string) {
  let words = string.split(' ')
  let caPsen = words.map(
    (val) => val[0].toUpperCase() + val.slice(1).toLowerCase()
  )
  let sen = caPsen.join(' ')
  return sen
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
