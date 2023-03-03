// This function takes a sentence, which is a string. 
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.


let string = 'i want to see this thing work'


function capitalizeWord(word) {
    
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalize(string) {
let word = string.split(' ')
let newArr = word.map(capitalizeWord)
let newString = newArr.join(' ')

return newString
}










// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
