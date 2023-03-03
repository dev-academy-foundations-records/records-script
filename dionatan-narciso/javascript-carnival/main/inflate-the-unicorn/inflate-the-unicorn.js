// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//Onclick function
function imageClicked(e) {
  const id = e.currentTarget.id
  if (images[id] < 3) {
    images[id]++
  } else {
    images[id] = 0
  }

  e.currentTarget.src = `./images/unicorn-${images[id]}.png`
}

// HTML images
const images = {
  unicorn1: 0,
  unicorn2: 0,
  unicorn3: 0,
}

// loop for the unicors
let unicorns = document.getElementsByClassName('inflate-an-image')
for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = imageClicked
}
