// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

let longString = 'my name is james park and i am happy'

// let arrayOfString = longString.split(' ')

// let newArrayOfString = arrayOfString.map(capitalize)
// let newString = newArrayOfString.join(' ')

function capitalize(string) {
  let arrayOfString = string.split(' ')
  let wordArray = arrayOfString.map((word) => {
    let capitalizeFirstLetter = word.charAt(0).toUpperCase()
    let otherLetter = word.slice(1)
    return capitalizeFirstLetter + otherLetter
  })
  return wordArray.join(' ')
}

// function capitalize(string) {

// let arrayOfString = string.split(' ')
// arrayOfString.map((word) => {
//   let capitalizeFirstLetter = word.charAt(0).toUpperCase()
//   let otherLetter = word.slice(1)
//   let newString = capitalizeFirstLetter + otherLetter
//   return newString.join(' ')
// })

// }

// let upperCase = word.charAt(0).toUpperCase() + word.slice(1)
//     let newArrayOfString = upperCase.join(' ')
//     return newArrayOfString

// let upperCase = arrayOfString.charAt(0).toUpperCase() + string.slice(1)

// let newArrayOfString = upperCase.map(capitalize)

// return newArrayOfString.join(' ')

// function capitalize(string) {
//   return string.map((arrayOfString) => {
//     let capitaliseFirstletter = arrayOfString.charAt(0).toUpperCase()
//     let otherLetter = arrayOfString.slice(1)
//     let newString = capitaliseFirstletter + otherLetter
//     return newString.join(' ')
//   })
// }

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
