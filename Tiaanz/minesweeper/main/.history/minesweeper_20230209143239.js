document.addEventListener("DOMContentLoaded", startGame);

const ROW = 3;


//Define your `board` object here!
class Cell{
  constructor(row,col,isMine,hidden,isMarked) {
    this.row = row
    this.col = col
    this.isMine = true
    this.hidden = true
    this.isMarked=false
  }
}

let cells=[]

for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    const cell = new Cell(i, j)
    cells=[...cells,cell]
  }
}

const board = {
  cells: cells
};




console.log(cells);


function startGame() {
  for (let x of board.cells) {
    x.surroundingMines = countSurroundingMines(x);
  }
  document.addEventListener("click", (e) => {
    checkForWin(e);
    console.log(board.cells);
  });
  document.addEventListener("contextmenu", (e) => {
    checkForWin(e);
    console.log(board.cells);
  });

  // Don't remove this function call: it makes the game work!
  lib.initBoard();
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin(event) {
  event.preventDefault();
  const newCells=board.cells.filter(cell => 
    (cell.isMine === false && cell.hidden === false) || (cell.isMine && cell.isMarked) 
  )
  if (newCells.length === board.cells.length) {
    return lib.displayMessage('You win!')
  }
 
}
 
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   const surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.

  function countSurroundingMines(cell) {
    let count = 0;
    const surrounding = lib.getSurroundingCells(cell.row, cell.col);
    for (let x of surrounding) {
      if (x.isMine) {
        count++;
      }
    }
    return count;
  }
