// Write your two examples here

// Object.values()
// Recap: objects have properties, which are key and value pairs. In the example below, key is name, and value is 'Lily'.
// The Object.values() method returns an array listing the object's values in order.
// Example: getStudentValues(student) should return ['Lily', 18, 'female','65 rainbow road']

const student = {
  name: "Lily",
  age: 18,
  gender: "female",
  address: "65 rainbow road",
};

function getStudentValues(obj) {
  return Object.values(obj);
}

// .find()
//The .find() method returns the value of the first element that passes a test.
//Example:getAgeOverEighteen(arr) should return 20

const ages = [3, 10, 18, 20];

function getAgeOverEighteen(arr) {
   return arr.find(age=>age>18)
}



// ------------ Calling the functions -----------
const getStudentValuesResults = getStudentValues(student);
console.log("getStudentValuesResults: ", getStudentValuesResults);

Const getAgeOverEighteenResults = getAgeOverEighteen(ages);

