// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//creating the mole image
let moleImg = document.createElement('img')
moleImg.src = '/whack-a-mole/mole.PNG'
moleImg.classList.add('hasAMole')

let moleSound = document.createElement('audio')
moleSound.src = '/whack-a-mole/whack-audio.wav'

let moleHoles = document.getElementsByTagName('td')

// let moleSound = new Audio('/whack-a-mole/whack-audio.WAV')

console.log(moleHoles[0])

for (let i = 0; i < moleHoles.length; i++) {
  moleHoles[i].onclick = hammer
}

let startButton = document.getElementsByTagName('button')

startButton[0].addEventListener('click', startMoling)

function startMoling() {
  let holeNumber = getRandomInt(25)
  console.log('Starting Moling on ', holeNumber)
  moleHoles[holeNumber].appendChild(moleImg)
}

function hammer(evt) {
  let moleHole = evt.target
  if (moleHole.classList.contains('hasAMole')) {
    moleImg.parentNode.removeChild(moleImg)
    console.log('Cleared ', moleHole)
    moleSound.play()
    startMoling()
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
