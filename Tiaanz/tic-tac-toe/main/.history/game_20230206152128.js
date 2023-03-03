console.log("Welcome to Tic-Tac-Toe! Enjoy!");

let noughtsTurn = true;
let gameIsOver;

//get the array of all the cells
const cells = document.querySelectorAll("td");

cells[0].innerHTML = "X"


//get the h2 element with the id of subtitle
const subtitle = document.querySelector("#subtitle");

/*binding the onclick method to each cell and display "X" or
"O" by turns*/
for (let i = 0; i < cells.length; i++) {
  let cell;
  cells[i].addEventListener("click", (e) => {
    if (noughtsTurn) {
      cells[i].innerHTML = "O";
      checkForWin("O");
      noughtsTurn = false;
      subtitle.innerHTML = "It's now X's turn";
    } else {
      cells[i].innerHTML = "X";
      checkForWin(cells[i].innerHTML);
      noughtsTurn = true;
      subtitle.innerHTML = "It's now O's turn";
      cell = e.target;
    }
  });
}

function checkForWin(symbol) {
    console.log(cells[1].innerHTML);
  if (
    cells[0].innerHTML === cells[1].innerHTML &&
    cells[1].innerHTML === cells[2].innerHTML
  ) {
    console.log(symbol + "won");
  } else if (
    cells[3].innerHTML === cells[4].innerHTML &&
    cells[4].innerHTML === cells[5].innerHTML
  ) {
    console.log(symbol + "won");
  } else if (
    cells[6].innerHTML === cells[7].innerHTML &&
    cells[7].innerHTML === cells[8].innerHTML
  ) {
    console.log(symbol + "won");
  } else if (
    cells[0].innerHTML === cells[3].innerHTML &&
    cells[3].innerHTML === cells[6].innerHTML
  ) {
    console.log(symbol + "won");
  } else if (
    cells[1].innerHTML === cells[4].innerHTML &&
    cells[4].innerHTML === cells[7].innerHTML
  ) {
    console.log(symbol + "won");
  } else if (
    cells[2].innerHTML === cells[5].innerHTML &&
    cells[5].innerHTML === cells[8].innerHTML
  ) {
    console.log(symbol + "won");
  } else if (
    cells[0].innerHTML === cells[4].innerHTML &&
    cells[4].innerHTML === cells[8].innerHTML
  ) {
    console.log(symbol + "won");
  } else if (
    cells[2].innerHTML === cells[4].innerHTML &&
    cells[4].innerHTML === cells[6].innerHTML
  ) {
    console.log(symbol + "won");
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
    console.log("It is a draw.");
  }
}
