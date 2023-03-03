// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

window.addEventListener('load', () => {
  window.onkeydown = function (event) {
    if (event.key === 'ArrowRight') {
      changeClothing()
    } else if (event.key === 'ArrowLeft') {
      changeClothingLeft()
    } else if (event.key === 'ArrowUp') {
      clothingIndex++
      changeBody()
      changeBodyPartText()
    } else if (event.key === 'ArrowDown') {
      clothingIndex--
      changeBody()
      changeBodyPartText()
    }
  }
})

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

let clothingIndex = 0
let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0

head.src = './images/head0.png'
body.src = './images/body0.png'
shoes.src = './images/shoes0.png'

function changeBodyPartText() {
  if (clothingIndex == 0) {
    document.getElementById('bodypart').innerHTML = 'Currently changing: Head'
  } else if (clothingIndex == 1) {
    document.getElementById('bodypart').innerHTML = 'Currently changing: Body'
  } else if (clothingIndex == 2) {
    document.getElementById('bodypart').innerHTML = 'Currently changing: Shoes'
  }
}

function changeClothing() {
  if (headIndex <= 4 && clothingIndex == 0) {
    headIndex++
    head.src = './images/head' + headIndex + '.png'
  } else if (clothingIndex == 0) {
    headIndex = 0
    head.src = './images/head' + headIndex + '.png'
  } else if (bodyIndex <= 4 && clothingIndex == 1) {
    bodyIndex++
    body.src = './images/body' + bodyIndex + '.png'
  } else if (clothingIndex == 1) {
    bodyIndex = 0
    body.src = './images/body' + bodyIndex + '.png'
  } else if (shoesIndex <= 4 && clothingIndex == 2) {
    shoesIndex++
    shoes.src = './images/shoes' + shoesIndex + '.png'
  } else if (clothingIndex == 2) {
    shoesIndex = 0
    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}

function changeClothingLeft() {
  if (headIndex <= 0 && clothingIndex == 0) {
    headIndex = 5
    head.src = './images/head' + headIndex + '.png'
  } else if (clothingIndex == 0) {
    headIndex--
    head.src = './images/head' + headIndex + '.png'
  } else if (bodyIndex <= 0 && clothingIndex == 1) {
    bodyIndex = 5
    body.src = './images/body' + bodyIndex + '.png'
  } else if (clothingIndex == 1) {
    bodyIndex--
    body.src = './images/body' + bodyIndex + '.png'
  } else if (shoesIndex <= 0 && clothingIndex == 2) {
    shoesIndex = 5
    shoes.src = './images/shoes' + shoesIndex + '.png'
  } else if (clothingIndex == 2) {
    shoesIndex--
    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}

function changeBody() {
  if (clothingIndex > 2) {
    clothingIndex = 0
  } else if (clothingIndex < 0) {
    clothingIndex = 2
  }
}

