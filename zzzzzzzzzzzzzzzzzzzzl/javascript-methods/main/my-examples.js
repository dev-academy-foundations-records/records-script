// Write your two examples here

var arr=[0,1,2,3,4,5]
var testmap=arr.map(multi)

function multi(n){
    return n*n*n
}
console.log(testmap)

var arr=[0,1,2,3,4,5]
var testmap=arr.map(i=>i*arr[i-1])

function multi(n){
    return n*n*n
}
console.log(testmap)

// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.

var string ="here is some text, there is where I put my text"

string=string.replaceAll('ere','is')
console.log(string)


var string ="here is some text, there is where I put my text"
while (string.search('ere')>0){
string=string.replace('ere','is')
console.log(string)}
//replace will replace the first string it finds which matches

//replace all will replace all of the string which match

//kind of obvious, but i didnt know that there was a replace all function t.t

