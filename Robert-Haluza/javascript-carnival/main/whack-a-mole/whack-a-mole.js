// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// Store references to all the cells in a 2D array
const rows = document.getElementsByTagName('tr')
let cells = []

for (let i = 0; i < rows.length; i++) {
  cells[i] = rows[i].getElementsByTagName('td')
}

// Random cell selector function
function randomIndex() {
  let randomRow = Math.floor(Math.random() * cells.length)
  let randomCell = Math.floor(Math.random() * cells[randomRow].length)
  return [randomRow, randomCell]
}

// Show the mole function
function showMole() {
  let mole = document.createElement('img')
  mole.src = 'mole.PNG'
  mole.id = 'mole'
  let index = randomIndex()
  let currentCell = cells[index[0]][index[1]]
  currentCell.appendChild(mole)
}

// Whacked the mole function
function whackedMole() {
  // console.log('here')
  let mole = document.getElementById('mole')
  let currentCell = mole.parentNode
  currentCell.removeChild(mole)
  showMole()
  document.getElementById('mole').addEventListener('click', whackedMole)
  let audio = new Audio('whack-audio.wav')
  audio.volume = 0.25
  audio.play()
}

// Initialize the game
showMole()
document.getElementById('mole').addEventListener('click', whackedMole)
