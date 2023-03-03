// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

function capitalize(arg1) {
  arg1 = arg1.split(` `)
  //This should split the sentence(arg1) into an array

  const map1 = arg1.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
  //This should capitalize every first letter and + the capitalized letter and the rest of the word to map1

  let join = map1.join(` `)
  return join
  //This should join every element in the array with a seperation of ` ` as a string and return it
}

capitalize('hello everyone how are we doing')

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
