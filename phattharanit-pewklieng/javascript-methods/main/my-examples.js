// Write your two examples here

// (.filter) Medthod will return value and check if it's True Or Fault then send to new array
// Check who pass the Exam. (Exam result) 

let testResult  = [
  {
    name: 'Peter',
    score: 83,
  },
  {
    name: 'Lee',
    score: 45,
  },
  {
    name: 'Sun',
    score: 51,
  }
];

let passScores = testResult.filter(result => result.score >= 50 );
console.log(passScores);




//(.Map) Check value to and return to create new array from calling a function for every array element.
// check age for entry to the club 

let ages = [17 , 19, 33, 45, 26,15];
let checkAge = ages.map((age) => {
    if (age >= 20) {
      return 'You can entry';
    }
    return "Sorry, you can't entry";
});
console.log(checkAge);