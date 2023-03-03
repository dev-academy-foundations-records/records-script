// JavaScript Olympics

let athleteArray = []

const santa = {
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

const susan = {}

susan.name = 'Susan'
susan.age = 'the age where the name Susan is normal'
susan.sport = 'competitive ironing'
susan.quote = 'because I said so'

athleteArray.push(susan)

console.log(athleteArray)
///////////////////////
// Event 1 - Bulk Up //
///////////////////////

// 1.1 Use a for loop to add a property called win to every element in athleteArray.
// win should be a function expression with no parameters that console logs: "{name} won the {sport} event!"

// use a for loop to look through athleteArray

for (const athlete of athleteArray) {
  let sport = athlete.sport
  athlete.win = function () {
    console.log(`${athlete.name} won the ${sport} event!`)
  }
}

//add property 'win' to every element in athleteArray
// let athlete = athleteArray[i]
// athleteArray[athlete].win = win()

///////////////////////////
// 2 - Jumble your words //
///////////////////////////

// 2.1 Complete the unjumble function, which accepts a string as an argument and reverses it, then returns the reversed string.
// Use the built-in JavaScript methods for strings and arrays to accomplish this.
// See the MDN String and Array documentation for all the available methods.

let s = 'siwel haras'

function unjumble(s) {
  let stringArray = s.split('')
  stringArray.reverse()
  let joinedArray = stringArray.join('')
  return joinedArray.toString()
}

console.log(unjumble(s))

/////////////////////////
// Event 3 -  Odds Out //
/////////////////////////

// 3.1 Create a function called removeOdds that accepts an array of numbers. Return an array with only the even numbers.
// You can do this manually or use built-in JavaScript Array Methods.

let arr = [1, 2, 3, 5, 4, 7]

function removeOdds(arr) {
  let evenArr = []
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    num % 2 == 0 ? evenArr.push(num) : false
  }
  return evenArr
}

console.log(removeOdds(arr))

//////////////////////////////////
// Event 4 - We built this city //
//////////////////////////////////

// 4.1 Create a function called newAthlete that takes a name, age, sport, and quote and creates a new athlete object from it. Don't forget to include a win attribute.

function newAthlete(name, age, sport, quote) {
  //create new object
  const newPerson = {
    name: name,
    age: age,
    sport: sport,
    quote: quote,
    win: (win = function () {
      console.log(`${newPerson.name} won the ${sport} event!`)
    }),
  }
  return newPerson
}

console.log(newAthlete('sarah', '33', 'eating', 'dont talk to me'))

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { athleteArray, unjumble, removeOdds, newAthlete }
