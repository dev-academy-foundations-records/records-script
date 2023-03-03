// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
// I WROTE THIS CODE FROM WATCHING JO$EPH'S VIDEO AND CODED ALONG WITH IT///
console.log('Whack-a-Mole!')
// getting the right element to make the image as a child
let hole = document.querySelectorAll('td')
// console.log(hole)
// creating the child "the mole image" and assigning the attributes
let theMole = document.createElement('img')
theMole.src = 'mole.png'
theMole.id = 'mole'

// making function to put mole in a random hole
function putMoleInHole() {
  let randomHole = Math.floor(Math.random() * hole.length)
  hole[randomHole].appendChild(theMole)
}
// calling the function to put mole in a random hole
putMoleInHole()

// making the mole move only when its clicked on
theMole.onclick = moveMole

function moveMole() {
  putMoleInHole()
  // add audio file
  ouch.play()
}
///////THIS PART I FIGURED OUT MYSELF/////////////////
let ouch = document.createElement('audio')
ouch.src = 'whack-audio.wav'
// THIS IS REDUNDANT BECAUSE YOU'RE NOT USING AN ID //
// ouch.id = 'clickSound'
//////////////////////////////////////////////////////
// function moleSound(){
//   let audio = document.getElementById('clickSound');
//   audio.moleSound()
// }
