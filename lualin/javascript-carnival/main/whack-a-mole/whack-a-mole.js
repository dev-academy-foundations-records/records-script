// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// Table and image const variables
const moleTable = document.getElementById('moles-table')
const moleImagePath = 'mole.PNG'
const startGameBtn = document.getElementById('start-btn')
const restartGameBtn = document.getElementById('restart-btn')
const whackCountHeading = document.getElementById('whack-count')

// Whack count
let whackCount = 0

// Audio
const whackAudio = new Audio('whack-audio.wav')

function getRandomIndex() {
  // Gets random row index
  let rowCount = moleTable.rows.length
  let randomRow = Math.floor(Math.random() * rowCount)
  let selectedRow = moleTable.rows[randomRow]
  let rowIndex = selectedRow.rowIndex

  // Gets random column index from selected row which was declared above
  let cellCount = selectedRow.cells.length
  let randomCell = Math.floor(Math.random() * cellCount)
  let selectedCell = selectedRow.cells[randomCell]
  let cellIndex = selectedCell.cellIndex

  return [rowIndex, cellIndex]
}

// Adds mole image on random cell
function addImage() {
  let [rowIndex, cellIndex] = getRandomIndex()
  let selectedRow = moleTable.rows[rowIndex]
  let selectedCell = selectedRow.cells[cellIndex]

  const addedImage = document.createElement('img')

  // Adds image to the selected cell
  addedImage.src = moleImagePath
  selectedCell.appendChild(addedImage)

  // When click on the cell, removes the current image and gets new random cell to add image
  selectedCell.addEventListener('click', function () {
    let hasImg = false
    // Count increase every time the selected cell gets clicked
    whackCount++
    whackCountHeading.innerHTML = 'Count: ' + whackCount

    // Plays .wav file when image is clicked
    whackAudio.play()

    // Check if the cell has image tag, if yes proceed.
    if (selectedCell.querySelector('img')) {
      hasImg = true
    }
    if (hasImg) {
      deleteImage()
    }
  })
}

// Deletes the image from previous cell
function deleteImage() {
  // Deletes image in all cells
  let cells = document.querySelectorAll('td')
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = ''
  }

  // Add new image
  addImage()
}

// Initialise the game
function init() {
  // Removes all imgs from cells
  let cells = document.querySelectorAll('td')
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = ''
  }

  // Initialise whack count
  whackCount = 0
  whackCountHeading.innerHTML = 'Count: ' + whackCount
}

// Start game
function startGame() {
  // Restart button disable before start
  init()
  restartGameBtn.disabled = true

  // Events to be called when started
  startGameBtn.addEventListener('click', function () {
    init()
    startGameBtn.disabled = true
    restartGameBtn.disabled = false
    addImage()
  })

  restartGameBtn.addEventListener('click', function () {
    init()
    startGameBtn.disabled = false
    restartGameBtn.disabled = true
  })
}

// Call functions here
startGame()
