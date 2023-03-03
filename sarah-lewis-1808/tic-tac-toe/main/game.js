let cells = document.getElementsByTagName('TD')

let noughtsTurn = true
let gameIsOver = false
let stalemate = false
let subtitle = document.getElementById('subtitle')

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  let cell = e.target
  let cellEmpty = cell.innerHTML === ''
  let symbol = noughtsTurn ? 'O' : 'X'

  if (!cellEmpty || gameIsOver) {
    return
  }

  let addSymbol = () => {
    if (cellEmpty && noughtsTurn) {
      cell.innerHTML = symbol
      subtitle.innerHTML = `It's now crosses turn`
    } else if (cellEmpty && !noughtsTurn) {
      cell.innerHTML = symbol
      subtitle.innerHTML = `It's now noughts' turn`
    }
  }

  addSymbol()

  let checkForWin = (symbol) => {
    //HORIZONTAL LINES
    if (
      cells[0].innerHTML === symbol &&
      cells[1].innerHTML === symbol &&
      cells[2].innerHTML === symbol
    )
      gameIsOver = true
    else if (
      cells[3].innerHTML === symbol &&
      cells[4].innerHTML === symbol &&
      cells[5].innerHTML === symbol
    )
      gameIsOver = true
    else if (
      cells[6].innerHTML === symbol &&
      cells[7].innerHTML === symbol &&
      cells[8].innerHTML === symbol
    )
      gameIsOver = true
    //VERTICAL LINES
    else if (
      cells[0].innerHTML === symbol &&
      cells[3].innerHTML === symbol &&
      cells[6].innerHTML === symbol
    )
      gameIsOver = true
    else if (
      cells[1].innerHTML === symbol &&
      cells[4].innerHTML === symbol &&
      cells[7].innerHTML === symbol
    )
      gameIsOver = true
    else if (
      cells[2].innerHTML === symbol &&
      cells[5].innerHTML === symbol &&
      cells[8].innerHTML === symbol
    )
      gameIsOver = true
    //DIAGONAL LINES
    else if (
      cells[0].innerHTML === symbol &&
      cells[4].innerHTML === symbol &&
      cells[8].innerHTML === symbol
    )
      gameIsOver = true
    else if (
      cells[2].innerHTML === symbol &&
      cells[4].innerHTML === symbol &&
      cells[6].innerHTML === symbol
    )
      gameIsOver = true
    else if (
      cells[0].innerHTML !== '' &&
      cells[1].innerHTML !== '' &&
      cells[2].innerHTML !== '' &&
      cells[3].innerHTML !== '' &&
      cells[4].innerHTML !== '' &&
      cells[5].innerHTML !== '' &&
      cells[6].innerHTML !== '' &&
      cells[7].innerHTML !== '' &&
      cells[8].innerHTML !== ''
    )
      stalemate = true
    else return
  }

  checkForWin(symbol)

  if (stalemate) {
    subtitle.innerHTML = 'stalemate'
  }

  let declareWinner = () => {
    if (noughtsTurn && gameIsOver) {
      subtitle.innerHTML = `Noughts won!`
    } else if (!noughtsTurn && gameIsOver) {
      subtitle.innerHTML = 'Crosses won!'
    }
  }

  let changeTurn = () => {
    if (noughtsTurn) {
      noughtsTurn = !noughtsTurn
    } else if ((noughtsTurn = !noughtsTurn)) {
      noughtsTurn
    } else gameIsOver
  }

  if (!gameIsOver) {
    changeTurn()
  } else declareWinner()
}
