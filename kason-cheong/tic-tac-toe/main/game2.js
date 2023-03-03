console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('td')

let noughtsTurn = true

let gameIsOver = false

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  let symbol = cells.innerHTML
  let cell = e.target
  if (cell.innerHTML !== '' || gameIsOver) {
    return
  } else if (cell.innerHTML == '') {
    let symbol = noughtsTurn ? 'O' : 'X'
    cell.innerHTML = symbol
    checkForWin(symbol)
  }

  function checkForWin(symbol) {
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

    // DIAGONAL LINES //
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

    if (gameIsOver) {
      if (noughtsTurn) {
        document.getElementById('subtitle').innerHTML =
          'Noughts has won the game!'
      } else if (!noughtsTurn) {
        document.getElementById('subtitle').innerHTML =
          'Crosses has won the game!'
      }
    }
  }


  function changeSubtitle(noughtsTurn) {
    if (noughtsTurn) {
      document.getElementById('subtitle').innerHTML = "It is noughts' turn!"
    } else {
      document.getElementById('subtitle').innerHTML = "It is crosses' turn!"
    }
  }

  if (!gameIsOver) {
    noughtsTurn = !noughtsTurn
    changeSubtitle(noughtsTurn)
  }
}
