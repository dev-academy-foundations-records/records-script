// This function takes a string.
// You will need to split the string into individual words before you filter out all those annoying buzzing sounds!
// It might be helpful to look at the tests in the deBee.test.js file or use console.log inside of the function.

const sentence = "Help! bUzz I'm buzz buZz surrounded BUZZ by buzz buzz bees!!"

function deBee(sentence) {
  //split the sentence into array of words
  const wordArray = sentence.split(' ')
  //go through the wordArray
  for (let i = 0; i < wordArray.length; i++) {
    //create a new array of lowercase words that DONT include buzz
    const filteredArray = wordArray.filter(
      (word) => !word.toLowerCase().includes('buzz')
    )
    const unBuzzed = filteredArray.join(' ')
    return unBuzzed
  }
}

console.log(deBee(sentence))

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { deBee }
