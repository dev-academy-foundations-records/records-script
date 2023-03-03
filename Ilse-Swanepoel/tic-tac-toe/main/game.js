console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let noughtsTurn = true

let XgameIsOver = false

let OgameIsOver = false

let cells = document.getElementsByTagName('TD')

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  let cell = e.target

  // if the cell is empty (check it's .innerHTML property)

  if (cell.innerHTML == '') {
    // figure out which symbol to put inside the cell ("O" or "X" based on the naughtsTurn boolean)

    // put the symbol inside the cell (by using .innerHTML again)

    cell.innerHTML = noughtsTurn ? 'O' : 'X'

    noughtsTurn = noughtsTurn ? false : true

    changeSubtitle()
    checkForWinX()
    checkForWinO()
  }
  // check to see if the player won with that move (probably using a new function, like checkForWin() which I'll need to write later)

  // if the game isn't over

  // switch to the other player (using the naughtsTurn boolean again)

  // update the subtitle saying whose turn it is now
}

// update the subtitle saying whose turn it is now

function changeSubtitle() {
  let subtitle = document.getElementById('subtitle')
  message = noughtsTurn ? "It's O's Turn!" : "It's X's Turn!"
  console.log(message)
  subtitle.textContent = message
}

function checkForWinX(X) {
  // HORIZONTAL LINES //

  if (
    cells[0].innerHTML == 'X' &&
    cells[1].innerHTML == 'X' &&
    cells[2].innerHTML == 'X'
  )
    XgameIsOver = true
  else if (
    cells[3].innerHTML == 'X' &&
    cells[4].innerHTML == 'X' &&
    cells[5].innerHTML == 'X'
  )
    XgameIsOver = true
  else if (
    cells[6].innerHTML == 'X' &&
    cells[7].innerHTML == 'X' &&
    cells[8].innerHTML == 'X'
  )
    XgameIsOver = true

  // VERTICAL LINES //

  if (
    cells[0].innerHTML == 'X' &&
    cells[3].innerHTML == 'X' &&
    cells[6].innerHTML == 'X'
  )
    XgameIsOver = true
  else if (
    cells[1].innerHTML == 'X' &&
    cells[4].innerHTML == 'X' &&
    cells[7].innerHTML == 'X'
  )
    XgameIsOver = true
  else if (
    cells[2].innerHTML == 'X' &&
    cells[5].innerHTML == 'X' &&
    cells[8].innerHTML == 'X'
  )
    XgameIsOver = true

  // DIAGONAL LINES //

  if (
    cells[0].innerHTML == 'X' &&
    cells[4].innerHTML == 'X' &&
    cells[8].innerHTML == 'X'
  )
    XgameIsOver = true
  else if (
    cells[2].innerHTML == 'X' &&
    cells[4].innerHTML == 'X' &&
    cells[6].innerHTML == 'X'
  )
    XgameIsOver = true

  if (XgameIsOver == true) {
    console.log('gameover! X wins!')
    message = 'Game Over! X Wins!'
    subtitle.textContent = message
    gameEnd()
  }
}

