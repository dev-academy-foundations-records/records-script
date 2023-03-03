console.log('Welcome to Tic-Tac-Toe! Enjoy!')

//Creating an array of TD elements
let cells = document.getElementsByTagName('TD')
let subtitle = document.getElementById('subtitle')
let button = document.querySelector('button')
let noughtsTurn = true
let gameIsOver
let symbol = `X`

// Add 'x' or 'o' to grid if its empty. If there is a win change subtitle text. If there isn't
// then change turn and change subtitle text to that persons turn.

button.addEventListener('click', () => {
  noughtsTurn = true
  gameIsOver = false
  symbol = 'X'
  console.log(noughtsTurn, gameIsOver, symbol)
  cells[0].innerHTML = ''
})

function cellClicked(e) {
  let cell = e.target

  if (cell.innerHTML === '') {
    cell.innerHTML = symbol
  }
  checkForWinner(symbol)

  if (gameIsOver != true) {
    noughtsTurn = !noughtsTurn
    symbol = noughtsTurn ? `X` : `O`
    subtitle.innerHTML = `Player ${symbol}'s turn!`
  } else {
    subtitle.innerHTML = `Player ${symbol} wins the game!`
  }
}

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

// Checks to see if any of the symbols in a row, column or diagonal are equal to eachother
// If they are set gameOver to true.
function checkForWinner(symbol) {
  // ---HORIZONTAL LINES--- //
  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  ) {
    gameIsOver = true
  } else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  ) {
    gameIsOver = true
  } else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  // VERTICAL LINES //
  else if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  ) {
    gameIsOver = true
  } else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  ) {
    gameIsOver = true
  } else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  // ---DIAGONAL LINES--- //
  else if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  ) {
    gameIsOver = true
  } else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  ) {
    gameIsOver = true
  }
}
