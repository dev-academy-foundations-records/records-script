// Apologies, I somehow skipped this and went straight to the kata challenges. Am I bit tired now so cheekily reusing some code.

// .map()
// calls a function on every element in an array and then spits is out into a new array
const fingers = 'i can type many sentences';

function capitalize(string) {
  return string
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

// .join()
// joins elements in an array together to return one string.
const zoomies = ['zoom', 'zoom', '!'];

function concatMyArray(arrayOfStrings) {
  return arrayOfStrings.join('');
}

// ------------ Calling the functions -----------

console.log(capitalize(fingers));
console.log(concatMyArray(zoomies));