function checkForWinO(O) {
  // HORIZONTAL LINES //

  if (
    cells[0].innerHTML == 'O' &&
    cells[1].innerHTML == 'O' &&
    cells[2].innerHTML == 'O'
  )
    OgameIsOver = true
  else if (
    cells[3].innerHTML == 'O' &&
    cells[4].innerHTML == 'O' &&
    cells[5].innerHTML == 'O'
  )
    OgameIsOver = true
  else if (
    cells[6].innerHTML == 'O' &&
    cells[7].innerHTML == 'O' &&
    cells[8].innerHTML == 'O'
  )
    OgameIsOver = true

  // VERTICAL LINES //

  if (
    cells[0].innerHTML == 'O' &&
    cells[3].innerHTML == 'O' &&
    cells[6].innerHTML == 'O'
  )
    OgameIsOver = true
  else if (
    cells[1].innerHTML == 'O' &&
    cells[4].innerHTML == 'O' &&
    cells[7].innerHTML == 'O'
  )
    OgameIsOver = true
  else if (
    cells[2].innerHTML == 'O' &&
    cells[5].innerHTML == 'O' &&
    cells[8].innerHTML == 'O'
  )
    OgameIsOver = true

  // DIAGONAL LINES //

  if (
    cells[0].innerHTML == 'O' &&
    cells[4].innerHTML == 'O' &&
    cells[8].innerHTML == 'O'
  )
    OgameIsOver = true
  else if (
    cells[2].innerHTML == 'O' &&
    cells[4].innerHTML == 'O' &&
    cells[6].innerHTML == 'O'
  )
    OgameIsOver = true

  if (OgameIsOver == true) {
    console.log('gameover! O wins!')
    message = 'Game Over! O Wins!'
    subtitle.textContent = message
    gameEnd()

    // update the subtitle with the winner
  }
}

//This doesn't work -> So I just updated the HTML because that works.

// let button = document.getElementById('button')

// button.onclick = restart()

function restart() {
  console.log('restart')
  cells[0].textContent = ''
  cells[1].textContent = ''
  cells[2].textContent = ''
  cells[3].textContent = ''
  cells[4].textContent = ''
  cells[5].textContent = ''
  cells[6].textContent = ''
  cells[7].textContent = ''
  cells[8].textContent = ''
  XgameIsOver = false
  OgameIsOver = false
}

function gameEnd() {
  console.log('GAMEOVER')
  for (let i = 0; i < cells.length; i++)
    if (cells[i].innerHTML == '') {
      cells[i].innerHTML = ' '
    }
}

//////////////////////

/* I've decided to leave my 'experimental code here for my own reference but I have decided to follow along with the github instructions, simply because there is a lot of extra stuff in there that I haven't learnt about yet. 

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = placeCounter
}

function placeCounter() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = 'o'
  }
}

/*Start message <- make it invisible
function startMessage {
  if (turn > 0)
  { add class of invisible to startMessage

  }
}


/*
cells[0].onclick.innerHTML = 'X'

cells[1].innerHTML = 'X'

cells[2].innerHTML = 'O'

cells[3].innerHTML = 'O'

cells[4].innerHTML = 'O'

cells[5].innerHTML = 'O'

cells[6].innerHTML = 'X'

cells[7].innerHTML = 'X'

cells[8].innerHTML = 'O' */

/*Plan
We have a table
When someone clicks we want to add .innerHTML X or O
How would we change the persons turn??
maybe just when click- if variable = X change to O else change to O

==Code to take turns==
/*Maybe this needs to be a switch case, so we can add breaks*/

/*
function takeTurn() {
  if (turn === 'x') {
    turn = 'y'
  } else if (turn === 'y') {
    turn = 'x'
  }

  console.log(turn)
}

cells[1].onclick = takeTurn

/*
==Placing a counter==
*/

/*
function placeCounter {
for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = changeCounter

}
}



function changeCounter() {
  if (turn === 'x') {
    document.getElementsByTagName('TD').innerHTML = 'X'
  } else if (turn === 'y') {
    document.getElementsByTagName('TD').innerHTML = 'Y'
  }
}

*/

/*



==To Figure out who wins==
To figure out who wins we could do something like name the cells A1, A2, A3 if all A and ===TRUE then WIN or if all 1,1,1 and TRUE then win
or something like R===R===R and  allTRUE win
if C===C===C and all TRUE win
if R!=R!=R and all TRUE

maybe it would be easier to just type out all 8 winning combos? - at least at first, and then we can refine

t iterator for turns odds and even could be x's and o's

*/

/*function checkForWin() {
  if ((cells.textContent = !'')) checkForWinner()

  console.log(gameIsOver)
}

function checkForWinner() {
  if ((cells[0].innerHTML == cells[1].innerHTML) == cells[2].innerHTML)
    gameIsOver = true
}*/
