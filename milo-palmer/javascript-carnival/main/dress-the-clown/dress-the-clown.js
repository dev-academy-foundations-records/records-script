// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

const head = document.getElementById('head')

const body = document.getElementById('body')

const shoes = document.getElementById('shoes')

let clothingIndex = 0

let headIndex = 0

let bodyIndex = 0

let shoesIndex = 0

function changeClothesUp() {
  if (clothingIndex == 0) {
    headIndex++
    if (headIndex > 5) {
      headIndex = 0
    }
    head.src = `./images/head${headIndex}.png`
  } else if (clothingIndex == 1) {
    bodyIndex++
    if (bodyIndex > 5) {
      bodyIndex = 0
    }
    body.src = `./images/body${bodyIndex}.png`
  } else if (clothingIndex == 2) {
    shoesIndex++
    if (shoesIndex > 5) {
      shoesIndex = 0
    }
    shoes.src = `./images/shoes${shoesIndex}.png`
  }
}

function changeClothesDown() {
  if (clothingIndex == 0) {
    headIndex--
    if (headIndex < 0) {
      headIndex = 5
    }
    head.src = `./images/head${headIndex}.png`
  } else if (clothingIndex == 1) {
    bodyIndex--
    if (bodyIndex < 0) {
      bodyIndex = 5
    }
    body.src = `./images/body${bodyIndex}.png`
  } else if (clothingIndex == 2) {
    shoesIndex--
    if (shoesIndex < 0) {
      shoesIndex = 5
    }
    shoes.src = `./images/shoes${shoesIndex}.png`
  }
}

function changeClothesIndexUp() {
  clothingIndex++
  if (clothingIndex > 2) {
    clothingIndex = 0
  }
}

function changeClothesIndexDown() {
  clothingIndex--
  if (clothingIndex < 0) {
    clothingIndex = 2
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key == 'ArrowLeft') {
    changeClothesDown()
  } else if (event.key == 'ArrowUp') {
    changeClothesIndexDown()
  } else if (event.key == 'ArrowRight') {
    changeClothesUp()
  } else if (event.key == 'ArrowDown') {
    changeClothesIndexUp()
  }
})
