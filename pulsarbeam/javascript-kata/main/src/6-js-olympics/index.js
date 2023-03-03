// JavaScript Olympics

let athleteArray = []

let santa = {
  name: 'Santa',
  age: '1748',
  sport: 'delivery',
  quote: 'i am not paid enough for this',
}
athleteArray.push(santa)

let neo = {
  name: 'Neo',
  age: '25',
  sport: 'running',
  quote: 'meow',
}
athleteArray.push(neo)

let juno = {
  name: 'Juno',
  age: '29',
  sport: 'high jump',
  quote: 'woof',
}
athleteArray.push(juno)
///////////////////////
// Event 0 - Warm Up //
///////////////////////

// 0.1 Add santa to the athlete array

// 0.2 Create your own athlete and add it to the athlete array

///////////////////////
// Event 1 - Bulk Up //
///////////////////////

// 1.1 Use a for loop to add a property called win to every element in athleteArray.
// win should be a function expression with no parameters that console logs: "{name} won the {sport} event!"
athleteArray.forEach((person) => {
  person.win = function () {
    console.log(person.name + ' won the ' + person.sport + ' event!')
  }
})

///////////////////////////
// 2 - Jumble your words //
///////////////////////////

// 2.1 Complete the unjumble function, which accepts a string as an argument and reverses it, then returns the reversed string.
// Use the built-in JavaScript methods for strings and arrays to accomplish this.
// See the MDN String and Array documentation for all the available methods.

function unjumble(s) {
  return s.split('').reverse().join('')
}

/////////////////////////
// Event 3 -  Odds Out //
/////////////////////////

// 3.1 Create a function called removeOdds that accepts an array of numbers. Return an array with only the even numbers.
// You can do this manually or use built-in JavaScript Array Methods.
//
function removeOdds(arr) {
  return arr.filter((num) => num % 2 === 0) // the .filter() method takes a callback function as an argument
  //the call back function take a single argument "num" and returns a boolean value
}

//////////////////////////////////
// Event 4 - We built this city //
//////////////////////////////////

// 4.1 Create a function called newAthlete that takes a name, age, sport, and quote and creates a new athlete object from it. Don't forget to include a win attribute.

function newAthlete(name, age, sport, quote) {
  let athlete = {
    name: name,
    age: age,
    sport: sport,
    quote: quote,
  }

  athlete.win = function () {
    console.log(this.name + ' won the ' + this.sport + ' event!')
  }

  return athlete
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { athleteArray, unjumble, removeOdds, newAthlete }
