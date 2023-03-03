// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// Selecting the cells

let cells = document.querySelectorAll('td')

let mole = document.createElement('img')
mole.src = 'mole.PNG'
mole.id = 'mole'
mole.onclick = cellClicked
let audio = new Audio('whack-audio.wav')

// Adding the mole into the cell

function putMoleInRandomCell() {
  let randomNumber = Math.floor(Math.random() * cells.length + 1)
  cells[randomNumber].appendChild(mole)
}

// Changing moll cell and add audio function

function cellClicked() {
  putMoleInRandomCell()
  audio.play()
}

putMoleInRandomCell()
