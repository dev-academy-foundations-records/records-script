// HTML Selectors
let cells = document.querySelectorAll("td");

// Variables
const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let p1 = [];
let p2 = [];
let p1Turn = true;
let com = "p2";
let winner;
let p1Score = 0;
let p2Score = 0;
document.querySelector(".p1__score").innerHTML = p1Score;
document.querySelector(".p2__score").innerHTML = p2Score;

// Event Listeners
cells.forEach((el, i) => {
  el.addEventListener("click", (e) => selectBox(e, i));
});

// Functions
function init() {
  p2 = [];
  p1 = [];
  com = "p2";
  winner = "";
  cells.forEach((el, i) => {
    el.addEventListener("click", (e) => selectBox(e, i));
    el.className = "";
  });
  document.querySelector(".p1__score").innerHTML = p1Score;
  document.querySelector(".p2__score").innerHTML = p2Score;

  if (!p1Turn) comTurn();
}

function assignTurn() {
  if (p1Turn) {
  } else {
  }
}

function selectBox(e, i) {
  e.preventDefault();
  if (!e.target.classList.value) {
    // 2 Players Mode
    // p1Turn ? e.target.classList.add("x") : e.target.classList.add("o");
    // p1Turn ? p1.push(i) : p2.push(i);

    e.target.classList.add("x");
    p1.push(i);
    if (!checkResult(p1)) {
      comTurn();
    }
  }
}

function findEmptySlot() {
  let selected = p1.concat(p2);
  let empty = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter(
    (el) => !selected.includes(el)
  );
  let select = empty[Math.floor(Math.random() * empty.length)];

  return select;
}

function comTurn() {
  let select = findEmptySlot();
  cells[select].classList.add("o");
  p2.push(select);
  checkResult(p2);
  p1Turn = true;
  return select;
}

function checkResult(player) {
  if (
    winningCondition.some((el) =>
      el.every((element) => player.indexOf(element) >= 0)
    )
  ) {
    player === p1 ? p1Score++ : p2Score++;
    win(player);
    return player;
  } else if (findEmptySlot() === undefined) {
    win("draw");
    return "draw";
  }
}

function win(player) {
  if (player === "draw") {
    cells.forEach((el) => {
      el.classList.add("lose");
    });
  } else {
    player.forEach((el) => {
      cells[el].classList.add("win");
    });
    cells.forEach((el) => {
      if (el.classList.value.indexOf("win") < 0) {
        el.classList.add("lose");
      }
    });
    player === p1 ? (p1Turn = false) : (p1Turn = true);
  }
  setTimeout(() => {
    init();
  }, 4000);
}
