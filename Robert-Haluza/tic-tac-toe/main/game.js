console.log('Welcome to Tic-Tac-Toe! Enjoy!')

cells = document.getElementsByTagName('TD')

let noughtsTurn = true

let gameIsOver

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  // Create a variable for the clicked cell so I can do stuff with it.
  // if the cell is empty(check it's .innerHTML property).
  // figure out which symbol to put inside the cell ("0" or "X" based on the naughtsTurn boolean).
  // put the symmbol inside the cell (by using .innerHTML again).
  // check to see if the player won with the move (probably using a new function, like checkForWin() which I'll need to write later).
  // if the game is over.
  // switch to the other player (using the naughtsTurn boolean again) .
  // update the subtitle saying whose turn it is now.

  let clickedCell = e.target

  if (clickedCell.innerHTML === '') {
    let symbol = noughtsTurn ? 'O' : 'X'
    clickedCell.innerHTML = symbol

    if (checkForWin(symbol)) {
      let winner = symbol + ' is the winner!'
      document.querySelector('#subtitle').innerHTML = winner
    } else {
      noughtsTurn = !noughtsTurn
      let turn = noughtsTurn ? 'O' : 'X'
      document.querySelector('#subtitle').innerHTML = turn + "'s turn"
    }
  }
}

//  HORIZONTAL LINES //

//   if (
//     cells[0].innerHTML == symbol &&
//     cells[1].innerHTML == symbol &&
//     cells[2].innerHTML == symbol
//   )
//     gameIsOver = true
//   else if (
//     cells[3].innerHTML == symbol &&
//     cells[4].innerHTML == symbol &&
//     cells[5].innerHTML == symbol
//   )
//     gameIsOver = true
//   else if (
//     cells[6].innerHTML == symbol &&
//     cells[7].innerHTML == symbol &&
//     cells[8].innerHTML == symbol
//   )
//     gameIsOver = true

// VERTICAL LINES //

//   if (
//     cells[0].innerHTML == symbol &&
//     cells[3].innerHTML == symbol &&
//     cells[6].innerHTML == symbol
//   )
//     gameIsOver = true
//   else if (
//     cells[1].innerHTML == symbol &&
//     cells[4].innerHTML == symbol &&
//     cells[7].innerHTML == symbol
//   )
//     gameIsOver = true
//   else if (
//     cells[2].innerHTML == symbol &&
//     cells[5].innerHTML == symbol &&
//     cells[8].innerHTML == symbol
//   )
//     gameIsOver = true

// DIAGONAL LINES //

//   if (
//     cells[0].innerHTML == symbol &&
//     cells[4].innerHTML == symbol &&
//     cells[8].innerHTML == symbol
//   )
//     gameIsOver = true
//   else if (
//     cells[2].innerHTML == symbol &&
//     cells[4].innerHTML == symbol &&
//     cells[6].innerHTML == symbol
//   )
//     gameIsOver = true

// the function takesa string as an argument ("X" or "O")
//*in this example we called the argument 'symbol but you can call it whatever you want(hint: bananas)

function checkForWin(symbol) {
  // if a symbol appears three times in a row in the board cells i.e. a winning line
  // either horizontally, vertically, OR diagonally
  // the game is over

  // if the game is over
  // update the subtitle with the winner

  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winConditions.length; i++) {
    let [a, b, c] = winConditions[i]
    if (
      cells[a].innerHTML === symbol &&
      cells[b].innerHTML === symbol &&
      cells[c].innerHTML === symbol
    ) {
      return true
    }
  }

  return false
}
