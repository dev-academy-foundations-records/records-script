// Object.keys()
// Recap: objects have properties, which are key and value pairs. In the example below, key is title, and value is 'Harry Potter and the Prisoner of Azkaban'.
// The Object.keys() method returns an array listing the object's keys in order.
// Example: getBookKeys(bookData) should return ['title','author','isbn','binding']

const bookData = {
  title: 'Harry Potter and the Prisoner of Azkaban',
  author: 'J K Rowling',
  isbn: 9780545582933,
  binding: 'Paperback',
}

function getBookKeys(book) {
  return Object.keys(book)
}

// Object.entries()
// This method returns an array listing the object's key and value pairs.
// Example: getFilmInfo(filmData) should return [['title', 'Jurassic Park'], ['director', 'Steven Spielberg'], ['yearReleased', 1993], ['genre', 'Dinosaurs']]

const filmData = {
  title: 'Jurassic Park',
  director: 'Steven Spielberg',
  yearReleased: 1993,
  genre: 'Dinosaurs',
}

function getFilmInfo(obj) {
  return Object.entries(obj)
}

// ------------ Calling the functions -----------

const getBookKeysResults = getBookKeys(bookData)
console.log('getBookKeysResults: ', getBookKeysResults)

const getFilmInfoResults = getFilmInfo(filmData)
console.log('getFilmInfoResults: ', getFilmInfoResults)
