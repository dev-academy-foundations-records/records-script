// Write your two examples here
// Object.values() 
// Recap: objects have properties, which are key and value pairs. In the example below, value is title, and value is 'Harry Potter and the Prisoner of Azkaban'. 
// The Object.keys() method returns an array listing the object's keys in order.  
// Example: getBookKeys(bookData) should return ['title','author','isbn','binding']

const student = {
    name:'Lily'
  }
  
  function getBookKeys (obj) {
      return Object.keys(obj)
  }