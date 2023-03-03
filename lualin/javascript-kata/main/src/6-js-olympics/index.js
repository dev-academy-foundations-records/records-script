// JavaScript Olympics

let athleteArray = []

let santa = {
  name: 'Santa',
  age: '1748',
  sport: 'delivery',
  quote: 'i am not paid enough for this',
}

///////////////////////
// Event 0 - Warm Up //
///////////////////////

// 0.1 Add santa to the athlete array

// Adds santa object into athlete array
athleteArray.push(santa)

// 0.2 Create your own athlete and add it to the athlete array

let roger = {
  name: 'Roger',
  age: '1981',
  sport: 'tennis',
  quote: 'I fear no one but respect everyone.',
}

athleteArray.push(roger)

///////////////////////
// Event 1 - Bulk Up //
///////////////////////

// 1.1 Use a for loop to add a property called win to every element in athleteArray.
// win should be a function expression with no parameters that console logs: "{name} won the {sport} event!"

// for loops before the length of array and add win key with a value that has function to display message using console.log
for (i = 0; i < athleteArray.length; i++) {
  athleteArray[i].win = function () {
    console.log(`${this.name} won the ${this.sport} event!`)
  }
}
///////////////////////////
// 2 - Jumble your words //
///////////////////////////

// 2.1 Complete the unjumble function, which accepts a string as an argument and reverses it, then returns the reversed string.
// Use the built-in JavaScript methods for strings and arrays to accomplish this.
// See the MDN String and Array documentation for all the available methods.

function unjumble(s) {
  const splitStr = s.split('') //Split the given string into an array by seperated by single letter
  const reverseStr = splitStr.reverse() //Reverse the order of splitStr
  const joinedStr = reverseStr.join('') //Join the letters together

  return joinedStr
}

/////////////////////////
// Event 3 -  Odds Out //
/////////////////////////

// 3.1 Create a function called removeOdds that accepts an array of numbers. Return an array with only the even numbers.
// You can do this manually or use built-in JavaScript Array Methods.

function removeOdds(arr) {
  const evenNo = arr.filter((num) => num % 2 === 0) //Filter even numbers only in the array
  return evenNo
}

//////////////////////////////////
// Event 4 - We built this city //
//////////////////////////////////

// 4.1 Create a function called newAthlete that takes a name, age, sport, and quote and creates a new athlete object from it. Don't forget to include a win attribute.

function newAthlete(name, age, sport, quote) {
  const newAthleteObj = {
    name: name,
    age: age,
    sport: sport,
    quote: quote,
    win: function () {
      console.log(`${this.name} won the ${this.sport} event!`)
    },
  }
  return newAthleteObj
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { athleteArray, unjumble, removeOdds, newAthlete }
