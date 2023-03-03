// Selectors
const cells = document.querySelectorAll("td");
const audio = new Audio("./whack-audio.wav");
let score = document.querySelector("#score");
let highestScore = document.querySelector("#highest");
let previousNum;
let highestCounter = localStorage?.getItem("highestScore") || 0;
let counter = 0;
let timer = 10 * 1000;


init();
// init
function init() {
  counter = 0;
  selectRandomCell();
  setTimeout(() => {
    gameOver();
  }, timer);

  score.innerHTML = counter;
  highestScore.innerHTML = highestCounter;
}

// Functions
function selectRandomCell() {
  let randomNum = Math.floor(Math.random() * cells.length);
  if (previousNum === randomNum) {
    if (randomNum === cells.length - 1) {
      randomNum = randomNum - 1;
    } else {
      randomNum = randomNum + 1;
    }
  }
  let randomCell = cells[randomNum];
  randomCell.innerHTML = `<img class="mole" src="./mole.PNG" alt="mole" />`;
  document
    .querySelector(".mole")
    .addEventListener("click", () => cellClicked(randomCell));
  previousNum = randomNum;
}

function cellClicked(cell) {
  audio.play();
  counter++;
  if (counter > highestCounter) {
    highestCounter = counter;
    localStorage.setItem("highestScore", highestCounter);
  }
  score.innerHTML = counter;
  highestScore.innerHTML = highestCounter;
  cell.innerHTML = "";
  selectRandomCell();
}

function gameOver() {
  cells[previousNum].innerHTML = "";
  alert(`Your score is ${counter}. Congratulations!`);
  init();
}
