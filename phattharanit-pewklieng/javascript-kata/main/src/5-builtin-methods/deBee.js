// This function takes a string. 
// You will need to split the string into individual words before you filter out all those annoying buzzing sounds! 
// It might be helpful to look at the tests in the deBee.test.js file or use console.log inside of the function.

function deBee(sentence) {
    let arr = sentence.split(" ")
    arr = arr.filter(word => word.toUpperCase()!= 'BUZZ')
    arr = arr.join(' ')
    return arr
}




// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { deBee }
