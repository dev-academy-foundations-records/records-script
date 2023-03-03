  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//console.log("Whack-a-Mole!")

let cells = document.querySelectorAll('td')
console.log(cells)

//img set up with id mole
let mole = document.createElement('img')
mole.src = 'mole.png'
mole.id = 'mole'

//click event
mole.onclick = clickMole

//random img
function putMoleRandomCell(){
  let randomNumber = Math.floor((Math.random() * cells.length) +1);
  cells[randomNumber].appendChild(mole)

}

function clickMole(){
  putMoleRandomCell()
}
putMoleRandomCell()