// Write your two examples here

// Object.values()
// It is a way for the system to give the property values of a given string. 
// For example:

  let obj = {
    A: 'kitty cat',
    B: 42,
    C: true
  }

  console.log(Object.values(obj))
  // This will return the output ['kitty cat', 42, true]

// .split()
//  This works by splitting a string into an array of substrings and returns the array.
// For example:

  const text = "Kitty cat"

  console.log text.split("")
  // This will return the output ['K', 'i', 't','t', 'y', ' ','c', 'a', 't']
  console.log text.split(" ")
  // This will return the output [ 'Kitty', 'cat' ]
  console.log text.split(" ", 1)
  // This will return the output [ 'Kitty' ]

// .map()
// It is a type of object that can hold key-value paids, and remembers the original insertion order.
// For example: 

  const user = new Map()
  user.set('John', {phone: '12345', address: "321 Parkview Drive"})
  
  user.get('John')
  //This will return { phone: '12345', address: '321 Parkview Drive' }

// .find()
// This works by returning the first element in the array that satisfies the provided testing function.
// For example:

  const testArray = [42, 64, 235, 3, 123]
  const found = testArray.find(element => element > 50)
  console.log(found) 
  // This will return 64

// .replace()
// This works by replacing a value in a string with something else
// For example:

  const testLine = "I have a black cat called Mr. Black"
  console.log(testLine.replace ("black", "green"))
  // This will return I have a green cat called Mr. Black
  console.log(testLine.replace (/black/gi, "green"))
  // This will return I have a green cat called Mr. green

