// Select all the cells of the game board
const cells = document.querySelectorAll('[data-cell]')

// Get the different messages displayed on the page
const winCount = document.getElementById('win-count')
const tieCount = document.getElementById('tie-count')
const lostCount = document.getElementById('lost-count')
const statusMsg = document.getElementById('status-msg')
const subtitle = document.getElementById('subtitle')

// Initialise the game variables
let playerTurn = 'X'
let gameIsLive = true
let winner = null
let numWins = 0
let numTies = 0
let numLosses = 0

// Define all possible winning combination
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

// Initialise the game
function init() {
  // Clear all contents in cells
  for (i = 0; i < cells.length; i++) {
    cells[i].innerHTML = ''
    cells[i].classList.remove('highlight')
  }
  // Display whose turn now
  statusMsg.innerHTML = `${playerTurn}'s turn`

  // Clear game state
  gameIsLive = true
  winner = null
}

// Update status message
function updateStatusMessage() {
  // Check if winner is available first
  if (winner !== null) {
    // Check in which side the winner is and displays winner msg depending on player.=
    if (winner === 'O') {
      statusMsg.innerHTML = `Player 'O' wins! / Player 'X' loses`
    } else {
      statusMsg.innerHTML = `Player 'X' wins! / Player 'O' loses`
    }
    // Check if the winner is same as current player turn
    if (winner === playerTurn) {
      //   numWins++
      //   winCount.textContent = `Wins: ${numWins}`
      gameIsLive = false
    } else {
      // Check loses
      //   numLosses++
      //   lostCount.innerHTML = `Losses: ${numLosses}`
      gameIsLive = false
    }
  } else {
    // Check if it is tie (not functioning atm)
    statusMsg.innerHTML = 'Game is tied!'
    // numTies++
    // tieCount.innerHTML = `Ties: ${numTies}`
    gameIsLive = false
  }
}

// Check winner of the game
function checkWinner() {
  // Loop through the winningCombination array and finds out if the letters on all possible three cells are same then it determines winning status
  for (const combination of winningCombinations) {
    const [a, b, c] = combination
    if (
      // The text content in cells[a] must be equal to b and c to meet the winning requirement
      cells[a].innerHTML &&
      cells[a].innerHTML === cells[b].innerHTML &&
      cells[a].innerHTML === cells[c].innerHTML
    ) {
      // If winner is detected, the winner variable gets the value of cells[a] then it no longer is a null
      winner = cells[a].innerHTML
      for (const i of combination) {
        // For the cells that have met the requirement above, highlight class is added to the cells for winning effect
        cells[i].classList.add('highlight')
      }
      return
    }
  }
}

// Cell click event handler
function cellClickEventHandler(evt) {
  // Which cell is targeted
  const cell = evt.target
  // If game status is false or the targeted cell already has an innerHTML value, it returns immediately
  if (!gameIsLive || cell.innerHTML) {
    return
  }
  // When above statement is passed, put playerTurn value into the target cell
  cell.innerHTML = playerTurn
  checkWinner()
  // If winner available, run the inner functions
  if (winner !== null) {
    updateStatusMessage()
    // Game is over and initialise the game in 2 secs
    setTimeout(init, 2000)
  }
  // Swap the player turn
  playerTurn = playerTurn === 'X' ? 'O' : 'X'
}

// Call functions/events here

// Initialise the game
init()
// Add a click event listener to each cell
cells.forEach((cell) => cell.addEventListener('click', cellClickEventHandler))
