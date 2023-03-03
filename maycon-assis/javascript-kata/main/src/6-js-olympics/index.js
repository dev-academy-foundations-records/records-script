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
athleteArray.push(santa)
// 0.2 Create your own athlete and add it to the athlete array
let maycon = {
  name: 'Maycon',
  age: 22,
  sport: 'Football',
  quote: 'More than a game',
}
athleteArray.push(maycon)
///////////////////////
// Event 1 - Bulk Up //
///////////////////////

// 1.1 Use a for loop to add a property called win to every element in athleteArray.
// win should be a function expression with no parameters that console logs: "{name} won the {sport} event!"

for (let i = 0; i < athleteArray.length; i++) {
  athleteArray[i].win = function win() {
    console.log(athleteArray[i].name + ' won the ' + athleteArray[i].sport + ' event!')
  }
}

///////////////////////////
// 2 - Jumble your words //
///////////////////////////

// 2.1 Complete the unjumble function, which accepts a string as an argument and reverses it, then returns the reversed string.
// Use the built-in JavaScript methods for strings and arrays to accomplish this.
// See the MDN String and Array documentation for all the available methods.

function unjumble(string) {
  return string.split('').reverse().join('')
}
console.log(unjumble('maycon'))

/////////////////////////
// Event 3 -  Odds Out //
/////////////////////////

// 3.1 Create a function called removeOdds that accepts an array of numbers. Return an array with only the even numbers.
// You can do this manually or use built-in JavaScript Array Methods.

function removeOdds(arr) {
  return arr.filter((num) => num % 2 == 0)
}

console.log(removeOdds([2, 3, 4, 5, 6, 7, 8, 9, 10]))

//////////////////////////////////
// Event 4 - We built this city //
//////////////////////////////////

// 4.1 Create a function called newAthlete that takes a name, age, sport, and quote and creates a new athlete object from it. Don't forget to include a win attribute.

function newAthlete(name, age, sport, quote) {
  let athlete = {}
  athlete.name = name
  athlete.age = age
  athlete.sport = sport
  athlete.quote = quote
  athlete.win = function win() {
    console.log(athlete.name + ' won the ' + athlete.sport + ' event!')
  }
  return athlete
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { athleteArray, unjumble, removeOdds, newAthlete }
