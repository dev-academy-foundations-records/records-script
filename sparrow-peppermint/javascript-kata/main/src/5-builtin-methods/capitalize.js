// This function takes a sentence, which is a string. 
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

function capitalize(string) {
  
  const words = string.split(" ")     //separte words in string into an array

  const capitalized = words.map((word => {    // use .map() to cycle through the array

      const firstLetter = word[0].toUpperCase();    //single out and capitalize the first letter

      const restOfWord = word.slice(1);           // single out the rest of the word
      
      return firstLetter + restOfWord     // put them back together and return the capitalized word
  }));

  const newString = capitalized.join(" ")     // convert the array back to a string

  return newString      // return new sentance
}

let jump = "for my love"






// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
