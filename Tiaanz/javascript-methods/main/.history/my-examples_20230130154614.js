// Write your two examples here

// Object.values() 
// Recap: objects have properties, which are key and value pairs. In the example below, key is name, and value is 'Lily'. 
// The Object.values() method returns an array listing the object's values in order.  
// Example: getStudentValues(student) should return ['Lily', 18, 'female','65 rainbow road']

const student = {
    name: 'Lily',
    age: 18,
    gender: 'female',
    address:'65 rainbow road'
  }
  
  function getStudentValues (obj) {
      return Object.values(obj)
  }



  // ------------ Calling the functions -----------
  const getStudentValuesResults = getStudentValues(student)
console.log('getStudentValuesResults: ', getStudentValuesResults)