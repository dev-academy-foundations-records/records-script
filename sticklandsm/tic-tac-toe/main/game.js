console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('td')

let turnCount = 0
let noughtsTurn = true
let gameIsOver = false
let winner

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
  cells[i].id = i
}

function checkForWin(symbol, cell) {
  //This convulated mess checks if the surrounding squares have the same symbol in an up, down, diagonal fashion etc.

  //for loop loops through each square surrounding.
  for (let i = -4; i < 8; i++) {
    //excludes checking it's own cell.
    if (i != 0) {
      //had to put this if statement in to avoid error messages about trying to gett innerHTML of undefined things.
      if (
        parseInt(cell.id) + i >= 0 &&
        parseInt(cell.id) + i * 2 >= 0 &&
        parseInt(cell.id) + i < 9 &&
        parseInt(cell.id) + i * 2 < 9
      ) {
        //Actually checks the the cells all around it.
        if (
          cells[parseInt(cell.id) + i].innerHTML == symbol &&
          cells[parseInt(cell.id) + i * 2].innerHTML == symbol
        ) {
          console.log('last cell picked was: ', cell.id)
          console.log(
            'won because cell ',
            parseInt(cell.id) + i,
            'and ',
            parseInt(cell.id) + i * 2,
            'were filled'
          )
          cell.style.color = 'red'
          cells[parseInt(cell.id) + i].style.color = 'green'
          cells[parseInt(cell.id) + i * 2].style.color = 'red'
          winner = symbol
          gameIsOver = true
          break
        }
      }

      if (
        parseInt(cell.id) + i >= 0 &&
        parseInt(cell.id) - i >= 0 &&
        parseInt(cell.id) + i < 9 &&
        parseInt(cell.id) - i < 9
      ) {
        if (
          cells[parseInt(cell.id) + i].innerHTML == symbol &&
          cells[parseInt(cell.id) - i].innerHTML == symbol
        ) {
          cell.style.color = 'red'
          cells[parseInt(cell.id) + i].style.color = 'blue'
          cells[parseInt(cell.id) - i].style.color = 'red'
          winner = symbol
          gameIsOver = true
          break
        }
      }
    }
  }
}

// function for handling clicks on cells
function cellClicked(e) {
  // create a variable for the clicked cell so I can do stuff with it
  let cell = e.target
  let symbol = noughtsTurn ? 'O' : 'X'
  // if the cell is empty (check it's .innerHTML property)
  if (cell.innerHTML == '') {
    // figure out which symbol to put inside the cell ("O" or "X" based on the naughtsTurn boolean)
    // put the symbol inside the cell (by using .innerHTML again)
    cell.innerHTML = symbol
    // check to see if the player won with that move (probably using a new function, like checkForWin() which I'll need to write later)

    checkForWin(symbol, cell)

    // if the game isn't over
    if (!gameIsOver) {
      // switch to the other player (using the naughtsTurn boolean again)
      noughtsTurn = !noughtsTurn

      // update the subtitle saying whose turn it is now
      symbol = noughtsTurn ? 'O' : 'X'
      document.getElementById(
        'subtitle'
      ).innerHTML = `It is now ${symbol}'s turn!`
      turnCount++
      console.log('turn number: ', turnCount)
    } else {
      document.getElementById(
        'subtitle'
      ).innerHTML = `Game Over. ${winner} wins`
    }
  }
}
