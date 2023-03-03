console.log("Welcome to Tic-Tac-Toe! Enjoy!");

let gameIsOver = false;
let gameIsDraw = false;
let player = whoGoesFirst();
let xWonnCount = 0
let oWonCount=0

//get the array of all the cells
const cells = document.querySelectorAll("td");

//get the h2 element with the id of subtitle
const subtitle = document.querySelector("#subtitle");

//get the button that resets the game
const resetGame = document.querySelector("#resetGame");
resetGame.addEventListener("click", () => {
  if (gameIsDraw || gameIsOver) {
    for (let x of cells) {
      x.innerHTML = "";
    }
    subtitle.innerHTML = "Click on a cell to start!";
    subtitle.style.color = "#4c2c92";

    player = whoGoesFirst();
    gameIsOver = false;
    gameIsDraw = false;
  }
});

//Randomise which player takes the first turn, X or O. 
function whoGoesFirst() {
  const players = ["Noughts", "Cross"];
    const firstTurn = Math.floor(Math.random() * players.length);
    return players[firstTurn]
}


/*binding the onclick method to each cell and display "X" or
"O" by turns*/
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", (e) => {
    if (player==="Noughts" && !gameIsDraw && !gameIsOver) {
      cells[i].innerHTML = "O";
      checkForWin("O");
      if (gameIsOver) {
        subtitle.innerHTML = "O won the game";
          subtitle.style.color = "blue";
          oWonCount+=1
      } else if (gameIsDraw) {
        subtitle.innerHTML = "It is a draw";
      } else {
        player = "Cross";
        subtitle.innerHTML = "It's now X's turn";
      }
    } else if (player==="Cross" && !gameIsDraw && !gameIsOver) {
      cells[i].innerHTML = "X";
      checkForWin("X");
      if (gameIsOver) {
        subtitle.innerHTML = "X won the game";
        subtitle.style.color = "red";
      } else if (gameIsDraw) {
        subtitle.innerHTML = "It is a draw";
        subtitle.style.color = "green";
      } else {
        player = "Noughts";
        subtitle.innerHTML = "It's now O's turn";
      }
    }
  });
}

// declare a function to check who win the game
function checkForWin(symbol) {
  if (
    cells[0].innerHTML === symbol &&
    cells[1].innerHTML === symbol &&
    cells[2].innerHTML === symbol
  ) {
    gameIsOver = true;
  } else if (
    cells[3].innerHTML === symbol &&
    cells[4].innerHTML === symbol &&
    cells[5].innerHTML === symbol
  ) {
    gameIsOver = true;
  } else if (
    cells[6].innerHTML === symbol &&
    cells[7].innerHTML === symbol &&
    cells[8].innerHTML === symbol
  ) {
    gameIsOver = true;
  } else if (
    cells[0].innerHTML === symbol &&
    cells[3].innerHTML === symbol &&
    cells[6].innerHTML === symbol
  ) {
    gameIsOver = true;
  } else if (
    cells[1].innerHTML === symbol &&
    cells[4].innerHTML === symbol &&
    cells[7].innerHTML === symbol
  ) {
    gameIsOver = true;
  } else if (
    cells[2].innerHTML === symbol &&
    cells[5].innerHTML === symbol &&
    cells[8].innerHTML === symbol
  ) {
    gameIsOver = true;
  } else if (
    cells[0].innerHTML === symbol &&
    cells[4].innerHTML === symbol &&
    cells[8].innerHTML === symbol
  ) {
    gameIsOver = true;
  } else if (
    cells[2].innerHTML === symbol &&
    cells[4].innerHTML === symbol &&
    cells[6].innerHTML === symbol
  ) {
    gameIsOver = true;
  } else if (
    cells[0].innerHTML !== "" &&
    cells[1].innerHTML !== "" &&
    cells[2].innerHTML !== "" &&
    cells[3].innerHTML !== "" &&
    cells[4].innerHTML !== "" &&
    cells[5].innerHTML !== "" &&
    cells[6].innerHTML !== "" &&
    cells[7].innerHTML !== "" &&
    cells[8].innerHTML !== ""
  ) {
    gameIsDraw = true;
  }
}
