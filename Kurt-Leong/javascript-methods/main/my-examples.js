// Write your two examples here
//Example 1
//string.split
//This method is able to break a string up to an array,the string will be brokend up in to an array splitStrResult:M,y, ,n,a,m,e, ,i,s, ,K,u,r,t
//the the array =['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'K', 'u', 'r', 't']

let string = 'My name is Kurt'

function splitStr(str) {
  const array = str.split('')
  return array
}

//Example 2
//array.map(()=>{})
//This method can assign function to the array, and return a new arrway without changing the original array.
//the new fucntion

let array = [3, 4, 5, 6]
const newArray = array.map((a) => {
  return a * 3
})

//calling the function
const splitStrResult = splitStr(string)
console.log('splitStrResult:' + splitStrResult)

console.log('newArrayresult:' + newArray)
console.log(`originalArray remains: ${array}`)
