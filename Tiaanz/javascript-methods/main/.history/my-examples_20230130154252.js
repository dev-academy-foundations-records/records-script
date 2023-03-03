// Write your two examples here
// Object.values() 
// Recap: objects have properties, which are key and value pairs. In the example below, key is name, and value is ''. 
// The Object.keys() method returns an array listing the object's keys in order.  
// Example: getBookKeys(bookData) should return ['title','author','isbn','binding']

const student = {
    name: 'Lily',
    age: 18,
    gender: 'female',
    address:'65 rainbow road'
  }
  
  function getBookKeys (obj) {
      return Object.keys(obj)
  }