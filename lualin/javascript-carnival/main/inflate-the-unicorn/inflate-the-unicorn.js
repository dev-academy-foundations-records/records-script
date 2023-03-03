// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// Confetti variables

const canvas = document.getElementById('container')
const jsConfetti = new JSConfetti({ canvas })

// Effect sound variables

let balloonSound = new Audio('audio/balloon.wav')
let confettiSound = new Audio('audio/confetti.wav')

// Variables to declare img tags in html file and image source with images in order

let images = document.getElementsByClassName('inflate-an-image')
let imageSources = [
  './images/unicorn-0.png',
  './images/unicorn-1.png',
  './images/unicorn-2.png',
  './images/unicorn-3.png',
]

// Diplay confetti effect
function showConfetti() {
  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '🦄', '✨', '😻', '🌸'],
    confettiColors: [
      '#ff0a54',
      '#ff477e',
      '#ff7096',
      '#ff85a1',
      '#fbb1bd',
      '#f9bec7',
    ],
    confettiRadius: 6,
    confettiNumber: 150,
    emojiSize: 50,
  })
}

// Changes image of each image tag every time it gets clicked as per the order of imageSources
function changeImages() {
  // Clears the canvas at start of calling function
  jsConfetti.clearCanvas()

  for (let i = 0; i < images.length; i++) {
    let imageIdx = 1
    images[i].addEventListener('click', function () {
      images[i].src = imageSources[imageIdx]
      imageIdx = (imageIdx + 1) % imageSources.length
      // Balloon sound is played every time it gets clicked
      balloonSound.play()

      // When a balloon is fully inflated, display confetti function
      if (imageIdx === 0) {
        showConfetti()
        confettiSound.play()
      }
    })
  }
}

// Call functions here
changeImages()
