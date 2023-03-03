console.log("Welcome to Tic-Tac-Toe! Enjoy!");

let noughtsTurn = true;

//get the array of all the cells
const cells = document.querySelectorAll("td");

//binding the onclick method to each cell and display 
for (let x of cells) {
  x.addEventListener("click", () => {
    if (noughtsTurn) {
      x.innerHTML = "O";
      noughtsTurn = false;
    } else {
      x.innerHTML = "X";
      noughtsTurn = true;
    }
  });
}
