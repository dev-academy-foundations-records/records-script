// Write your two examples here

//.split() method:

// The split() method splits a string into an array of substrings.
//The split() method returns the new array. The split() method does not change the original string. 
//If (" ") is used as separator, the string is split between words.
//here is an example:

const sentence = "This is an example";

const words = sentence.split(" ");

console.log(words);

// output is: ['This', 'is', 'an', example']

//---------

// .Math.min()
// .Math.max()

//Math. min() is used to find the minimum of n elements, and Math. max() to find the maximum of n elements.
//here is an example:

const numbers = [5, 10, 12, 85, 20];
//finding the minimun number in the array
// The ... operator is used to spread the values of the numbers array 
//into separate arguments for Math.min() and Math.max(). 
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log('Min:', min);
//output: Min: 5
console.log('Max:', max);
//output: Max: 85

//---------

// .toUpperCase()

// This method of the string object is used to to convert a text to uppercase.
//here is an example:
const text = "hello, world!";
const upperCase = text.toUpperCase();

console.log(upperCase); 

// out put is:  HELLO WORLD!

//----------

//.map()

// The map() method creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements. map() does not change the original array.
//here is an example:

const numbers = [1, 2, 3, 4, 5];

// multiply each number in the array by 2
const doubledNumbers = numbers.map(num =>num * 2);

console.log(doubledNumbers);

// out put: [2, 4, 6, 8, 10]




