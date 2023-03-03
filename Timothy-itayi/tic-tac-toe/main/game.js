
const squares = document.querySelectorAll("#board .square");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let isGameOver = false;

function handleMove(square, index) {
  if (isGameOver) return;

  if (square.textContent !== "") {
    message.textContent = "Invalid move";
    return;
  }

  square.textContent = currentPlayer;

  if (checkForWin()) {
    message.textContent = `${currentPlayer} WON!`;
    isGameOver = true;
    return;
  }

  if (checkForDraw()) {
    message.textContent = "It's a draw";
    isGameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  message.textContent = `${currentPlayer}'s turn`;
}

function checkForWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombos.some((combo) => {
    return combo.every((index) => {
      return squares[index].textContent === currentPlayer;
    });
  });
}

function checkForDraw() {
  return [...squares].every((square) => {
    return square.textContent !== "";
  });
}

function resetGame() {
  squares.forEach((square) => {
    square.textContent = "";
  });
  currentPlayer = "X";
  isGameOver = false;
  message.textContent = `${currentPlayer}'s turn`;
}

squares.forEach((square, index) => {
  square.addEventListener("click", () => handleMove(square, index));
});

resetButton.addEventListener("click", resetGame);


console.log("Welcome to Tic-Tac-Toe! Enjoy!")


