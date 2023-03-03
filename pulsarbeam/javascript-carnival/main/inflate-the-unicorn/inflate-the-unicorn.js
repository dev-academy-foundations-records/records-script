// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//Create and onclick function for the unicorns

//when button is clicked it should change the picture to the next image start unicorn 0 - 1 - 2 - 3
//
console.log('Inflate The Unicorn!')

const images = Array.from(document.getElementsByClassName('inflate-an-image'))

for (let image of images) {
  image.addEventListener('click', handleClick)
}
const ballonFrames = {
  UnicornOne: 0,
  UnicornTwo: 0,
  UnicornThree: 0,
}
function handleClick(event) {
  const id = event.currentTarget.id
  if (ballonFrames[id] < 3) {
    ballonFrames[id]++
  } else {
    ballonFrames[id] = 0
  }
  event.currentTarget.src = `./images/unicorn-${ballonFrames[id]}.png`
}

/* function changeImage() {
  let images = document.getElementsByClassName('inflate-an-image')
  for (let i = 0; i < images.length; i++) {
    if (images[i].src.match('./images/unicorn-0.png')) {
      images[i].src = './images/unicorn-1.png'
    } else if (images[i].src.match('./images/unicorn-1.png')) {
      images[i].src = './images/unicorn-2.png'
    } else {
      images[i].src = './images/unicorn-3.png'
    }
  }
} */
