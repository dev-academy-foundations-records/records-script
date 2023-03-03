// Write your two examples here
// Object.values() 
// Recap: objects have val, which are key and value pairs. In the example below, key is title, and value is 'Harry Potter and the Prisoner of Azkaban'. 
// The Object.keys() method returns an array listing the object's keys in order.  
// Example: getBookKeys(bookData) should return ['title','author','isbn','binding']

const bookData = {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J K Rowling',
    isbn: 9780545582933,
    binding: 'Paperback'
  }
  
  function getBookKeys (obj) {
      return Object.keys(obj)
  }