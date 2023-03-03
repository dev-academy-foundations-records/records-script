console.log('Welcome to Tic-Tac-Toe! Enjoy!');

let cells = document.getElementsByTagName('TD');
let noughtsTurn = true;
let gameIsOver = false;

function checkForWin(symbol) {
  // if a symbol appears three times in a row in the board cells i.e. a winning line

  // either horizontally, vertically, OR diagonally

  // the game is over

  // HORIZONTAL LINES //
  if (
    (cells[0].innerHTML == symbol &&
      cells[1].innerHTML == symbol &&
      cells[2].innerHTML == symbol) ||
    (cells[3].innerHTML == symbol &&
      cells[4].innerHTML == symbol &&
      cells[5].innerHTML == symbol) ||
    (cells[6].innerHTML == symbol &&
      cells[7].innerHTML == symbol &&
      cells[8].innerHTML == symbol)
  ) {
    gameIsOver = true;
  }

  // VERTICAL LINES //
  else if (
    (cells[0].innerHTML == symbol &&
      cells[3].innerHTML == symbol &&
      cells[6].innerHTML == symbol) ||
    (cells[1].innerHTML == symbol &&
      cells[4].innerHTML == symbol &&
      cells[7].innerHTML == symbol) ||
    (cells[2].innerHTML == symbol &&
      cells[5].innerHTML == symbol &&
      cells[8].innerHTML == symbol)
  ) {
    gameIsOver = true;
  }

  // VERTICAL LINES //
  else if (
    (cells[0].innerHTML == symbol &&
      cells[4].innerHTML == symbol &&
      cells[8].innerHTML == symbol) ||
    (cells[2].innerHTML == symbol &&
      cells[4].innerHTML == symbol &&
      cells[6].innerHTML == symbol)
  ) {
    gameIsOver = true;
  }

  // An alternative way to write all of that:
  //   if (symbol != '') {
  //     if (
  //       cells[0].innerHTML == symbol &&
  //       cells[1].innerHTML == symbol &&
  //       cells[2].innerHTML == symbol
  //     )
  //       gameIsOver = true;
  //     else if (
  //       cells[3].innerHTML == symbol &&
  //       cells[4].innerHTML == symbol &&
  //       cells[5].innerHTML == symbol
  //     )
  //       gameIsOver = true;
  //     else if (
  //       cells[6].innerHTML == symbol &&
  //       cells[7].innerHTML == symbol &&
  //       cells[8].innerHTML == symbol
  //     )
  //       gameIsOver = true;
  //     else if (
  //       cells[0].innerHTML == symbol &&
  //       cells[3].innerHTML == symbol &&
  //       cells[6].innerHTML == symbol
  //     )
  //       gameIsOver = true;
  //     else if (
  //       cells[1].innerHTML == symbol &&
  //       cells[4].innerHTML == symbol &&
  //       cells[7].innerHTML == symbol
  //     )
  //       gameIsOver = true;
  //     else if (
  //       cells[2].innerHTML == symbol &&
  //       cells[5].innerHTML == symbol &&
  //       cells[8].innerHTML == symbol
  //     )
  //       gameIsOver = true;
  //     else if (
  //       cells[0].innerHTML == symbol &&
  //       cells[4].innerHTML == symbol &&
  //       cells[8].innerHTML == symbol
  //     )
  //       gameIsOver = true;
  //     else if (
  //       cells[2].innerHTML == symbol &&
  //       cells[4].innerHTML == symbol &&
  //       cells[6].innerHTML == symbol
  //     )
  //       gameIsOver = true;
  //   }
}

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked;
}

// function for handling clicks on cells
function cellClicked(e) {
  // create a variable for the clicked cell so I can do stuff with it
  let cell = e.target;

  // if the cell is empty (check it's .innerHTML property)
  // figure out which symbol to put inside the cell ("O" or "X" based on the naughtsTurn boolean)
  // if ((cell.innerHTML == '') & (noughtsTurn === true)) {
  // put the symbol inside the cell (by using .innerHTML again)

  if ((cell.innerHTML == '') & (gameIsOver === false)) {
    noughtsTurn === true
      ? (symbol = 'O') & (noughtsTurn = false)
      : (symbol = 'X') & (noughtsTurn = true);
    cell.innerHTML = symbol;
    document.getElementById('subtitle').textContent = `${
      symbol === 'X' ? 'Noughts' : 'Crosses'
    } go now`;

    checkForWin(symbol);

    // if the game is over
    if (gameIsOver === true) {
      // update the subtitle with the winner
      document.getElementById('subtitle').textContent = `${
        symbol === 'O' ? 'Noughts' : 'Crosses'
      } won!`;
    }
  }
}
