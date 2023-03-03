// Write your two examples here

// String.replace()

//We can use .replace to search a string for a value or regular expression. It returns a new string with the specified value replaced but does not replace the original string.

// the syntax is: `string.replace(searchValue, newValue)`

// we can use const here as the return from .replace will not override the original string, it will return a new string.
const currentFaveCat = 'my current favourite cat is Floki'
console.log(currentFaveCat)

let newFaveCat = currentFaveCat.replace('Floki', 'Sharky')
console.log(newFaveCat)

//String.replaceAll()

//Similarly we can use .replaceAll() method to replace all instances of a value in a string rather than the one value specified.

// the syntax is the same: `string.replaceAll(searchValue, newValue)`

const sentence = 'its rainy outside, I hope it doesnt stay rainy all week'
console.log(sentence)

let newSentence = sentence.replaceAll('rainy', 'very rainy')
console.log(newSentence)

// Object.create()

// This method creates a new object by using an existing object as a template.

const cat = {
  name: 'string',
  age: 0,
  color: 'string',
  likes: 'string',
  dislikes: 'string',
}

const newCat = Object.create(cat)

newCat.name = 'tiggy'
newCat.age = 5
newCat.likes = 'bullying the neighbours'
newCat.dislikes = 'other cats'

console.log(newCat)
