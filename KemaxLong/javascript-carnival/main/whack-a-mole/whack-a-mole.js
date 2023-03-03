// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// console.log("Whack-a-Mole!")
let cells = document.getElementsByTagName('TD')

// random cell selector -- from 0 - 25
function ToGetRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1
}

// let randownIndex = ToGetRandomNumber(25)

// let randomCell = cells[randownIndex]

//show the mole

let image = document.createElement('img')
image.setAttribute('src', './mole.PNG')
image.setAttribute('id', 'mole')
image.setAttribute('height', 75)
image.setAttribute('width', 75)

// randomCell.appendChild(image)
// let randomIndex = ToGetRandomNumber(25)
// let randomCell = cells[randomIndex]
// randomCell.appendChild(image)

// create an audio elemnt

let audio = new Audio('./whack-audio.wav')

//Whack that mole

// Add a click event listener to each cell
for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = function () {
    // If the cell contains the mole, remove it and add it to a different cell
    if (this.contains(image)) {
      this.removeChild(image)
      let newCellIndex = ToGetRandomNumber(25)
      let newCell = cells[newCellIndex]
      newCell.appendChild(image)
      audio.play()
    }
  }
}

// Start the game by adding the mole to a random cell
let randomIndex = ToGetRandomNumber(25)
cells[randomIndex].appendChild(image)
