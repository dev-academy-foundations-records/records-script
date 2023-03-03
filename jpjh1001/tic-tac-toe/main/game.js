console.log('welcome to tic tac toe! enjoy!')

let cells = document.getElementsByTagName('TD')

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

let naughtsTurn = true
let subtitle = document.getElementById('subtitle')

function cellClicked(e) {
  let cell = e.target

  if (cell.innerHTML == '') {
    if (naughtsTurn) {
      cell.innerHTML = 'O'
      checkForWin('O')
    } else {
      cell.innerHTML = 'X'
      checkForWin('X')
    }

    naughtsTurn = !naughtsTurn

    if (!gameIsOver) {
      if (naughtsTurn) {
        subtitle.innerHTML = 'Naughts Turn'
      } else {
        subtitle.innerHTML = 'Crosses Turn'
      }
    }
  }
}

let gameIsOver = false

function checkForWin(symbol) {
  // HORIZONTAL LINES //

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

  // VERTICAL LINES //

  if (
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

  // DIAGONAL LINES //
  if (
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

  if (gameIsOver) {
    if (naughtsTurn) {
      subtitle.innerHTML = 'Naughts WON!'
    } else {
      subtitle.innerHTML = 'Crosses WON!'
    }
  }
}
