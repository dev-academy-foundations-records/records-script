let cells = document.getElementsByTagName('TD')

// console.log(cells)

// function sayHello() {
//   console.log('hello')
// }

for (let i = 0; i < cells.length; i++) cells[i].onclick = cellClicked
// default
let noughtsTurn = true

let gameIsOver
//default

function cellClicked(e) {
  let cell = e.target
  let subtitle = document.getElementById('subtitle')

  //   // console.log('i clicked on: ' + cell)
  if (!gameIsOver) {
    if (cell.innerHTML === '') {
      cell.innerHTML = noughtsTurn ? 'X' : 'O'

      noughtsTurn = !noughtsTurn
      subtitle.innerHTML = noughtsTurn ? "Player X's Trun" : "Player O's trun"

      checkForWin(cell.innerHTML)
    }
    // else {
    //   subtitle.innerHTML = 'Game is Over'
    // }
  }
}
// check wins
function checkForWin(symbol) {
  //Horizontal lines//

  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  //verical lines//

  if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  // DIAGONAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  ) {
    gameIsOver = true
  }

  if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  ) {
    gameIsOver = true
  }

  if (gameIsOver) {
    subtitle.innerHTML = 'Player ' + symbol + ' Wins!'
  } else if (allthecellfilled()) {
    subtitle.innerHTML = ' No winner <br>Click refresh to play again'
  }
}

function allthecellfilled() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === '') {
      return false
    }
  }
  return true
}

// function resetGame() {
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].innerHTML = ''
//   }
//   gameIsOver = false
//   subtitle.innerHTML = ''
// }
