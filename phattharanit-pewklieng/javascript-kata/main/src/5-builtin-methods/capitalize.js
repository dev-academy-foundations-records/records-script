// This function takes a sentence, which is a string. 
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.


function capitalize(str) {
  let arr = str.split(' ')
  arr = arr.map(word => word.charAt(0).toUpperCase()+word.slice(1))
  let newArr = arr.join(' ')
  return newArr

} 








// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
