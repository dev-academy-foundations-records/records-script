// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!');

// - The ability to store or get references to the cells in the HTML table.

const cells = document.getElementsByTagName('td');

// - A function to randomly select which cell should show the mole.

let chosenCell = Math.trunc(Math.random() * (cells.length - 1));

function chooseCell() {
  chosenCell = Math.trunc(Math.random() * (cells.length - 1));
}

// - A way to show a mole in the chosen cell.

cells[chosenCell].innerHTML = "<img width = '100%' src= 'mole.PNG' >";

const audio = new Audio('whack-audio.wav');

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function () {
    if (i === chosenCell) {
      cells[chosenCell].innerHTML = '';
      chooseCell();
      audio.play();
      cells[chosenCell].innerHTML = "<img width='100%' src='mole.PNG' >";
    }
  });
}
