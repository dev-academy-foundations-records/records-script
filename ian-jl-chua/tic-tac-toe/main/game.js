console.log('Welcome to Tic-Tac-Toe! Enjoy!')

// clicking squares will either leave an "x" or an "o" and one will follow the other
// [] make function for p1 automatically go to p2 when p1 finishes the move
// [] "click on a cell to start " wording needs to change. This changes when a cell is clicked on
// [] end game message when either X or O has 3 in a row

let noughtsTurn = true

let gameIsOver

//getting the tags 'cell"
let cells = document.getElementsByTagName('TD')

//cycling through the cells as players click on individual cell
for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  // create a variable for the clicked cell so I can do stuff with it
  let cell = e.target
  // console.log("i clicked on: " + cell)

  // if the cell is empty (check it's .innerHTML property)

  // figure out which symbol to put inside the cell ("O" or "X" based on the naughtsTurn boolean)
  if (cell.innerHTML == '') {
    if (noughtsTurn == true) {
      // put the symbol inside the cell (by using .innerHTML again)

      cell.innerHTML = 'O'
      checkForWin('O')
    } else {
      cell.innerHTML = 'X'
      checkForWin('X')
    }
    // console.log("before toggle:", noughtsTurn)
    // console.log("cell.html", cell.innerHTML)
    noughtsTurn = !noughtsTurn
    // console.log("after toggle: ", noughtsTurn)
  }
  //////////////This also works too///////////////////////////////////////
  // if (cell.innerHTML == '') {
  //   cell.innerHTML== noughtsTurn ? 'O' : 'X'
  //   noughtsTurn = noughtsTurn ? false: true
  // }
  ///////////////////////////////////////////////////////////////////////
}
// check to see if the player won with that move (probably using a new function, like checkForWin()
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

  gG()
}

function gameEnd() {
  console.log('GAMEOVER')
  for (let i = 0; i < cells.length; i++)
    if (cells[i].innerHTML == '') {
      cells[i].innerHTML = ' '
    }
}
function gG() {
  let gameMessage = document.getElementById('subtitle')
  if (gameIsOver == true && noughtsTurn == true) {
    gameMessage.innerHTML = 'O has WON! GG'
    gameEnd()
  } else if (gameIsOver == true && noughtsTurn == !true) {
    gameMessage.innerHTML = 'X has WON! GG'
    gameEnd()

    // if the game is over
    // update the subtitle with the winner
  } else if (gameIsOver != true && noughtsTurn == true) {
    gameMessage.innerHTML = "It is now X's turn."
  } else if (gameIsOver != true && noughtsTurn == !true) {
    gameMessage.innerHTML = "It is now O's turn."
  }
}
