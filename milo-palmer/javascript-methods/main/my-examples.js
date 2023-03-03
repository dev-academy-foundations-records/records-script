// Write your two examples here
// typeof
// the typeof method is used before a variable to return the data type that is is below is and array with a string, number, boolean, obj if we loop through the array and log to the console the type of id will return the data type

const arrayDataTypes = ['Word', 10, false, { name: 'Milo' }]

const logTypeOf = () => {
  for (let i = 0; i < arrayDataTypes.length; i++) {
    console.log(typeof arrayDataTypes[i])
  }
}

logTypeOf()

//.map()
// creates a new array and calls a function which runs for every array element. .map() does not change the original array.
// Let's say we have an array of numbers 1 - 10 and want to have another array from 100 - 1000 instead of typing another array "Boring" let do it with code

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const oneHundredToOneThousand = oneToTen.map(
  (multiplyBy100 = (num) => num * 100)
)

console.log(oneHundredToOneThousand)

// We could even do the typeof method with the .map() this way which works slightly differnent but returns a similar result

const arrayOfDataTypes = arrayDataTypes.map(
  (returnTypeOf = (item) => typeof item)
)

console.log(arrayOfDataTypes)

for (let types of arrayOfDataTypes) {
  console.log(types)
}

// .shift()
// Similar to .pop() .shift() will remove and item from and array but unlike .pop() which removes the last item .shift() will remove the first
// Lets look at the array below if we we're to use the .pop() method on this array it would remove "Brazil" from the array but if we use .shift() it will remove "New Zealand" as it is at the array[0] position

const countries = ['New Zealand', 'Australia', 'Canada', 'USA', 'Brazil']

countries.shift()

console.log(countries)

// .unshift()
// Similar to .push() .unshift() will add and item to the array but unlike .push() which adds after the last item .unshift() will add at the 0 index position
// Lets look at the array below if we we're to use the .push("France") method on this array it would add "France" to the array at the end but if we use .unshift("France") it will add "France" at the array[0] position

//Counries is now ['Australia', 'Canada', 'USA', 'Brazil']

countries.unshift('France')

console.log(countries)
