console.log('Welcome to Tic-Tac-Toe! Enjoy!')

const cells = document.getElementsByTagName('td')

const gameText = document.getElementById('subtitle')

const btn = document.getElementById('btn')

const playerOne = document.getElementById('playerOne')

const playerTwo = document.getElementById('playerTwo')

const stalemate = document.getElementById('stalemate')

let playerOnewins = 0

let playerTwowins = 0

let stalemates = 0

let noughtsTurn = randomStart()

let gameIsOver = false

btn.addEventListener('click', restart)

// function for handling clicks on cells
function cellClicked(e) {
  // create a variable for the clicked cell so I can do stuff with it
  if (!gameIsOver) {
    const cell = e.target

    // if the cell is empty (check it's .innerHTML property)

    // figure out which symbol to put inside the cell ("O" or "X" based on the naughtsTurn boolean)

    // put the symbol inside the cell (by using .innerHTML again)

    if (cell.innerHTML == '') {
      play()
      let symbol
      noughtsTurn ? (symbol = 'O') : (symbol = 'X')
      cell.innerHTML = symbol
      checkForWin(symbol)
      if (!gameIsOver) {
        noughtsTurn = !noughtsTurn

        noughtsTurn
          ? (gameText.textContent = "It is Player 1's turn")
          : (gameText.textContent = "It is Player 2's turn")
        checkForStaleMate()
        render()
      }
    }
  }

  // check to see if the player won with that move (probably using a new function, like checkForWin() which I'll need to write later)

  // if the game isn't over

  // switch to the other player (using the naughtsTurn boolean again)

  // update the subtitle saying whose turn it is now
}

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function checkForWin(symbol) {
  // HORIZONTAL LINES //

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
  if (
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
  if (
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
    // update the subtitle with the winner
    if (noughtsTurn) {
      gameText.textContent = 'Player 1 wins'
      playerOnewins++
      render()
      playWin()
    } else {
      gameText.textContent = 'Player 2 wins'
      playerTwowins++
      render()
      playWin()
    }
  }
}

function randomStart() {
  let num = Math.random()
  if (num >= 0.5) {
    return true
  } else {
    return false
  }
}

function checkForStaleMate() {
  // check the cells array has no empty item
  //if it does do the following
  // end game
  // change gameText to STALEMATE
  let arr = []
  for (let i = 0; i < cells.length; i++) {
    arr.push(cells[i].innerHTML)
  }
  // arr.filter((item) => item == '')
  if (arr.filter((item) => item == '').length == 0) {
    gameText.textContent = 'STALEMATE'
    stalemates++
    playLose()
  }
}

function restart() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = ''
  }
  noughtsTurn = randomStart()
  gameIsOver = false

  gameText.textContent = 'Click on a cell to start!'
}

function render() {
  playerOne.textContent = `Player 1 wins: ${playerOnewins}`
  playerTwo.textContent = `Player 2 wins: ${playerTwowins}`
  stalemate.textContent = `Stalemates: ${stalemates}`
}

function play() {
  document.getElementById('audio').play()
}

function playWin() {
  document.getElementById('audio-win').play()
}

function playLose() {
  document.getElementById('audio-lose').play()
}
