document.addEventListener("DOMContentLoaded", startGame);

function createBoard(row, col, mine) {
  let board = {
    cells: [],
  };
  let setRow = 0;
  let setCol = 0;

  for (let i = 0; i < row * col; i++) {
    if (setCol >= col) {
      setRow++;
      setCol = 0;
    }
    board.cells.push({
      row: setRow,
      col: setCol,
      hidden: true,
      isMine: false,
    });
    setCol++;
  }

  for (let i = 0; i < mine; i++) {
    let randomNum = Math.floor(Math.random() * board.cells.length);
    if (!board.cells[randomNum].isMine) {
      board.cells[randomNum].isMine = true;
    } else {
      i--;
    }
  }

  return board;
}

// const board = {
//   cells: [
//     { row: 0, col: 0, isMine: false, hidden: true },
//     { row: 1, col: 0, isMine: false, hidden: true },
//     { row: 0, col: 1, isMine: false, hidden: true },
//     { row: 1, col: 1, isMine: false, hidden: true },
//     { row: 0, col: 2, isMine: false, hidden: true },
//     { row: 2, col: 0, isMine: true, hidden: true },
//     { row: 1, col: 2, isMine: false, hidden: true },
//     { row: 2, col: 1, isMine: false, hidden: true },
//     { row: 2, col: 2, isMine: false, hidden: true },
//   ],
// };
const board = createBoard(6, 6, 10);

function startGame() {
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard();
  document.addEventListener("click", checkForWin);
}

function checkForWin() {
  for (let i = 0; i < board.cells.length; i++) {
    if (!board.cells[i].isMine) {
      if (board.cells[i].hidden || !board.cells[i].isProcessed) {
        console.log(board.cells[i]);
        return null;
      }
    }
  }
  return lib.displayMessage("You win!");
}

function countSurroundingMines(cell) {
  const surroundingCells = getSurroundingCells(cell.row, cell.col);

  let count = surroundingCells.filter((el) => el.isMine === true).length;
  return count ? count : "0";
}
