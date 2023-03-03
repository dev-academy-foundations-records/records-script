document.addEventListener("DOMContentLoaded", startGame);

// Define your `board` object here!
const board = {
  cells: [
    { row: 0, col: 0, isMine: true, hidden: true, isMarked: false },
    { row: 0, col: 1, isMine: true, hidden: true, isMarked: false },
    { row: 0, col: 2, isMine: false, hidden: true, isMarked: false },
    { row: 1, col: 0, isMine: false, hidden: true, isMarked: false },
    { row: 1, col: 1, isMine: false, hidden: true, isMarked: false },
    { row: 1, col: 2, isMine: false, hidden: true, isMarked: false },
    { row: 2, col: 0, isMine: false, hidden: true, isMarked: false },
    { row: 2, col: 1, isMine: false, hidden: true, isMarked: false },
    { row: 2, col: 2, isMine: false, hidden: true, isMarked: false },
  ],
};

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
  const newCells=board.cells.filter(cell => {
    if ((cell.isMine === false && cell.hidden === false) || (cell.isMine && cell.isMarked)) {
    }
  })
  
  if (newCells.length === board.cells.length) {
    
  }
 
  
 
  // if (winCount === board.cells.length) {
  //   return lib.displayMessage('You win!')
  // }
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
