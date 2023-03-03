// JavaScript Olympics

let athleteArray = [];

let santa = {
  name: "Santa",
  age: "1748",
  sport: "delivery",
  quote: "i am not paid enough for this",
};

///////////////////////
// Event 0 - Warm Up //
///////////////////////

// 0.1 Add santa to the athlete array
athleteArray.push(santa);

// 0.2 Create your own athlete and add it to the athlete array
let Tian = {
  name: "Tian",
  age: "18",
  sport: "running",
  quote: "keep running and do not look back",
};
athleteArray.push(Tian);

///////////////////////
// Event 1 - Bulk Up //
///////////////////////

// 1.1 Use a for loop to add a property called win to every element in athleteArray.
// win should be a function expression with no parameters that console logs: "{name} won the {sport} event!"
athleteArray.forEach(
  (athlete) =>
    (athlete["win"] = () => {
      console.log(`${athlete.name} won the ${athlete.sport} event!`);
    })
);

///////////////////////////
// 2 - Jumble your words //
///////////////////////////

// 2.1 Complete the unjumble function, which accepts a string as an argument and reverses it, then returns the reversed string.
// Use the built-in JavaScript methods for strings and arrays to accomplish this.
// See the MDN String and Array documentation for all the available methods.

function unjumble(s) {
  const array = s.split("");
  const reversedArr = array.reverse();
  const newString = reversedArr.join("");
  return newString;
}

/////////////////////////
// Event 3 -  Odds Out //
/////////////////////////

// 3.1 Create a function called removeOdds that accepts an array of numbers. Return an array with only the even numbers.
// You can do this manually or use built-in JavaScript Array Methods.

function removeOdds(arr) {
  const newArr = arr.filter((item) => item % 2 === 0);
  return newArr;
}

//////////////////////////////////
// Event 4 - We built this city //
//////////////////////////////////

// 4.1 Create a function called newAthlete that takes a name, age, sport, and quote and creates a new athlete object from it. Don't forget to include a win attribute.

function newAthlete(name, age, sport, quote) {

  
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { athleteArray, unjumble, removeOdds, newAthlete };
