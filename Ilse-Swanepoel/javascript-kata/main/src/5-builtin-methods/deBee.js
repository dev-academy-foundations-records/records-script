// This function takes a string.
// You will need to split the string into individual words before you filter out all those annoying buzzing sounds!
// It might be helpful to look at the tests in the deBee.test.js file or use console.log inside of the function.

/* Split string into words using split
filter--> feels like a key word --> maybe .filter can remove certain words
return the string without the buzz words
if the W3S example uses return over 18, maybe we need to use return if not equal to i.e != "buzz" 
Remember we saw something at one point about disregarding the capitilization with something like /buzz/ ? - check this <-- /buzz/i or gi
Apparently this doesn't quite work like this... not sure why... but google recommends switching both to the same case?
  return str1.toUpperCase() === str2.toUpperCase();

This returns an array of all the words - tick (it works)
function deBee(sentence) {
  let buzzSoundsArray = sentence.split(' ')

  return buzzSoundsArray
}

Code that includes a filter function, but now we need to write a function for the filter? I think
function deBee(sentence) {
  let buzzSoundsArray = sentence.split(' ')

  let noBuzzSoundsArray = buzzSoundsArray.filter(removeBuzz)

  return buzzSoundsArray
  return noBuzzSoundsArray
}


OMG This is working! - so it's returning an array still so, we just need to join it together - also still need to solve the issue with buzz/Buzz/BUZZ etc

function deBee(sentence) {
  let buzzSoundsArray = sentence.split(' ')

  let noBuzzSoundsArray = buzzSoundsArray.filter(removeBuzz)

  return noBuzzSoundsArray
}

function removeBuzz(word) {
  return word != 'buzz'
}
*/

function deBee(sentence) {
  let buzzSoundsArray = sentence.split(' ')

  let noBuzzSoundsArray = buzzSoundsArray.filter(removeBuzz)

  let noBuzzSoundsString = noBuzzSoundsArray.join(' ')

  return noBuzzSoundsString
}

function removeBuzz(word) {
  const buzz = 'buzz'
  return word.toUpperCase() !== buzz.toUpperCase()
}

//The below didn't work because we weren't calling the function. Keeping it here as a reference of my thought processes

/*/This part isn't working
function rejoinSentence(noBuzzSoundsArray) {
  const noBuzzSoundsString = noBuzzSoundsArray.join('')
  return noBuzzSoundsString
}

*/

/*This also doesn't work
let noBuzzSoundsString = noBuzzSoundsArray.join('')

console.log(noBuzzSoundsString)

*/

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { deBee }
