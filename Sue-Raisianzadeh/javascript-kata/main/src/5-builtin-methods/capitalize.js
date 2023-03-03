// This function takes a sentence, which is a string. 
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function shouldgit add return the modified sentence as a string.

function capitalize(string) {

 return string.split(" ").map(word =>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

}

// splite the sentence into an array of the words with split(' ') method,
//map() method iterates over each word in the array , capitalizing the first word in the array with using 'charAt(0).toUpperCase()' 
//then concatenatingthe rest of the word using 'slice(1)'. 1 in piantesis represent the index in the array, so it would be second one
//slice() is a method to extract a portion of a string or an array
//join() method join the array of modified words back into a sentence 











// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
