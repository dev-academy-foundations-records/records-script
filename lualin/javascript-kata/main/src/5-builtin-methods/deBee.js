// This function takes a string.
// You will need to split the string into individual words before you filter out all those annoying buzzing sounds!
// It might be helpful to look at the tests in the deBee.test.js file or use console.log inside of the function.

function deBee(sentence) {
  const splitSentence = sentence.split(' ') // Split the sentence into words in an array split by space
  const filteredSentence = splitSentence.filter((word) => !/buzz/i.test(word)) // Removes the string 'buzz' regarless of capitalisation using regular expression (/str/i) then the test method checks if a word matches the regular expression
  const joinedSentence = filteredSentence.join(' ') // Join the left words togeter into a string

  return joinedSentence
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { deBee }
