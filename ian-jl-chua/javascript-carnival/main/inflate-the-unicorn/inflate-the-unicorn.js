// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// I HONESTLY have no idea what I am doing and only got this code by watching Gerard's Video//

let unicorns = Array.from(document.getElementsByClassName('inflate-an-image'))

// referring to img source. I had no idea we could do this, and got this from Gerard's video
////////////////////////////////////////////
const imageSource = [
  `./images/unicorn-0.png`,
  `./images/unicorn-1.png`,
  `./images/unicorn-2.png`,
  `./images/unicorn-3.png`,
]
const uniFrames = [0, 0, 0]
////////////////////////////////////////////

for (let i = 0; i < unicorns.length; i++) {
  const unicorn = unicorns[i]
  unicorn.addEventListener('click', inflate)
}
// or simplified to
// for (let i = 0; i < unicorns.length; i++) {
//  unicorns[i].addEventListener('click', inflate)
// }
function inflate(e) {
  const index = unicorns.indexOf(e.currentTarget)

  // console.log(index)
  if (uniFrames[index] < 3) {
    uniFrames[index]++
  } else {
    uniFrames[index] = 0
  }

  const imageIndex = uniFrames[index]
  e.currentTarget.src = imageSource[imageIndex]
  // console.log(e.currentTarget.id, 'AHHHHH')
}
