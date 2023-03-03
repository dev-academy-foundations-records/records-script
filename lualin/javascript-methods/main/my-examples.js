// Array.sort()

// Array.sort() method sorts an array alphabetically.
// In this example, an array called 'animalsArray' has total of six animals in unorganised order.
// The 'sortAnimals' function will sort this array into alphabetically ascending order.

const animalsArray = [
  'Tiger',
  'Hippo',
  'Lion',
  'Giraffe',
  'Elephant',
  'Gorilla',
]

function sortAnimals() {
  return animalsArray.sort()
}

// Array.reverse()

// Array.reverse() method sorts an array in descending order.
// In this example, an array called 'animalsArray' has total of six animals in unorganised order.
// The 'sortAnimalsInDescendingOrder' function will sort this array into alphabetically descending order.

function sortAnimalsInDescendingOrder() {
  return animalsArray.reverse()
}

// Calling functions

const alphabeticallySortedAnimals = sortAnimals()
console.log(alphabeticallySortedAnimals)

const alphabeticallySortedAnimalsDescend = sortAnimalsInDescendingOrder()
console.log(alphabeticallySortedAnimalsDescend)
