// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cells = document.getElementsByTagName('td')
for (let cell of cells) {
  cell.addEventListener('click', cellClicked)
}

let mole = document.createElement('img')
mole.src = './mole.PNG'
mole.id = 'mole'

getMoleInRandomCell()

function getMoleInRandomCell() {
  let randomIndex = Math.floor(Math.random() * cells.length)
  cells[randomIndex].appendChild(mole)
}

function cellClicked() {
  getMoleInRandomCell()
}
