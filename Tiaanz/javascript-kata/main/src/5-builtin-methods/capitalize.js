// This function takes a sentence, which is a string. 
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

function capitalize(string) {
    //convert the string to an array
    const array = string.split(" ");
    const newArr = array.map(str => str[0].toLocaleUpperCase() + str.slice(1))
    //convert the newArray to a string
    const newString = newArr.join(' ')
    return newString;
}














// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
