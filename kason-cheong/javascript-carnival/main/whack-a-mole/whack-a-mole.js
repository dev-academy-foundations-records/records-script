// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// MOLE IMAGE
const img = document.createElement('img')
img.src = './mole.PNG'
img.id = 'mole'

let moleArray = document.getElementsByTagName('td')

let audio = new Audio('./whack-audio.wav')

let randomIndex = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let newCell = ''
let counter = 0
let timer = 11
let highscore = 0 

function addMole() {
  newCell = moleArray[randomIndex(0, 24)]
  newCell.appendChild(img)
  newCell.addEventListener('click', whackedMole)
  newCell.addEventListener('click', playAudio)
  return newCell
}

addMole()

function whackedMole() {
  newCell.removeChild(img)
  newCell.removeEventListener('click', whackedMole)
  counter++
  addMole()
  updateCounter(counter)
}

function playAudio() {
  audio.play()
}

function updateCounter(counter) {
  document.getElementById('counter').innerHTML = 'Moles whacked: ' + counter
}

// COUNTDOWN
window.onload = setTimeout(timesUp, 11000)
window.onload = setInterval(countdown, 1000)


function timesUp() {
  alert('You have whacked ' + counter + ' moles!')
  if (counter > highscore) {
    document.getElementById('highscore').innerHTML = "Current highscore: " + counter
    highscore = counter
  } else {
    document.getElementById('highscore').innerHTML = "Current highscore: " + highscore
  }
  newCell.removeChild(img)
  newCell.removeEventListener('click', whackedMole)
  newCell = ''
  document.getElementById("reset").style.visibility = "visible";
  console.log(highscore)
  console.log(counter)
}

function countdown() {
  if (timer > 0) {
    timer--
  }
  document.getElementById('timer').innerHTML = "Seconds left: " + timer
}

function reset() {
  counter = 0
  timer = 11
  addMole()
  updateCounter(counter)
  setTimeout(timesUp, 10000)
  document.getElementById("reset").style.visibility = "hidden";
}

// write function to randomize a new cell
// adds the mole image to the new cell
// adds event listener to wait for click and activates function to remove it when so
// writes the index of the new cell to a variable

// reads the variable containing the index of the new cell
// removes the image from that new cell
// run function to randomize a new cell
