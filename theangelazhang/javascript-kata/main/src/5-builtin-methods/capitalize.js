// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

// function capitalize(string) {
//   const array = string.split(' ');
//   const capitalizedArray = [];

//   array.map((word) =>
//     capitalizedArray.push(word.charAt(0).toUpperCase() + word.slice(1))
//   );

//   return capitalizedArray.join(' ');
// }

// refactor - simplify by not defining unecessary variables

function capitalize(string) {
  return string
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize };
