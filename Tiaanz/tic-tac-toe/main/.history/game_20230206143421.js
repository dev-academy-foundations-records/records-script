console.log("Welcome to Tic-Tac-Toe! Enjoy!");

let noughtsTurn = true;
let gameIsOver

//get the array of all the cells
const cells = document.querySelectorAll("td");
//get the h2 element with the id of subtitle
const subtitle=document.querySelector("#subtitle")

/*binding the onclick method to each cell and display "X" or
"O" by turns*/
for (leti = 0; i < cells.length;i++) {
    let cell
  cells[i].addEventListener("click", (e) => {
    if (noughtsTurn) {
      cells[].innerHTML = "O";
        noughtsTurn = false;
        subtitle.innerHTML = "It's now X's turn"
        cell = e.target
        console.log(e);
    } else {
      x.innerHTML = "X";
        noughtsTurn = true;
        subtitle.innerHTML = "It's now O's turn"
        cell = e.target
        console.log(e);
    }
  });
}

function checkForWin() {
    
}
