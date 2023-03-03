console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByClassName('box')

for (let i = 0; i < 9; i++) {
  let cell = cells[i]
  cell.addEventListener('click', cellClicked)
}

let noughtsTurn = true

let gameIsOver = false

//--------Taking Turns--------//

function cellClicked(e) {
  let cell = e.target
  let id = e.target.id
  console.log('cell' + cell + 'was clicked')
  //=====check if game finished============//
  if (cell.innerHTML !== '' || gameIsOver) {
    flag = false
    console.log('gameisover', flag)
    return
  }

  //===========display player's turn========//
  if (noughtsTurn) {
    cell.innerHTML = 'X'
    document.getElementById('subtitle').innerHTML = `It's 0's turn`
    // console.log('checkX', (cell.innerHTML = 'X'))
  } else {
    cell.innerHTML = '0'
    document.getElementById('subtitle').innerHTML = `It's X's turn`
    // console.log('check0', (cell.innerHTML = 'B'))
  }

  //=========checkWiner==========//

  if (checkForWin('X')) {
    document.getElementById('subtitle').innerHTML = `Player X Wow`
    // console.log('checkWinner', checkForWin('X is wing'))
    return
  }

  if (checkForWin('0')) {
    document.getElementById('subtitle').innerHTML = `Player 0 Wow`
    // console.log('checkWinner2', checkForWin('0 is winning'))
    return
  }

  //===========switch player===============//
  if (noughtsTurn) {
    noughtsTurn = false
  } else {
    noughtsTurn = true
  }
}

//---------Check winners and display---------//

function checkForWin(symbol) {
  // HORIZONTAL LINES //
  // console.log('first', gameIsOver)
  // console.log(symbol)
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
    if (noughtsTurn) {
      document.getElementById('subtitle').innerHTML = `Player X Wow`
    } else {
      document.getElementById('subtitle').innerHTML = `Player 0 Wow`
    }
  }
}

//==========Restart the Game==========//

function reset() {
  for (let cell of cells) {
    cell.innerHTML = ''
  }
  gameIsOver = false
  document.getElementById('subtitle').innerHTML = 'Click on a cell to start!'
}

let restartButton = document.getElementById('btn')
restartButton.addEventListener('click', reset)
