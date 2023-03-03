// JavaScript Olympics

let athleteArray = []

let p1 = {
  name: 'Ian',
  age: '2500',
  sport: 'couch potato',
  quote: 'I am a potato',
}
let p2 = {
  name: 'Ilse',
  age: '19',
  sport: 'E-Sport',
  quote: 'The pickle LIVES',
}

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
// athleteArray.push(p1, p2)
athleteArray = [...athleteArray, p1, p2]
///////////////////////
// Event 1 - Bulk Up //
///////////////////////

// 1.1 Use a for loop to add a property called win to every element in athleteArray.
// win should be a function expression with no parameters that console logs: "{name} won the {sport} event!"

athleteArray.forEach((athlete) => {
  athlete.win = win
})
function win() {
  console.log(this.name + ' won the ' + this.sport + ' event!')
}
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

function removeOdds(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      arr.splice(i, 1)
    }
  }
  return arr
}

//////////////////////////////////
// Event 4 - We built this city //
//////////////////////////////////

// 4.1 Create a function called newAthlete that takes a name, age, sport, and quote and creates a new athlete object from it. Don't forget to include a win attribute.

function newAthlete(name, age, sport, quote) {
  return {
    name: name,
    age: age,
    sport: sport,
    quote: quote,
    win: win,
  }
}
// THIS WAS MY ORIGINAL CODE
// function newAthlete(name, age, sport, quote) {
//   let newPerson = {}
//   ;(newPerson.name = name),
//     (newPerson.age = age),
//     (newPerson.sport = sport),
//     (newPerson.quote = quote),
//     (newPerson.win = win)

//   return newPerson
// }

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { athleteArray, unjumble, removeOdds, newAthlete }
