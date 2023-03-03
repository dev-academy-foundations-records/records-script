console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('td')

// DECLARING GAME VARIABLES.
let noughtsTurn = true
let gameIsOver = false

// CALLING FUNCTION ON EACH CELL THAT IS CLICKED.
for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  let cell = e.target
  console.log('i clicked on: ' + cell)

  // CHECK IF GAME IS OVER.
  if (gameIsOver) {
    return
  }

  // CHECK IF CELL IS EMPTY.
  // CHECK AND TOGGLE TURNS AND SYMBOLS.
  if (cell.innerHTML == '') {
    if (noughtsTurn) {
      cell.innerHTML = '0'
      noughtsTurn = !noughtsTurn
      document.getElementById('subtitle').innerHTML = "CROSSES' TURN!"
    } else {
      cell.innerHTML = 'X'
      noughtsTurn = !noughtsTurn
      document.getElementById('subtitle').innerHTML = "NOUGHTS' TURN!"
    }
  }
  // CHECK WHO WON.
  checkForWin('0')
  if (gameIsOver) {
    return
  }
  checkForWin('X')
}

// ADDING EVENT TO RESET BUTTON.
document.getElementById('reset').addEventListener('click', resetGame)

// RESET FUNCTION.
function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = ''
  }
  gameIsOver = false
  noughtsTurn = true
  document.getElementById('subtitle').innerHTML = 'Click on a cell to start!'
}

function checkForWin(symbol) {
  // HORIZONTAL CHECK.

  if (cells[0].innerHTML == symbol && cells[1].innerHTML == symbol && cells[2].innerHTML == symbol) gameIsOver = true
  else if (cells[3].innerHTML == symbol && cells[4].innerHTML == symbol && cells[5].innerHTML == symbol) gameIsOver = true
  else if (cells[6].innerHTML == symbol && cells[7].innerHTML == symbol && cells[8].innerHTML == symbol) gameIsOver = true

  // VERTICAL CHECK.

  if (cells[0].innerHTML == symbol && cells[3].innerHTML == symbol && cells[6].innerHTML == symbol) gameIsOver = true
  else if (cells[1].innerHTML == symbol && cells[4].innerHTML == symbol && cells[7].innerHTML == symbol) gameIsOver = true
  else if (cells[2].innerHTML == symbol && cells[5].innerHTML == symbol && cells[8].innerHTML == symbol) gameIsOver = true

  // DIAGONAL CHECK.

  if (cells[0].innerHTML == symbol && cells[4].innerHTML == symbol && cells[8].innerHTML == symbol) gameIsOver = true
  else if (cells[2].innerHTML == symbol && cells[4].innerHTML == symbol && cells[6].innerHTML == symbol) gameIsOver = true

  // ANNOUNCING WINNER.
  if (gameIsOver == true) {
    document.getElementById('subtitle').innerHTML = symbol + ' ' + 'WINS THE GAME!'
  }
}
