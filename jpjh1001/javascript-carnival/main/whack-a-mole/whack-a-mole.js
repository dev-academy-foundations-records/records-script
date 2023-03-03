// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let catchMole = document.getElementsByTagName('td')

for (let i = 0; i < catchMole.length; i++) {
  catchMole[i].onclick = tag
}

function tag() {
  console.log('got you!')
}

let randomIndex = functionToGetRandomNumber()
let randomCell = cellsArray[randomIndex]
