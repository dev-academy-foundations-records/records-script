// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log('Whack-a-Mole')

// HTML COLLECTION OF ALL CELLS.
let cells = document.getElementsByTagName('td')

// GENERATE RANDOM INTEGER AND USE IT TO PICK A RANDOM CELL.
let functionToGetRandomNumber = () => Math.floor(Math.random() * cells.length)
let randomIndex = functionToGetRandomNumber()
let randomCell = cells[randomIndex]

// CREATE AN IMG ELEMENT WITH THE MOLE AND NEST IT INSIDE THE RANDOM CELL.
let mole = document.createElement('img')
mole.src = './mole.PNG'
mole.id = 'mole'
randomCell.appendChild(mole)

// ADD EVENT LISTENER TO MOLE ELEMENT.
mole.addEventListener('click', whackedMole)

// GENERATE NEW RANDOM CELL AND NEST MOLE ELEMENT INSIDE IT.
function whackedMole(e) {
  let newCell = cells[functionToGetRandomNumber()]
  newCell.appendChild(e.target)

  // PLAY AUDIO WHEN MOLE IS WHACKED.
  let audio = new Audio('./whack-audio.wav')
  audio.play()
}
