console.log("Welcome to Tic-Tac-Toe! Enjoy!");

let noughtsTurn = true;

//get the array of all the cells
const cells = document.querySelectorAll("td");
//get the h2 element with the id of subtitle
const subtitle=document.querySelector("#subtitle")

/*binding the onclick method to each cell and display "X" or
"O" by turns*/
for (let x of cells) {
    let cell
  x.addEventListener("click", (e) => {
    if (noughtsTurn) {
      x.innerHTML = "O";
        noughtsTurn = false;
        subtitle.innerHTML = "It's now X's turn"
        cell = e.target
        console.log(e);
    } else {
      x.innerHTML = "X";
        noughtsTurn = true;
        subtitle.innerHTML = "It's now O's turn"
        cell = e.target
        console.log(cell);
    }
  });
}
