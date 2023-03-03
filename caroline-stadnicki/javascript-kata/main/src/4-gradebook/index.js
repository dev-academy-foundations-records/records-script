// leave this code as-is please
const students = ['Joseph', 'Susan', 'Wiremu', 'Elizabeth']

const scores = [
  //Joseph's score
  [80, 70, 70, 100],
  // Susan's score
  [85, 80, 90, 90],
  // Wiremu's score
  [75, 70, 80, 75],
  //Elizabeth's score
  [100, 90, 95, 85],
]
// write your code below this line---------------------------------


// 1. Assign the gradebook variable with the value of an empty object.
let gradebook ={}


// 2. Add each student (from the students array) as a property to the gradebook object. 
// The key should equal the student’s name and the value should equal a new empty object.

// Each element in the students array needs to be added in the gradebook object
// it needs to be a property like {studentName : {emptyObject}} 

  for ( let i = 0 ; i < students.length ; i++) {   
    gradebook[students[i]] = {}
  
   console.log(gradebook)
  }

// 3. Add a new property with a key of testScores to each student property in gradebook. 
// The value of this property should be equal to the student’s scores in the scores array.

// Follow the logic of adding a property to an object, and add a new property inside the 
// student's name property, with their scores
for ( let i = 0 ; i < students.length ; i++) {   
  gradebook[students[i]].testScores = scores[i]

 console.log(gradebook)
}


// 4. Complete the addScore function that has two parameters: studentName, and score.
// addScore should add the score which is passed to it to the given student’s testScores array.
// For example:
// addScore("Susan", 80)  would push the score 80 into the value of gradebook.Susan.testScores

// Compare the studentName with the names property inside gradebook
// If equal, push the score to the testScore object(array).
function addScore(studentName, score) {

    if (studentName == [studentName]) {
      gradebook[studentName].testScores.push(score)

      console.log(gradebook)
    }
  
} 


// 5. Complete the average function that returns the average of a given array of numbers.

// To teh average amongst a bunch of numbers, we add all the numbers and divide by the number of numbers we added.
function average(arr) {
  let total = 0
    for (let i = 0 ; i < arr.length ; i++)
      total += arr[i]
        return total / arr.length

}


// 6. Complete the getAverage function that takes a name parameter and returns the average of that student’s testScores.
// You can call the average function within this function.

// create a variable for the average results
// call the average function for each student testScores
function getAverage(studentName) {
  let averageScore = 0
  if (studentName == [studentName]){
    averageScore = average(gradebook[studentName].testScores);
    return averageScore; 
  }
}


// 7. STRETCH MATERIAL
// If you wish to attempt this stretch material, don't forget to remove the "skip" part of the last test in the index.test.js file in this folder
// Complete the enterScores function, which takes the following 3 parameters: 
// - gradebook (an empty object)
// - students & scores (arrays similar to the ones from the top of this file)
// use those parameters to construct a new gradebook from scratch
function enterScores(gradebook, students, scores) {

}







// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = {
  gradebook,
  average,
  getAverage,
  addScore,
  enterScores,
  scores,
}
