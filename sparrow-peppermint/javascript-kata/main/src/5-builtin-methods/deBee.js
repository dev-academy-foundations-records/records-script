// This function takes a string. 
// You will need to split the string into individual words before you filter out all those annoying buzzing sounds! 
// It might be helpful to look at the tests in the deBee.test.js file or use console.log inside of the function.

function deBee(sentence) {
 
  const words = sentence.split(" ")  // split string into an array of words

  noBuzzWords = words.filter((word) => word.toLowerCase() != "buzz") // use filter to elimate any buzz word

  noBuzzSentence = noBuzzWords.join(" ")    // rejoin array of words to string with buzz removed

  return(noBuzzSentence)    // return deBuzzed string

}








// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { deBee }
