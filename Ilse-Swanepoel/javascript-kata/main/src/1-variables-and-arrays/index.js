const { boolean } = require('yargs')

// leave this code as-is please
let secretNumber
let password
let allowedIn
let members

// assign values to each of these variables to pass the tests. The test descriptions will guide you.

// write your code below this line---------------------------------

secretNumber = 7

password = 'just open the door'

//allowed in needs a boolean so True or False so we might need an if statement?
allowedIn = true == true

//members
//array ['Tui', 'Kiwi', 'Piwakawaka', 'Tane']

members = ['Tui', 'Kiwi', 'Piwakawaka', 'Tane']

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { secretNumber, password, allowedIn, members }
