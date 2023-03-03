console.log("Welcome to Tic-Tac-Toe! Enjoy!")

// make a varriable for subtitle
let subtitle = document.getElementById("subtitle")

// make an array of cells
let cells = document.getElementsByTagName("TD")

// crosses trun first
let noughtsTurn = false

//initalising this to use later when game over
let gameIsOver = false

// refer to reset button in html
let resetButton = document.getElementById("resetButton");

// call resetGame function when clicked
resetButton.addEventListener("click", resetGame);

// calling the function when any cell is clicked

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

// function for what happens when cells are clicked

function cellClicked(e) {

  // create a variable to specify which cell we are interacting with
  let cell = e.target
  // if cell is empty
  if (cell.innerHTML == "") {
    // figure out which symbol to put inside, X or O
    let symbol = (noughtsTurn ? "O" : "X")
    // put the symbol inside the cell
    cell.innerHTML = symbol
    // check to see if that move wins the game (using a new fuction)
    if (checkForWin(symbol) == false) {
      //if game still going switch to other player
      noughtsTurn =! noughtsTurn
      //check who's turn is next
      turn = noughtsTurn ? "O" : "X"
     //update the subtitle saying whose turn it is
      subtitle.innerHTML = `${turn}'s turn.`

    }
  }
}

// check if move wins the game
//the function takes a string X or O through parameter symbol
function checkForWin(symbol) {
  
  // if a symbol appear three times in a row on the board
  // horizontally
  if (cells[0].innerHTML == symbol
      && cells[1].innerHTML == symbol
      && cells[2].innerHTML == symbol) {
        gameIsOver = true
      }
  else if (cells[3].innerHTML == symbol
    && cells[4].innerHTML == symbol
    && cells[5].innerHTML == symbol) {
      gameIsOver = true
    }
  else if (cells[6].innerHTML == symbol
    && cells[7].innerHTML == symbol
    && cells[8].innerHTML == symbol) {
      gameIsOver = true
    }
  // vertically
    if (cells[0].innerHTML == symbol
      && cells[3].innerHTML == symbol
      && cells[6].innerHTML == symbol) {
        gameIsOver = true
      }
    else if (cells[1].innerHTML == symbol
    && cells[4].innerHTML == symbol
    && cells[7].innerHTML == symbol) {
      gameIsOver = true
    }
    else if (cells[2].innerHTML == symbol
    && cells[5].innerHTML == symbol
    && cells[8].innerHTML == symbol) {
      gameIsOver = true
    } 
    // diagonally
    if (cells[0].innerHTML == symbol
      && cells[4].innerHTML == symbol
      && cells[8].innerHTML == symbol) {
        gameIsOver = true
      }
    else if (cells[2].innerHTML == symbol
    && cells[4].innerHTML == symbol
    && cells[6].innerHTML == symbol) {
      gameIsOver = true
    }
     // check if game is over 
    if (gameIsOver == true) {
      subtitle.innerHTML = symbol + " has won the game!"
    }
    // let cellClicked know if the game is over
    return gameIsOver
  }

  // resetGame function when clicked
  function resetGame() {
  // change all cells to empty
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  // back to crosses turn
  noughtsTurn = false;
  subtitle.innerHTML = "X's turn.";
  // make the gameover not false
  gameIsOver = false;
}

