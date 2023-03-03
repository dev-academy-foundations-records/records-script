// Write your two examples here
// string .split()
// This method split a string into multiple element
// Example: str = "hi world !" . str.split(' ') would return ["hi","world","!"]

let str = 'hi world !'

function split(string) {
  return string.split(' ')
}

// string .join()
// The join() method creates and returns a new string by concatenating all of the elements in an array
// Example: arr = ["hi" , 'world', "!" ] arr.join(' ') would return ["hi world !"]

let arr = ['hi', 'world', '!']
function join(array) {
  return array.join(' ')
}

// ------------ Calling the functions -----------

console.log(join(arr))

console.log(split(str))
