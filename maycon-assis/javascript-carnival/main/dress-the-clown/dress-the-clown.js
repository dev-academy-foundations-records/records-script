// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let clownHead = document.getElementById('head')
let clownBody = document.getElementById('body')
let clownShoes = document.getElementById('shoes')

let itemIndex = 0
let clothingIndex = 0

function changeClownHeadRight() {
  if (itemIndex < 5 && clothingIndex == 0) {
    itemIndex++
  } else {
    itemIndex = 0
  }
  clownHead.src = `./images/head${itemIndex}.png`
}

function changeClownHeadLeft() {
  if (itemIndex > 0 && clothingIndex == 0) {
    itemIndex--
  } else {
    itemIndex = 5
  }
  clownHead.src = `./images/head${itemIndex}.png`
}

function changeClownBodyRight() {
  if (itemIndex < 5 && clothingIndex == 1) {
    itemIndex++
  } else {
    itemIndex = 0
  }
  clownBody.src = `./images/body${itemIndex}.png`
}

function changeClownBodyLeft() {
  if (itemIndex > 0 && clothingIndex == 1) {
    itemIndex--
  } else {
    itemIndex = 5
  }
  clownBody.src = `./images/body${itemIndex}.png`
}

function changeClownShoesRight() {
  if (itemIndex < 5 && clothingIndex == 2) {
    itemIndex++
  } else {
    itemIndex = 0
  }
  clownShoes.src = `./images/shoes${itemIndex}.png`
}

function changeClownShoesLeft() {
  if (itemIndex > 0 && clothingIndex == 2) {
    itemIndex--
  } else {
    itemIndex = 5
  }
  clownShoes.src = `./images/shoes${itemIndex}.png`
}

function incrementClothingIndex() {
  if (clothingIndex < 2) {
    clothingIndex++
  } else {
    clothingIndex = 0
  }
}

function decrementClothingIndex() {
  if (clothingIndex > 0) {
    clothingIndex--
  } else {
    clothingIndex = 2
  }
}

document.addEventListener('keydown', keyHandler)

function keyHandler(e) {
  if (e.key == 'ArrowRight' && clothingIndex == 0) changeClownHeadRight()
  if (e.key == 'ArrowLeft' && clothingIndex == 0) changeClownHeadLeft()
  if (e.key == 'ArrowRight' && clothingIndex == 1) changeClownBodyRight()
  if (e.key == 'ArrowLeft' && clothingIndex == 1) changeClownBodyLeft()
  if (e.key == 'ArrowRight' && clothingIndex == 2) changeClownShoesRight()
  if (e.key == 'ArrowLeft' && clothingIndex == 2) changeClownShoesLeft()
  if (e.key == 'ArrowUp') decrementClothingIndex()
  if (e.key == 'ArrowDown') incrementClothingIndex()
}
