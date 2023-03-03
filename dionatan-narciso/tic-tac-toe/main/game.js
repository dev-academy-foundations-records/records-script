console.log('Welcome to Tic-Tac-Toe! Enjoy!')

// defaults for the biggining of the game:

let noughtsTurn = true

let gameIsOver

// Collecting the cells from HTML:

let cells = document.getElementsByTagName('TD')

//

//

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

//

function cellClicked(e) {
  // create a variable for the clicked cell so I can do stuff with it
  let cell = e.target
  // console.log('i clicked on: ' + cell)
}

// if the cell is empty (check it's .innerHTML property)

// myVariableName.innerHTML == ''

// figure out which symbol to put inside the cell ("O" or "X" based on the naughtsTurn boolean)

// put the symbol inside the cell (by using .innerHTML again)

if (cell.innerHTML == '') {
  cell.innerHTML == noughtsTurn ? 'O' : 'X'
  noughtsTurn = noughtsTurn ? false : true
}

// check to see if the player won with that move (probably using a new function, like checkForWin() which I'll need to write later)

function checkForWin(symbol) {
  // if a symbol appears three times in a row in the board cells i.e. a winning line either horizontally, vertically, OR diagonally the game is over
  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  niceGame()
}

function gameEnd() {
  console.log('GAMEOVER')
  for (let i = 0; i < cells.length; i++)
    if (cells[i].innerHTML == '') {
      cells[i].innerHTML = ' '
    }
}
function niceGame() {
  let gameMessage = document.getElementById('subtitle')
  if (gameIsOver == true && noughtsTurn == true) {
    gameMessage.innerHTML = 'O has WON!'
    gameEnd()
  } else if (gameIsOver == true && noughtsTurn == !true) {
    gameMessage.innerHTML = 'X has WON!'
    gameEnd()

    // if the game is over
    // update the subtitle with the winner
  } else if (gameIsOver != true && noughtsTurn == true) {
    gameMessage.innerHTML = "X's turn."
  } else if (gameIsOver != true && noughtsTurn == !true) {
    gameMessage.innerHTML = "O's turn."
  }
}
