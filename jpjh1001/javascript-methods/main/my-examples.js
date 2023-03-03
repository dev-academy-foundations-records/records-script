// Write your two examples here
// .split() method

// .split() method is an array-method which allows us to split a string into an array of substrings.
// .split() method contains a variety of ways to split the string.
// In the first example, I would like to demonstrate splitting the words in a string

let splitWord = 'I will be splitting these words into strings!'

let example1 = splitWord.split(' ')

console.log(example1)

//another way that I could split the strings is to split them into individual characters. For example

let example2 = splitWord.split('')

console.log(example2)

//I could also limit the number of strings I want in return. The example below will only console log the first 4 words in the string

let example3 = splitWord.split(' ', 4)

console.log(example3)

//In this example, I'd like to demonstrate the .repeat() method. The repeat() method returns a new string and it simply duplicates the string to the assigned number.
// For example, If I want to repeat the string "I like sales!"  5 times i'd write

let sales = 'I like sales!'

let outcome = sales.repeat(5)

console.log(outcome)
