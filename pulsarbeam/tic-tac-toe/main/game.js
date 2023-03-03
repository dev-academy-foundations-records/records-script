console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('TD')
let subtitle = document.getElementById('subtitle')
let noughtsTurn = true

let symbol

const subtitleX = "X's Turn"
const subtitleO = "O's Turn"
let gameIsOver = false

let random = Math.random()
if (random >= 0.5) {
  noughtsTurn = true
  subtitle.innerHTML = "Click To Start The Game! X's Start!"
} else {
  noughtsTurn = false
  subtitle.innerHTML = "Click To Start The Game! O's Start!"
}

function cellClicked(e) {
  if (gameIsOver) {
    return
  }
  let cell = e.target
  console.log('i clicked on: ' + cell)
  //means cell can only be clicked once per game
  if (cell.innerHTML == '') {
    cell.innerHTML = noughtsTurn ? (symbol = 'X') : (symbol = 'O')
    noughtsTurn = !noughtsTurn

    subtitle.innerHTML = noughtsTurn ? subtitleX : subtitleO
  }

  checkForWin(symbol)

  if (gameIsOver == true) {
    if (symbol == 'X') {
      subtitle.innerHTML = 'X Wins! Game Over!'
    } else if (symbol == 'O') {
      subtitle.innerHTML = 'O Wins! Game Over!'
    }
  }
  let draw = true
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == '') {
      draw = false
      break
    }
  }

  if (draw) {
    subtitle.innerHTML = "It's a draw! Game Over!"
    gameIsOver = true
  }
}

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

//check for win function stub
function checkForWin(symbol) {
  //Horizontal Lines
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
  //Vertical Lines
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
  //Diangonal Lines
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
}
