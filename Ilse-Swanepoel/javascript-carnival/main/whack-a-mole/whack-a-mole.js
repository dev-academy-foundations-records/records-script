// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let holes = document.querySelectorAll('td')

let mole = document.createElement('img')
mole.src = 'mole.PNG'
mole.id = 'mole'

let ouch = document.createElement('audio')
ouch.src = 'whack-audio.wav'
ouch.id = 'ouch'

function changeMolePosition() {
  let randomNumber = Math.floor(Math.random() * holes.length)
  holes[randomNumber].appendChild(mole)
  ouch.play()
}

mole.addEventListener('click', changeMolePosition)

changeMolePosition()

console.log('Whack-a-Mole!')
