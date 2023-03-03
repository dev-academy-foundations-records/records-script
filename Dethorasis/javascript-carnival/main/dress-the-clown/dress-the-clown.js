// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
let headIndex = 0
let clothingIndex = 0

console.log('Dress The Clown!')
changeClownHead()

function changeClownHead() {
  let string = './images/head'
  let head = document.getElementById('head')

  //if right pressed concatenate image with headindex and ++
  //if it is equals 5, reset it to 0
  document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowRight' && clothingIndex === 0) {
      console.log('right key pressed')
      head.src = string + headIndex + '.png'
      if (headIndex === 5) {
        headIndex = 0
      } else {
        headIndex++
      }
    } else if (event.code === 'ArrowRight' && clothingIndex === 1) {
      changeClothesRight()
    } else if (event.code === 'ArrowRight' && clothingIndex === 2) {
      changeShoesRight()
    }
    //If left pressed do same as above, but decrement, if index is 0 set to 5
    if (event.code === 'ArrowLeft' && clothingIndex === 0) {
      console.log('left key pressed')
      head.src = string + headIndex + '.png'

      if (headIndex === 0) {
        headIndex = 5
      } else {
        headIndex--
      }
    } else if (event.code === 'ArrowLeft' && clothingIndex === 1) {
      changeClothesLeft()
    } else if (event.code === 'ArrowLeft' && clothingIndex === 2) {
      changeShoesLeft()
    }
    //if up pressed increase clothingIndex
    //if clothingIndex is 2, set it to 0
    if (event.code === 'ArrowUp') {
      console.log(`up key pressed`)

      if (clothingIndex === 2) {
        clothingIndex = 0
      } else {
        clothingIndex++
      }
    }
    //if down pressed decrease clothingIndex
    //if clothingIndex is 0, set it 2
    if (event.code === 'ArrowDown') {
      console.log(`down key pressed`)

      if (clothingIndex === 0) {
        clothingIndex = 2
      } else {
        clothingIndex--
      }
    }
  })
}
//Concatenate image with headindex counter using headIndex counter
//Resets counter if it goes above or below image number threshold
function changeClothesRight() {
  let string = './images/body'
  let body = document.getElementById('body')

  console.log('right key pressed')
  body.src = string + headIndex + '.png'
  if (headIndex === 5) {
    headIndex = 0
  } else {
    headIndex++
  }
}
function changeClothesLeft() {
  let string = './images/body'
  let body = document.getElementById('body')

  console.log('left key pressed')
  body.src = string + headIndex + '.png'
  if (headIndex === 0) {
    headIndex = 5
  } else {
    headIndex--
  }
}
function changeShoesRight() {
  let string = './images/shoes'
  let shoes = document.getElementById('shoes')

  console.log('right key pressed')
  shoes.src = string + headIndex + '.png'
  if (headIndex === 5) {
    headIndex = 0
  } else {
    headIndex++
  }
}
function changeShoesLeft() {
  let string = './images/shoes'
  let shoes = document.getElementById('shoes')

  console.log('left key pressed')
  shoes.src = string + headIndex + '.png'
  if (headIndex === 0) {
    headIndex = 5
  } else {
    headIndex--
  }
}
