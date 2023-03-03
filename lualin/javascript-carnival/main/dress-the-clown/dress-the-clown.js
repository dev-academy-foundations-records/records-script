// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// Imports

// Constructs images path
// class imageFileName {
//   constructor() {
//     this.images = {
//       head: {},
//       body: {},
//       shoes: {},
//     }

//     for (let i = 0; i <= 5; i++) {
//       const headTitle = `head${i}`
//       const bodyTitle = `body${i}`
//       const shoesTitle = `shoes${i}`
//       const headFilename = `./images/${headTitle}`
//       const bodyFilename = `./images/${bodyTitle}`
//       const shoesFilename = `./images/${shoesTitle}`
//       this.images.head[headTitle] = headFilename
//       this.images.body[bodyTitle] = bodyFilename
//       this.images.shoes[shoesTitle] = shoesFilename
//     }
//   }
// }

// // Define imgList to call image path
// // eg. imgList.images.head.head1 > Outputs './images/head1'
// const imgList = new imageFileName()

// Define part index - index of body part
let partIndex = 0

// Define selected index - index of image index for each body part
let selectedIndex = 0

// HTML const variables
const bodyImages = document.querySelectorAll('.dress-an-image')
const headElement = document.querySelectorAll('#head')
const bodyElement = document.querySelectorAll('#body')
const shoesElement = document.querySelectorAll('#shoes')

// Define reference to the save button
const saveButton = document.getElementById('save-button')

// Up/Down arrow movement - Selects from head to shoes using up/down arrow keys
function upDownMove(event) {
  const udkeyCode = event.keyCode

  switch (udkeyCode) {
    case 38: // up arrow
      // Moves up one image tag
      partIndex = Math.max(partIndex - 1, 0)
      bodyImages[partIndex].classList.add('selected')
      bodyImages[partIndex].style.filter = 'brightness(60%)'
      break

    case 40: // down arrow
      partIndex = Math.min(partIndex + 1, bodyImages.length - 1)
      bodyImages[partIndex].classList.add('selected')
      bodyImages[partIndex].style.filter = 'brightness(60%)'
      break

    default:
      break
  }

  // Removes 'selected' class when moved to next tag and initialise the filter style
  bodyImages.forEach((image, idx) => {
    if (idx !== partIndex) {
      image.classList.remove('selected')
      image.style.filter = 'brightness(100%)'
    }
  })
}

// Right/Left arrow movement - Converts images of selected part
function leftRightMove(event) {
  const lrKeycode = event.keyCode
  const selectedImage = document.querySelectorAll('.dress-an-image.selected')

  if (selectedImage.length > 0) {
    switch (lrKeycode) {
      case 37: // left arrow
        if (selectedIndex == null) {
          selectedIndex = 5
        } else {
          selectedIndex = Math.max(0, selectedIndex - 1)
        }
        console.log(selectedIndex)
        break
      case 39: // right arrow
        if (selectedIndex == null) {
          selectedIndex = 0
        } else {
          selectedIndex = Math.min(5, selectedIndex + 1)
        }
        console.log(selectedIndex)
        break
      default:
        break
    }

    // Changes image source

    if (bodyImages[0].classList.contains('selected')) {
      headElement.forEach((img) => {
        img.src = `./images/head${selectedIndex}.png`
      })
    } else if (bodyImages[1].classList.contains('selected')) {
      bodyElement.forEach((img) => {
        img.src = `./images/body${selectedIndex}.png`
      })
    } else {
      shoesElement.forEach((img) => {
        img.src = `./images/shoes${selectedIndex}.png`
      })
    }
  } else {
    alert('Please select part')
  }
}

// Arrow actions
function arrowHandler() {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
      upDownMove(event)
    } else if (event.code === 'ArrowDown') {
      upDownMove(event)
    } else if (event.code === 'ArrowLeft') {
      leftRightMove(event)
    } else if (event.code === 'ArrowRight') {
      leftRightMove(event)
    } else {
      alert('Please press arrow keys only')
    }
  })
}

// Call functions here
arrowHandler()
