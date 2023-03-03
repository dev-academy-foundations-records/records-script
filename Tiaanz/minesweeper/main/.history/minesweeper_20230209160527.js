document.addEventListener("DOMContentLoaded", startGame);

const ROW = 3;
const COLUMN = 3;
const MINE_NUMBER = 2;

//Define your `board` object here!
class Cell {
  constructor(row, col, isMine) {
    this.row = row;
    this.col = col;
    this.isMine = isMine;
    this.hidden = true;
    this.isMarked = false;
  }
}

let mineCount = 0;
function getRandomMine() {
  let isMine;
  const num = Math.floor(Math.random() * 2);
  if (num === 0) {
    return (isMine = false);
  } else {
    mineCount++;
    if (mineCount > MINE_NUMBER) {
      return (isMine = false);
    } else {
      return (isMine = true);
    }
  }
}

function createCells(row, col) {
  let cells = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const cell = new Cell(i, j, getRandomMine());
      cells = [...cells, cell];
    }
  }
  return cells;
}

function createBoard(row, col) {
  const board = {
    cells: createCells(row, col),
  };
  return board;
}

let board = createBoard(ROW, COLUMN);
console.log(board);

function startGame() {
  
  // Don't remove this function call: it makes the game work!
  lib.initBoard();

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

  

  const resetBtn = document.querySelector("#resetBtn");
 
  const cells = document.querySelectorAll('.cells')

  resetBtn.addEventListener("click", () => {
    cells.forEach(cell => {
      cell.classList.remove('marked', 'mine')
      cell.classList.add('hidden')
      cell.innerHTML=""
    })
    console.log("clicked");
  });
 
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin(event) {
  event.preventDefault();
  const newCells = board.cells.filter(
    (cell) =>
      (cell.isMine === false && cell.hidden === false) ||
      (cell.isMine && cell.isMarked)
  );
  if (newCells.length === board.cells.length) {
    return lib.displayMessage("You win!");
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
