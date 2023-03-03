/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ ;(() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './src/challenge/1-variables.js':
      /*!**************************************!*\
  !*** ./src/challenge/1-variables.js ***!
  \**************************************/
      /***/ (module) => {
        eval(
          "// ------------ VARIABLES -----------\n\n// 1. Declare a variable named `welcome` and assign it the value 'Hello world'.\n\n\n// 2. The `name` variable and it's value are declared below. Reassign the variable so it then has the value of your name. \nlet name = 'Old Name' // hint: don't change this line! Reassign on the next line.\n\n\n// 3. After the following code has run, what value does `nameOne` have?\nlet nameOne = 'Marama'\nlet nameTwo = 'Wiremu'\nlet nameThree = nameTwo\nnameTwo = nameOne\nnameOne = nameThree\n// Uncomment the following line and assign your answer to the variable `value`.\n// const value = \n\n\n\n// ------------ CHECKS -----------\n// The below lines of code lets us test it to see how you're doing,\n// don't worry about this yet you'll learn it in bootcamp.\n\n// Don't change any code below this comment!\n\nlet toExport = { name }\nif (typeof value !== 'undefined') toExport.value = value\nif (typeof welcome !== 'undefined') toExport.welcome = welcome\nmodule.exports = toExport\n\n\n//# sourceURL=webpack://foundations/./src/challenge/1-variables.js?"
        )

        /***/
      },

    /***/ './src/challenge/2-functions.js':
      /*!**************************************!*\
  !*** ./src/challenge/2-functions.js ***!
  \**************************************/
      /***/ (module) => {
        eval(
          "// ------------ FUNCTIONS -----------\n\n// 1. Complete the `hello` function by returning the string 'Hello world!'.\n// hint: do this inside the function body, i.e. inside of the curly brackets.\nfunction hello() {\n  \n}\n\n// 2. + 3. This is a combined question: Define two functions.\n// The first function should be named `sayHi` and return the string 'Hello!'.\n\n\n\n// The second function should be named `sayBye` and return the string 'Goodbye!'.\n\n\n\n// 4. Define a function named `greet` that returns the string 'Hey there!'.\n// Then declare a variable named `salutation` and have it call the `greet` function.\n// hint: call a function by writing the function name followed by parentheses, e.g. `hello()`   // expected output: 'Hello world!'\n\n\n\n\n// 5. What value does the variable named `helloResult` have?\nfunction welcome() {\n  return 'Welcome!'\n}\n\nlet welcomeResult = welcome()\n// Uncomment the line below and assign your answer to the variable `helloResultIs`.\n// const welcomeResultIs = \n\n\n// ---------- FUNCTIONS WITH PARAMETERS ---------\n\n// 6. Define a function named `shout` which has a parameter and returns the parameter.\n// i.e. The function will return whatever is passed into the parentheses.\n// for example: Calling `shout('Echo')` would return the string 'Echo'. \n\n\n\n// 7. After the following code has run, what value does `replyResult` have?\nfunction reply(phrase) {\n  return phrase\n}\n\nlet replyResult = reply('Good morning')\n// Uncomment the line below and assign your answer to the variable named `replyResultIs`.\n// const replyResultIs =\n\n\n// 8. Define a function named 'helloFriend` to greet a person by name, using a parameter.\n// For example: Calling helloFriend('Emily') should return the string 'Hello Emily!'.\n// Hint: try using the `+` operator to join strings together.\n\n\n\n// 9. After the following code has run, what value does `goodMorningResult` have?\nfunction goodMorning(name) {\n  return 'Good morning ' + name + '!'\n}\n\nlet goodMorningResult = goodMorning('Jacky')\n// Uncomment and assign your answer to the variable named `goodMorningResultIs`.\n// const goodMorningResultIs =\n\n\n// 10. After the following code has run, what value does `hiResult` have?\nfunction hi(name) {\n  return 'Hi ' + name + '!'\n}\n\nlet hi1 = hi('Andy')\nlet hi2 = hi('Hamish')\n\nlet hiResult = hi1 + ' ' + hi2\n// Uncomment and assign your answer to the variable named `hiResultIs`.\n// const hiResultIs =\n\n\n// 11. Define a function named `warn` that takes a parameter (it will be a string). \n// it should console.log() the parameter duplicated, with a space between each string\n// then return that same value \n// for example: calling warn('alarm') should console.log() the value 'alarm alarm', then return the value 'alarm alarm'.\n\n\n\n\n// ------------ CHECKS -----------\n// The below lines of code lets us test it to see how you're doing,\n// don't worry about this yet you'll learn it in bootcamp.\n\n// Don't change any code below this comment!\nconst toExport = {\n  hello,\n  reply,\n  goodMorning,\n}\nif (typeof sayHi !== 'undefined') toExport.sayHi = sayHi\nif (typeof sayBye !== 'undefined') toExport.sayBye = sayBye\nif (typeof greet !== 'undefined') toExport.greet = greet\nif (typeof salutation !== 'undefined') toExport.salutation = salutation\nif (typeof shout !== 'undefined') toExport.shout = shout\nif (typeof helloFriend !== 'undefined') toExport.helloFriend = helloFriend\nif (typeof welcomeResultIs !== 'undefined') toExport.welcomeResultIs = welcomeResultIs\nif (typeof replyResultIs !== 'undefined') toExport.replyResultIs = replyResultIs\nif (typeof goodMorningResultIs !== 'undefined') toExport.goodMorningResultIs = goodMorningResultIs\nif (typeof hiResultIs !== 'undefined') toExport.hiResultIs = hiResultIs\nif (typeof warn !== 'undefined') toExport.warn = warn\nmodule.exports = toExport\n\n\n//# sourceURL=webpack://foundations/./src/challenge/2-functions.js?"
        )

        /***/
      },

    /***/ './src/challenge/3-operators.js':
      /*!**************************************!*\
  !*** ./src/challenge/3-operators.js ***!
  \**************************************/
      /***/ (module) => {
        eval(
          "// ------------ ARITHMETIC OPERATORS -----------\n\n// 1. Plus\n// Complete the function named `add` that takes two parameters, adds the two together and returns the result.\n// For example: add(2, 1) will return 3.\n// For example: add(8, 2) will return 10.\n// Hint: use the addition operator. \n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition\nfunction add(num1, num2) {\n  return num1 + num2\n}\n\n// 2. Minus\n// Complete the function named `minus` that takes two parameters, minuses the second parameter from the first and returns the result.\n// For example: minus(2, 1) will return 1, \n// For example: minus(8, 2) will return 6.\n// Hint: use the subtraction operator. \n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction\nfunction minus(num1, num2) {\n\n}\n\n// 3. Multiply \n// Complete the function named `multiply` that takes two parameters, muliplies the two parameters and returns the result.\n// For example: multiply(3, 2) will return 6.\n// For example: multiply(9, 2) will return 18.\n// Hint: use the multiplication operator. \n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication\nfunction multiply(num1, num2) {\n\n}\n\n// 4. Divide\n// Complete the function named `divide` that takes two parameters, divides the two parameters and returns the result.\n// For example: divide(6, 2) will return 3.\n// For example: divide(15, 3) will return 5.\n// Hint: use the division operator. \n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division\nfunction divide(num1, num2) {\n\n}\n\n// 5. Increment\n// Complete the function named `increment` that takes a parameter, increases the value of the parameter and returns the result.\n// For example: increment(22) will return 23. \n// For example: increment(34) will return 35.\n// Hint: use the increment operator, research the difference between num++ and ++num. \n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment\nfunction increment(num) {\n\n}\n\n// 6. Decrement\n// Complete the function named `decrement` that takes a variable, decreases the value of the variable and returns the result.\n// For example: decrement(6) will return 5. \n// For example: decrement(15) will return 14.\n// Hint: use the decrement operator, research the difference between num-- and --num.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement\nfunction decrement(num) {\n\n}\n\n// ------------ LOGICAL OPERATORS -----------\n\n\n// 7. AND\n// Complete the function named `and` that takes two booleans as parameters.\n// Return the first and second parameter.\n// For example: and(true, true) will return true.\n// For example: and(true, false) will return false.\n// Hint: use the AND operator.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND\nfunction and(bool1, bool2) {\n \n}\n\n// 8. OR\n// Complete the function named `or` that takes two booleans as parameters.\n// If either of the two parameters are true, return true.\n// If neither are true it should return false.\n// For example: or(true, false) will return true.\n// For example: or(false false) will return false.\n// Hint: use the OR operator.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR\nfunction or(bool1, bool2) {\n\n}\n\n// 9. NOT\n// Complete the function named `not` that takes a boolean as a parameter.\n// Return the opposite boolean to whatever is passed in.\n// For example: not(false) will return true.\n// For example: not(true) will return false.\n// Hint: use the NOT operator.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT\nfunction not(bool) {\n\n}\n\n// ------------ COMPARISON OPERATORS -----------\n\n// 10. Greater than\n// Complete the function named `isGreaterThan` that takes two parameters and checks if the first parameter is greater than the second.\n// For example: isGreaterThan(12, 10) should return true.\n// For example: isGreaterThan(12, 24) should return false.\n// Hint: use the greater than operator.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than\nfunction isGreaterThan(num1, num2) {\n\n}\n\n// 11. Less than\n// Complete the function named `isLessThan` that takes two parameters and checks if the first parameter is less than the second.\n// For example: isLessThan(63, 102) should return true.\n// For example: isLessThan(63, 60) should return false.\n// Hint: use the less than operator.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than\nfunction isLessThan(num1, num2) {\n\n}\n\n// 12. Greater than or equal to\n// Complete the function named `isGreaterOrEqual` that takes two parameters and checks if the first parameter is greater than or equal to the second.\n// For example: isGreaterOrEqual(12, 12) should return true, isGreaterOrEqual(14, 12) should return true.\n// For example: isGreaterOrEqual(12, 24) should return false.\n// Hint: use the greater than or equal to\toperator.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal\nfunction isGreaterOrEqual(num1, num2) {\n\n}\n\n// 13. Less than or equal to\n// Complete the function named `isLessOrEqual` that takes two parameters and checks if the first parameter is less than or equal to the second.\n// For example: isLessOrEqual(10, 10) should return true, isLessOrEqual(8, 10) should return true.\n// For example: isLessOrEqual(123, 24) should return false.\n// Hint: use the less than or equal to operator.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal\nfunction isLessOrEqual(num1, num2) {\n\n}\n\n\n// 14. Equal\n// Complete the function named `isSimilar` that takes two parameters and checks the two values for equality.\n// For example: isSimilar(10, '10') should return true.\n// For example: isSimilar(10, '14') should return false.\n// Hint: use the equal operator and note the difference between equal and strict equal.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality\nfunction isSimilar(num, stringNum) {\n\n}\n\n// 15. Strict Equal (has equal value and same data type)\n// Complete the function named `isSameTypeAndVal` that takes two parameters and checks the two values for strict equality.\n// For example: isSameTypeAndVal('1', 1) should return false. \n// For example: isSameTypeAndVal('password', 'passW0rd') should return false.\n// Hint: use the strict equal\toperator, please note the difference between this operator and the equal operator.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality\nfunction isSameTypeAndVal(stringOrNum1, stringOrNum2) {\n\n}\n\n// 16. Not equal\n// Complete the function named `isNotSimilar` that takes two parameters and checks the two values do not equal the same value.\n// For example: isNotSimilar('1', 1) should return false. \n// For example: isNotSimilar(1, '2') should return true.\n// Hint: use not equal operator and note the difference between not equal and strict not equal.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality\nfunction isNotSimilar(stringOrNum1, stringOrNum2) {\n\n}\n\n// 17. Strict not equal\n// Complete the function named `isNotSameTypeOrVal` that takes two parameters and checks the two values do NOT equal the same value or same data type.\n// For example: isNotSameTypeOrVal(234, '123') should return true - because (it is true) they ARE NOT same value or same data type.\n// For example: isNotSameTypeOrVal(123, 456) should return true - because (it is true) they ARE NOT same value.\n// For example: isNotSameTypeOrVal(12, 12) should return false - because they ARE same data type AND the same value.\n// Hint: use the strict not equal operator, please note the difference between this operator and the not equal operator.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality\nfunction isNotSameTypeOrVal(one, two) {\n\n}\n\n// ------------ CHECKS -----------\n// The below lines of code lets us test it to see how you're doing,\n// don't worry about this yet you'll learn it in bootcamp. \n\n// Don't change any code below this comment!\nmodule.exports = {\n  add,\n  minus,\n  multiply,\n  divide,\n  increment,\n  decrement,\n  and,\n  or,\n  not,\n  isGreaterThan,\n  isLessThan,\n  isGreaterOrEqual,\n  isLessOrEqual,\n  isSimilar,\n  isSameTypeAndVal,\n  isNotSimilar,\n  isNotSameTypeOrVal\n}\n\n\n\n//# sourceURL=webpack://foundations/./src/challenge/3-operators.js?"
        )

        /***/
      },

    /***/ './src/challenge/4-objects.js':
      /*!************************************!*\
  !*** ./src/challenge/4-objects.js ***!
  \************************************/
      /***/ (module) => {
        eval(
          "// ------------ OBJECTS -----------\n\n// 1. Define an object named `contact`. This object should contain:\n// The key `name` and the value 'Leon Kim'.\n// The key `address` and the value '123 Main St'.\n// The key `phone` and the value '021 555 555'.\n\n\n\n// 2. Declare a variable named 'customer' and assign it the value of the `name` key from the `receipt` object.\n// n.b. make sure you access the object's property, do not type the string 'Marta'.\nconst receipt = {\n  price: 89.99,\n  store: 'Ariels Diner',\n  name: 'Marta'\n}\n// Write your code below this comment\nlet customer = receipt.name\n\n\n\n// 3. Use dot notation to access the `name` property in the `person` object and reassign the value to be your own name.\nconst person = {\n  name: 'Navita',\n  age: '28',\n  eyeColor: 'brown'\n}\n// Write your code below this comment\n\n\n\n\n// ------------ CHECKS -----------\n// The below lines of code lets us test it to see how you're doing,\n// don't worry about this yet you'll learn it in bootcamp.\n\n// Don't change any code below this comment!\nconst toExport = {\n  person,\n  receipt\n}\nif (typeof contact !== 'undefined') toExport.contact = contact\nif (typeof customer !== 'undefined') toExport.customer = customer\nmodule.exports = toExport\n\n\n//# sourceURL=webpack://foundations/./src/challenge/4-objects.js?"
        )

        /***/
      },

    /***/ './src/challenge/5-arrays.js':
      /*!***********************************!*\
  !*** ./src/challenge/5-arrays.js ***!
  \***********************************/
      /***/ (module) => {
        eval(
          "// ------------ ARRAYS -----------\n\n// 1. Define an array named `shoppingList`. This array should contain:\n// Three strings that are the following fruit names: 'Kiwifruit', 'Mangosteen', 'Longan'.\n\n\n// 2. Declare a variable named `treeResult` and assign it the value of the first element from the `trees` array.\n// n.b. the code should work even if you were to change the array elements. `treeResult` should always retrieve the first element from `trees`.\nconst trees = ['Kahikatea', 'Cherry Blossom', 'Paogo']\n// Write your code below this comment\n\n\n// 3. Below is an array named `favouriteBrowsers`. Write some code that will reassign the value of the first element with the string 'Brave'.\nconst favouriteBrowsers = ['Chrome', 'Firefox']\n// Write your code below this comment\n\n\n// 4. Declare a variable named `arrLength` and assign it the value of the length of the `names` array.\n// n.b the code should work even if you were to change the total number of array elements.\nconst names = ['Yuko', 'Amanda', 'Kahu']\n// Write your code below this comment\n\n\n// ------------ CHECKS -----------\n// The below lines of code lets us test it to see how you're doing,\n// don't worry about this yet you'll learn it in bootcamp.\n\n// Don't change any code below this comment!\nconst toExport = {\n  favouriteBrowsers,\n  names\n}\nif (typeof shoppingList !== 'undefined') toExport.shoppingList = shoppingList\nif (typeof treeResult !== 'undefined') toExport.treeResult = treeResult\nif (typeof arrLength !== 'undefined') toExport.arrLength = arrLength\nmodule.exports = toExport\n\n\n//# sourceURL=webpack://foundations/./src/challenge/5-arrays.js?"
        )

        /***/
      },

    /***/ './src/challenge/6-conditionals.js':
      /*!*****************************************!*\
  !*** ./src/challenge/6-conditionals.js ***!
  \*****************************************/
      /***/ (module) => {
        eval(
          "// ------------ CONDITIONALS -----------\n\n// 1. if statement\n// Write a function named `isMatch` that uses an `if statement` to check two values for \"strict equality\". \n// Hint: Look up the term \"js strict equality\" if you are not sure.\n// If the two values match, the function should return the string 'Match'.\n// For example: When isMatch(7, 7) is called it should return the string 'Match'.\n\n\n\n// 2. if, else statement\n// Write a function named `isAMatch` that uses an `if else statement` to check two values for strict equality. \n// If the two values match, the function should return the string 'Match'.\n// If they are not a match, the function should return the string 'Not a Match'.\n// For example: When isAMatch(21, 21) is called it should return the string 'Match', and isAMatch(7, 11) should return the string 'Not a Match'.\n\n\n\n// 3. if, else if, else statement\n// Write a function named `greetings` that takes a string.\n// If the string strictly equals 'Te Reo' the function should return the string 'Kia ora'. \n// If the string strictly equals 'English' the function should return the string 'Hello'. \n// Otherwise return a '👋'\n// Hint: use an `if, else if, else statement`. Look up \"js if, else if, else statement\" if you are not sure. \n// For example: greetings('Te Reo') should return 'Kia ora' and greetings('Dutch') should return '👋'.\n\n\n\n// 4. switch statement\n// Write a function named `chooseGreetingLanguage` that takes a string.\n// The function should use a `switch statement` to check if the string matches a particular case. \n// If the string matches a case it should return the matching greeting value, otherwise return the default value.\n// Use a switch statement (do not use `if / else` etc.) <go to='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch'>MDN switch statement</go>\n\n// For example: \n// chooseGreetingLanguage('Te Reo') returns 'Kia ora'\n// chooseGreetingLanguage('English') returns 'Hello'\n// chooseGreetingLanguage('Spanish') returns 'Hola'\n// chooseGreetingLanguage('Mandarin') returns 'Nǐ hǎo'\n// chooseGreetingLanguage('Samoan') returns 'Talofa'\n// Anything else passed in will return '👋'\n\n\n\n// 5. ternary \n// We want to check if a user is registered.\n// Write a function named `checkUserStatus` that checks if the parameter `isRegistered` is true or false.\n// If the user is registered (true), we want them to see the option to 'Log in'.\n// If the user is not registered (false), we want them to see the option to 'Register a new account'.\n// For example: checkUserStatus(true) should return the string 'Log in', checkUserStatus(false) should return the string 'Register a new account'.\n// Use a ternary operator <go to='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator'>MDN ternary operator</go>\n\n\n\n// ------------ CHECKS -----------\n// The below lines of code lets us test it to see how you're doing,\n// don't worry about this yet you'll learn it in Bootcamp. \n\n// Don't change any code below this comment!\nconst toExport = {\n}\nif (typeof isMatch !== 'undefined') toExport.isMatch = isMatch\nif (typeof isAMatch !== 'undefined') toExport.isAMatch = isAMatch\nif (typeof greetings !== 'undefined') toExport.greetings = greetings\nif (typeof chooseGreetingLanguage !== 'undefined') toExport.chooseGreetingLanguage = chooseGreetingLanguage\nif (typeof checkUserStatus !== 'undefined') toExport.checkUserStatus = checkUserStatus\nmodule.exports = toExport\n\n\n//# sourceURL=webpack://foundations/./src/challenge/6-conditionals.js?"
        )

        /***/
      },

    /***/ './src/challenge/7-loops.js':
      /*!**********************************!*\
  !*** ./src/challenge/7-loops.js ***!
  \**********************************/
      /***/ (module) => {
        eval(
          "// ------------ LOOPS -----------\n\n// 1. Here are two functions:\nfunction printResult(fruitType) {\n  console.log('fruit: ' + fruitType)\n}\n\nfunction printFruit(fruits) {\n  for (let i = 0; i < fruits.length; i++) {\n    printResult(fruits[i])\n  }\n}\n// If the function 'printFruit' was called with the following array ['apple', 'orange', 'banana', 'pineapple']\n// e.g. printFruit(['apple', 'orange', 'banana', 'pineapple'])\n// How many times would the function 'printResult' be called?\n// Uncomment the following line and assign your answer to the variable `numberPrintResultCalls`.\n\n// const numberPrintResultCalls =\n\n\n// 2. Define a function named `logNames` that takes an array as a parameter. \n// It should loop for the array's length and console.log each name in the array. \n// For example: logNames(['Sally', 'Nikita', 'Arnav', 'Akira']) would console.log each person's name. 4 names in total.\n// For example: logNames(['Arnav', 'Akira']) would console.log each person's name. 2 names in total.\n\n\n\n// 3. Define a function named 'printCountdown' that takes an array as a parameter.\n// It should loop in reverse through the length of the array and console.log each item with an exclamation mark added to the end.\n// For example: printCountdown(['blast off', 'one', 'two', 'three']) would console.log \"three! two! one! blast off!\".\n// Hint #1: Remember that array indexes begin at 0. How would you use array.length to begin your for loop to access the last element in the array? \n// Hint #2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement\n\n\n\n// ------------ STRETCH CHALLENGES ----------- \n// The next two challenges can be a bit tricky, remember to ask for help if you need it.\n\n// 4. Define a function named `countShortNames` that takes an array of strings and returns a count of all the strings with a length less than 5. \n// For example: countShortNames(['Sally', 'John', 'James', 'Alice', 'Sue']) would return a count of 2 for 'John' and 'Sue', as their names are less than 5 characters in length.\n// Instead of a for loop, try using a `for of` loop. \n// Hint #1: for reference see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of\n\n\n\n// 5. Define a function named `everySecondItem` that takes an array of items and returns a new array that only includes every second item.\n// Instead of a for loop, try this using the `forEach` array method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach\n// For example: everySecondItem([1, 'test', 'something', 23, 42, {greeting: 'hi'}]) would return ['test', 23, {greeting: 'hi'}]. \n// Hint #1: The remainder (%) operator might also be useful https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder\n// Hint #2: Array.push() can help add things to a results array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push\n\n\n// ------------ CHECKS -----------\n// The below lines of code lets us test it to see how you're doing,\n// don't worry about this yet you'll learn it in Bootcamp. \n\n// Don't change any code below this comment!\nconst toExport = {\n}\nif (typeof numberPrintResultCalls !== 'undefined') toExport.numberPrintResultCalls = numberPrintResultCalls\nif (typeof logNames !== 'undefined') toExport.logNames = logNames\nif (typeof countShortNames !== 'undefined') toExport.countShortNames = countShortNames\nif (typeof everySecondItem !== 'undefined') toExport.everySecondItem = everySecondItem\nif (typeof printCountdown !== 'undefined') toExport.printCountdown = printCountdown\nmodule.exports = toExport\n\n\n\n//# sourceURL=webpack://foundations/./src/challenge/7-loops.js?"
        )

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        eval(
          "const variableAnswers = __webpack_require__(/*! ./challenge/1-variables */ \"./src/challenge/1-variables.js\")\nconst functionAnswers = __webpack_require__(/*! ./challenge/2-functions */ \"./src/challenge/2-functions.js\")\nconst objectAnswers = __webpack_require__(/*! ./challenge/3-operators */ \"./src/challenge/3-operators.js\")\nconst arrayAnswers = __webpack_require__(/*! ./challenge/4-objects */ \"./src/challenge/4-objects.js\")\nconst loopAnswers = __webpack_require__(/*! ./challenge/7-loops */ \"./src/challenge/7-loops.js\")\nconst conditionalAnswers = __webpack_require__(/*! ./challenge/5-arrays */ \"./src/challenge/5-arrays.js\")\nconst operatorAnswers = __webpack_require__(/*! ./challenge/6-conditionals */ \"./src/challenge/6-conditionals.js\")\n\nconst { formatResultsSection } = __webpack_require__(/*! ./lib */ \"./src/lib/index.js\")\nconst {\n  resultsForVariables,\n  resultsForFunctions,\n  resultsForObjects,\n  resultsForArrays,\n  resultsForLoops,\n  resultsForConditionals,\n  resultsForOperators\n} = __webpack_require__(/*! ./lib/results */ \"./src/lib/results.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const el = document.getElementById('results')\n  el.innerHTML = buildResults()\n})\n\nfunction buildResults () {\n  const variableResults = resultsForVariables(variableAnswers)\n  const functionResults = resultsForFunctions(functionAnswers)\n  const objectResults = resultsForObjects(objectAnswers)\n  const arrayResults = resultsForArrays(arrayAnswers)\n  const loopResults = resultsForLoops(loopAnswers)\n  const conditionalResults = resultsForConditionals(conditionalAnswers)\n  const operatorResults = resultsForOperators(operatorAnswers)\n\n  let output = '<h1>Javascript Intro Results</h1>'\n  output += formatResultsSection('Variables', variableResults)\n  output += formatResultsSection('Functions', functionResults)\n  output += formatResultsSection('Operators', operatorResults)\n  output += formatResultsSection('Objects', objectResults)\n  output += formatResultsSection('Arrays', arrayResults)\n  output += formatResultsSection('Conditionals', conditionalResults)\n  output += formatResultsSection('Loops', loopResults)\n  return output\n}\n\n\n//# sourceURL=webpack://foundations/./src/index.js?"
        )

        /***/
      },

    /***/ './src/lib/index.js':
      /*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
      /***/ (module) => {
        eval(
          "function buildFunctionResult (fn, inputs, expected, noMatchTip = '') {\n  if (!fn) {\n    return {\n      correct: false,\n      response: undefined,\n      tip: 'function was not defined'\n    }\n  } else if (typeof fn !== 'function') {\n    return {\n      correct: false,\n      response: fn,\n      tip: 'is not a function'\n    }\n  }\n  const matches = fn.toString().match(/function\\s*(\\w*)/)\n  const name = matches ? matches[1] : ''\n\n  let actual\n  let tip\n  try {\n    actual = fn(...inputs)\n  } catch (e) {\n    tip = e\n  }\n  if (actual !== expected) {\n    tip = noMatchTip || `Expected: ${expected}`\n  }\n  return {\n    correct: actual === expected,\n    response: name ? `${name}(${toArgs(inputs)}) returned ${toArg(actual)}` : '',\n    tip\n  }\n}\n\nfunction buildMultipleFunctionResult (fn, calls) {\n  let responses = ''\n  let result\n  for (const params of calls) {\n    const [inputs, returnVal] = params\n    result = buildFunctionResult(fn, inputs, returnVal)\n    responses += result.response + '<br/>'\n    if (!result.correct) return result\n  }\n  result.response = responses\n  return result\n}\n\nfunction formatResultsSection (title, results) {\n  const output = `<div class='results'>\n    <h2>${title}</h2>\n    <ol>\n    ${formatResults(results)}\n    </ol>\n  </div>`\n  return output\n}\n\nfunction formatResults (results) {\n  return results.map(formatResult).join('')\n}\n\nfunction formatResult ({ correct, response, tip }) {\n  if (!tip) tip = ''\n  return `<li class=\"${correct ? 'tick' : 'cross'}\">\n    ${response}\n    </li>\n    ${correct ? '' : tip}\n    `\n}\n\nfunction toArgs (inputs) {\n  return inputs.map(toArg).join(', ')\n}\n\nfunction toArg (input) {\n  if (typeof input === 'string') {\n    return `'${input}'`\n  } else if (typeof input === 'object' && input.length) {\n    return input.map(i => toArg(i)).join(', ')\n  } else {\n    return input\n  }\n}\nmodule.exports = {\n  buildFunctionResult,\n  buildMultipleFunctionResult,\n  formatResultsSection\n}\n\n\n//# sourceURL=webpack://foundations/./src/lib/index.js?"
        )

        /***/
      },

    /***/ './src/lib/results.js':
      /*!****************************!*\
  !*** ./src/lib/results.js ***!
  \****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'const resultsForVariables = __webpack_require__(/*! ./results/variables */ "./src/lib/results/variables.js")\nconst resultsForFunctions = __webpack_require__(/*! ./results/functions */ "./src/lib/results/functions.js")\nconst resultsForObjects = __webpack_require__(/*! ./results/objects */ "./src/lib/results/objects.js")\nconst resultsForArrays = __webpack_require__(/*! ./results/arrays */ "./src/lib/results/arrays.js")\nconst resultsForLoops = __webpack_require__(/*! ./results/loops */ "./src/lib/results/loops.js")\nconst resultsForConditionals = __webpack_require__(/*! ./results/conditionals */ "./src/lib/results/conditionals.js")\nconst resultsForOperators = __webpack_require__(/*! ./results/operators */ "./src/lib/results/operators.js")\n\nmodule.exports = {\n  resultsForVariables,\n  resultsForFunctions,\n  resultsForObjects,\n  resultsForArrays,\n  resultsForLoops,\n  resultsForConditionals,\n  resultsForOperators\n}\n\n\n//# sourceURL=webpack://foundations/./src/lib/results.js?'
        )

        /***/
      },

    /***/ './src/lib/results/arrays.js':
      /*!***********************************!*\
  !*** ./src/lib/results/arrays.js ***!
  \***********************************/
      /***/ (module) => {
        eval(
          "function resultsForArrays ({\n  shoppingList,\n  treeResult,\n  favouriteBrowsers,\n  names,\n  arrLength\n}) {\n  return [\n    {\n      correct: shoppingList !== undefined && shoppingList.includes('Mangosteen') && shoppingList.includes('Kiwifruit') && shoppingList.includes('Longan') && shoppingList.length === 3,\n      response: `shoppingList: ${JSON.stringify(shoppingList, null, 2)}`,\n      tip: shoppingList !== undefined ? 'Nearly, check that all the values are included and exactly match the instructions (the test is case and whitespace sensitive!) <br/>' : ''\n    },\n    {\n      correct: treeResult === 'Kahikatea',\n      response: `treeResult: ${treeResult}`,\n      tip: treeResult !== undefined ? 'Nearly, make sure you are accessing the first element with bracket notation!<br/>' : ''\n    },\n    {\n      correct: favouriteBrowsers !== undefined && favouriteBrowsers[0] === 'Brave' && favouriteBrowsers[0] !== 'Chrome',\n      response: `favouriteBrowsers[0]: ${favouriteBrowsers && favouriteBrowsers[0]}`,\n      tip: favouriteBrowsers && favouriteBrowsers[0] !== 'Chrome' ? 'Nearly, make sure you are accessing the first element with bracket notation and matching the new value (as stated in the instructions) exactly!<br/>' : ''\n    },\n    {\n      correct: names !== undefined && arrLength === names.length && arrLength === 3,\n      response: `arrLength: ${arrLength}`,\n      tip: arrLength !== undefined ? 'Nearly, use the names array and find out the length of that array. It should return a number.<br/>' : ''\n    }\n  ]\n}\n\nmodule.exports = resultsForArrays\n\n\n//# sourceURL=webpack://foundations/./src/lib/results/arrays.js?"
        )

        /***/
      },

    /***/ './src/lib/results/conditionals.js':
      /*!*****************************************!*\
  !*** ./src/lib/results/conditionals.js ***!
  \*****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "const { buildMultipleFunctionResult } = __webpack_require__(/*! ../ */ \"./src/lib/index.js\")\nfunction resultsForConditionals ({\n  isMatch,\n  isAMatch,\n  greetings,\n  chooseGreetingLanguage,\n  checkUserStatus\n}) {\n  return [\n    buildMultipleFunctionResult(isMatch, [\n      [[1, 2], undefined],\n      [[1, '1'], undefined],\n      [[2, 2], 'Match']\n    ]),\n    buildMultipleFunctionResult(isAMatch, [\n      [[1, 2], 'Not a Match'],\n      [[2, 2], 'Match'],\n      [[1, '1'], 'Not a Match']\n    ]),\n    buildMultipleFunctionResult(greetings, [\n      [['Te Reo'], 'Kia ora'],\n      [['English'], 'Hello'],\n      [[], '👋']\n    ]),\n    chooseGreetingLanguageResults(chooseGreetingLanguage),\n    isSignedInResult(checkUserStatus)\n  ]\n}\n\nfunction chooseGreetingLanguageResults (fn) {\n  if (!fn) {\n    return {\n      correct: false,\n      tip: '[[chooseGreetingLanguage not defined'\n    }\n  }\n  if (fn.toString().match(/if/)) {\n    return {\n      correct: false,\n      actual: fn.toString(),\n      tip: 'Function must not use a if statement'\n    }\n  }\n  if (!fn.toString().match(/switch/)) {\n    return {\n      correct: false,\n      actual: fn.toString(),\n      tip: 'Function must use a switch statement'\n    }\n  }\n\n  const inputs = [\n    [['Te Reo'], 'Kia ora'],\n    [['English'], 'Hello'],\n    [['Spanish'], 'Hola'],\n    [['Mandarin'], 'Nǐ hǎo'],\n    [['Samoan'], 'Talofa'],\n    [['whatever'], '👋']\n  ]\n\n  return buildMultipleFunctionResult(fn, inputs)\n}\n\nfunction isSignedInResult (fn) {\n  if (!fn) {\n    return {\n      correct: false,\n      tip: 'checkUserStatus is not a function'\n    }\n  }\n  if (fn.toString().match(/if/)) {\n    return {\n      correct: false,\n      actual: fn.toString(),\n      tip: 'checkUserStatus should not use if statement'\n    }\n  }\n  if (!fn.toString().match(/\\?.*:/)) {\n    return {\n      correct: false,\n      actual: fn.toString(),\n      tip: 'must use ternary operator'\n    }\n  }\n  return buildMultipleFunctionResult(fn, [\n    [[true], 'Log in'],\n    [[false], 'Register a new account']\n  ])\n}\n\nmodule.exports = resultsForConditionals\n\n\n//# sourceURL=webpack://foundations/./src/lib/results/conditionals.js?"
        )

        /***/
      },

    /***/ './src/lib/results/functions.js':
      /*!**************************************!*\
  !*** ./src/lib/results/functions.js ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "const { buildFunctionResult, buildMultipleFunctionResult } = __webpack_require__(/*! ../ */ \"./src/lib/index.js\")\nfunction resultsForFunctions ({\n  hello,\n  sayHi,\n  sayBye,\n  greet,\n  salutation,\n  welcomeResultIs,\n  shout,\n  replyResultIs,\n  helloFriend,\n  goodMorningResultIs,\n  hiResultIs,\n  warn\n}) {\n  const greetResult = buildFunctionResult(greet, [], 'Hey there!')\n  if (greetResult.correct && salutation !== 'Hey there!') {\n    greetResult.correct = false\n    greetResult.response = salutation\n    greetResult.tip = \"So close, don't forget to assign the result to salutation\"\n  }\n\n  const oldConsole = console.log\n  let logResult\n  console.log = str => { logResult = str }\n  const warnResult = buildFunctionResult(warn, ['Fire'], 'Fire Fire')\n  console.log = oldConsole\n  if (warnResult.correct && logResult !== 'Fire Fire') {\n    warnResult.correct = false\n    warnResult.response = logResult\n    warnResult.tip = \"Nearly, don't forget to call console.log with the result\"\n  }\n\n  return [\n    buildFunctionResult(hello, [], 'Hello world!'),\n    buildFunctionResult(sayHi, [], 'Hello!'),\n    buildFunctionResult(sayBye, [], 'Goodbye!'),\n    greetResult,\n    {\n      correct: welcomeResultIs === 'Welcome!',\n      response: `welcomeResultIs: ${welcomeResultIs}`,\n      tip: welcomeResultIs !== undefined ? '- Nearly, try reading through it again' : ''\n    },\n    buildMultipleFunctionResult(shout, [\n      [['Echo'], 'Echo'],\n      [['Word'], 'Word']\n    ]),\n    {\n      correct: replyResultIs === 'Good morning',\n      response: `replyResultIs ${replyResultIs}`,\n      tip: replyResultIs !== undefined ? '- Nearly, try reading through it again' : ''\n    },\n    buildFunctionResult(helloFriend, ['Emily'], 'Hello Emily!'),\n    {\n      correct: goodMorningResultIs === 'Good morning Jacky!',\n      response: `goodMorningResultIs ${goodMorningResultIs}`,\n      tip: goodMorningResultIs !== undefined ? '- Nearly, try reading through it again' : ''\n    },\n    {\n      correct: hiResultIs === 'Hi Andy! Hi Hamish!',\n      response: `hiResultIs: ${hiResultIs}`,\n      tip: hiResultIs !== undefined ? ' - Nearly, try reading through it again' : ''\n    },\n    warnResult\n  ]\n}\n\nmodule.exports = resultsForFunctions\n\n\n//# sourceURL=webpack://foundations/./src/lib/results/functions.js?"
        )

        /***/
      },

    /***/ './src/lib/results/loops.js':
      /*!**********************************!*\
  !*** ./src/lib/results/loops.js ***!
  \**********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "const { buildFunctionResult, buildMultipleFunctionResult } = __webpack_require__(/*! ../ */ \"./src/lib/index.js\")\nfunction resultsForLoops ({\n  numberPrintResultCalls,\n  logNames,\n  printCountdown,\n  countShortNames,\n  everySecondItem\n}) {\n  return [\n    {\n      correct: numberPrintResultCalls === 4,\n      response: `numberPrintResultCalls: ${numberPrintResultCalls}`\n    },\n    alertResult(logNames),\n    printCountdownResult(printCountdown),\n    countShortNamesResult(countShortNames),\n    everySecondItemResult(everySecondItem)\n  ]\n}\n\nfunction alertResult (logNames) {\n  const oldConsole = console.log\n  const logResults = []\n  console.log = str => { logResults.push(str) }\n  const result = buildFunctionResult(logNames, [['Alice', 'Bob', 'Alan', 'Ada']], undefined)\n  console.log = oldConsole\n  if (result.correct) {\n    result.response = `Console.log called ${logResults.length} times` + (logResults.length > 0 ? `with ${logResults.join(', ')}` : '')\n    if (logResults.length === 0) {\n      result.correct = false\n      result.tip = \"Don't forget to call console.log for each name inside the loop\"\n    } else if (logResults.length !== 4) {\n      result.correct = false\n      result.tip = 'You need to call console.log once for each name in the arguments'\n    } else if (logResults.join(',') !== 'Alice,Bob,Alan,Ada') {\n      result.correct = false\n      result.tip = 'You need to call console.log once for each name in the arguments'\n    }\n  }\n  return result\n}\n\nfunction printCountdownResult (printCountdown) {\n  const oldConsole = console.log\n  const logResults = []\n  console.log = str => { logResults.push(str) }\n  const result = buildFunctionResult(printCountdown, [['blast off', 'one', 'two', 'three']], undefined)\n  console.log = oldConsole\n\n  if (result.correct) {\n    result.response = `Console.log called ${logResults.length} times ` + (logResults.length > 0 ? `with ${logResults.join(' ')}` : '')\n    if (logResults.length === 0) {\n      result.correct = false\n      result.tip = \"Don't forget to call console.log for each string inside the loop\"\n    } else if (logResults.length !== 4) {\n      result.correct = false\n      result.tip = 'You need to call console.log once for each string in the arguments'\n    } else if (logResults.join(' ') !== 'three! two! one! blast off!') {\n      result.correct = false\n      result.tip = 'You need to call console.log once for each string in the arguments with exclamation marks'\n    }\n  }\n  return result\n}\n\nfunction countShortNamesResult (countShortNames) {\n  if (!countShortNames) {\n    return {\n      correct: false,\n      response: undefined,\n      tip: 'countShortNames function was not defined'\n    }\n  }\n  if (!countShortNames.toString().match(/for.*of/)) {\n    return {\n      correct: false,\n      tip: 'You need to use for ... of'\n    }\n  }\n  return buildMultipleFunctionResult(countShortNames, [\n    [[['sue', 'alice', 'henry', 'bob']], 2]\n  ])\n}\n\nfunction everySecondItemResult (everySecondItem) {\n  if (!everySecondItem) {\n    return {\n      correct: false,\n      response: undefined,\n      tip: 'everySecondItem function was not defined'\n    }\n  }\n  if (!everySecondItem.toString().match(/forEach/)) {\n    return {\n      correct: false,\n      tip: 'You need to use forEach'\n    }\n  }\n  const args = ['sue', 1, 'henry', 'bob', 3, 4]\n  const res = everySecondItem(args)\n  if (!res) {\n    return {\n      correct: false,\n      response: `everySecondItem(${args}) returned undefined`\n    }\n  }\n  const result = {\n    response: `everySecondItem(${args}) returned ${res.join(',')}`\n  }\n  if (res.join(',') === '1,bob,4') {\n    result.correct = true\n  } else {\n    result.correct = false\n  }\n  return result\n}\n\nmodule.exports = resultsForLoops\n\n\n//# sourceURL=webpack://foundations/./src/lib/results/loops.js?"
        )

        /***/
      },

    /***/ './src/lib/results/objects.js':
      /*!************************************!*\
  !*** ./src/lib/results/objects.js ***!
  \************************************/
      /***/ (module) => {
        eval(
          "function resultsForObjects ({\n  contact,\n  receipt,\n  customer,\n  person\n}) {\n  return [\n    {\n      correct: contact?.name === 'Leon Kim' && contact?.address === '123 Main St' && contact?.phone === '021 555 555',\n      response: `contact: ${JSON.stringify(contact, null, 2)}`,\n      tip: contact?.name !== undefined ? ' Nearly, check that all the values exactly matches the instructions (the test is case and whitespace sensitive!) <br/>' : ''\n    },\n    {\n      correct: customer === 'Marta' && customer === receipt?.name,\n      response: `customer: ${JSON.stringify(customer, null, 2)}`,\n      tip: customer !== undefined ? 'Nearly, try using dot notation to access the receipt object\\'s name property' : ''\n    },\n    {\n      correct: person?.name !== undefined && person?.name !== 'Navita',\n      response: `person.name: ${person?.name}`,\n      tip: customer !== undefined ? 'Nearly, try using dot notation to access the receipt object\\'s name property and then assign a new value!' : ''\n    }\n  ]\n}\n\nmodule.exports = resultsForObjects\n\n\n//# sourceURL=webpack://foundations/./src/lib/results/objects.js?"
        )

        /***/
      },

    /***/ './src/lib/results/operators.js':
      /*!**************************************!*\
  !*** ./src/lib/results/operators.js ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "const { buildMultipleFunctionResult } = __webpack_require__(/*! ../ */ \"./src/lib/index.js\")\nfunction resultsForOperators ({\n  add,\n  minus,\n  multiply,\n  divide,\n  increment,\n  decrement,\n  and,\n  or,\n  not,\n  isGreaterThan,\n  isLessThan,\n  isGreaterOrEqual,\n  isLessOrEqual,\n  isSimilar,\n  isSameTypeAndVal,\n  isNotSimilar,\n  isNotSameTypeOrVal\n}) {\n  return [\n    buildMultipleFunctionResult(add, [\n      [[1, 2], 3],\n      [[2, 3], 5],\n      [[5, -1], 4]\n    ]),\n    buildMultipleFunctionResult(minus, [\n      [[3, 2], 1],\n      [[3, -2], 5]\n    ]),\n    buildMultipleFunctionResult(multiply, [\n      [[3, 2], 6],\n      [[3, -20], -60]\n    ]),\n    buildMultipleFunctionResult(divide, [\n      [[10, 2], 5],\n      [[20, 5], 4]\n    ]),\n    buildMultipleFunctionResult(increment, [\n      [[10], 11],\n      [[1], 2]\n    ]),\n    buildMultipleFunctionResult(decrement, [\n      [[10], 9],\n      [[-1], -2]\n    ]),\n    buildMultipleFunctionResult(and, [\n      [[true, false], false],\n      [[true, true], true]\n    ]),\n    buildMultipleFunctionResult(or, [\n      [[false, false], false],\n      [[false, true], true]\n    ]),\n    buildMultipleFunctionResult(not, [\n      [[true], false],\n      [[false], true]\n    ]),\n    buildMultipleFunctionResult(isGreaterThan, [\n      [[3, 2], true],\n      [[2, 2], false],\n      [[1, 2], false]\n    ]),\n    buildMultipleFunctionResult(isLessThan, [\n      [[2, 3], true],\n      [[3, 3], false],\n      [[3, 2], false]\n    ]),\n    buildMultipleFunctionResult(isGreaterOrEqual, [\n      [[3, 2], true],\n      [[2, 2], true],\n      [[1, 2], false]\n    ]),\n    buildMultipleFunctionResult(isLessOrEqual, [\n      [[2, 3], true],\n      [[3, 3], true],\n      [[3, 2], false]\n    ]),\n    buildMultipleFunctionResult(isSimilar, [\n      [[2, '2'], true],\n      [[2, 1], false],\n      [[2, 2], true]\n    ]),\n    buildMultipleFunctionResult(isSameTypeAndVal, [\n      [['1', 1], false],\n      [[2, 2], true]\n    ]),\n    buildMultipleFunctionResult(isNotSimilar, [\n      [['1', 1], false],\n      [[2, '3'], true]\n    ]),\n    buildMultipleFunctionResult(isNotSameTypeOrVal, [\n      [['1234', 1234], true],\n      [[12, 12], false],\n      [[12, 123], true]\n    ])\n  ]\n}\n\nmodule.exports = resultsForOperators\n\n\n//# sourceURL=webpack://foundations/./src/lib/results/operators.js?"
        )

        /***/
      },

    /***/ './src/lib/results/variables.js':
      /*!**************************************!*\
  !*** ./src/lib/results/variables.js ***!
  \**************************************/
      /***/ (module) => {
        eval(
          "function resultsForVariables ({ welcome, name, value }) {\n  return [\n    {\n      correct: welcome === 'Hello world',\n      response: `welcome : ${welcome}`,\n      tip: welcome !== undefined ? 'Make sure you spell it exaclty the same' : ''\n    },\n    {\n      correct: typeof name === 'string' && name !== 'Old Name',\n      response: `name = ${name}`,\n      tip: name !== 'Old Name' ? 'make sure you change the name variable' : ''\n    },\n    {\n      correct: value === 'Wiremu',\n      response: `value = ${value}`,\n      tip: value !== undefined ? '- Nearly, try reading through it again' : ''\n    }\n  ]\n}\n\nmodule.exports = resultsForVariables\n\n\n//# sourceURL=webpack://foundations/./src/lib/results/variables.js?"
        )

        /***/
      },

    /******/
  }
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {}
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId]
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    )
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/index.js')
  /******/
  /******/
})()
