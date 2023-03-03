// Write your two examples here

//.split()
//If you need to split up a string into an array of substrings, then you can use the JavaScript split() method.

str.split(optional - separator, optional - limit)

//The optional separator is a type of pattern that tells the computer where each split should happen.
//The optional limit parameter is a positive number that tells the computer how many substrings should be in the returned array value.

let str = 'Hello Devs!'

//No separator
console.log(str.split())
//logs ["Hello Devs!"]

//Separator is the empty strings
console.log(str.split(''))
//logs ["H", "e", "l", "l", "o", " ", "D", "e", "v", "s", "!" ]

//Seperator is empty space
console.log(str.split(' '))
//logs ["Hello", "Devs!"]

//Empty space seperator with limit
console.log(str.split('', 5))
//logs ["H", "e", "l", "l", "o"]

//Math.max()
//the Math.max method returns the number with the higest value withen a parameter or for infinity if there are no parameters

console.log(Math.max(1, 5, 2, 8))
//logs 8 as it is the highest value

let arr1 = [74, 88, 101]
console.log(Math.max(arr1))
//logs 101 as it is the higest value

//Math.min()
//the Math.min method is very similar to the Math.max method above except it returns the lowest value number withen a parameter.

//logs 1 as it is the lowest value

let arr2 = [-74, -88, -101]
console.log(Math.min(arr2))
//logs -101 as it is the lowest value

//Note: for both the Math.min, and Math.max use a capital "M" for Math
