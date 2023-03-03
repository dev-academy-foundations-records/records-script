// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

/*
Take a string
break it into words -> make it an array of words? so split method maybe? and push into the new array? or does split do this automatically?
capitilise the first letter? - so will we need to break each word into letters? or can we just capatilise the first letter of the word array? .toUpperCase() is a method 
We will probably need the charAT - maybe a forEach function. e.g. for each word in the array - split, capatilise first letter and then rejoin? so another .map?
then we need to turn the array back into a string
It needs to .map so it might look something like newArray= string.map(Myfunction)
Then console.log newArray?


Splits the string
const string = "My name is Ilse"
let wordArray = string.split(' ')


Splits words?

forEach ()

*/

//function capitalize(string) {}

//console.log(wordArray)
//Watched Gerard's video and it all makes sense- used some google too

function capitalize(string) {
  return string
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
