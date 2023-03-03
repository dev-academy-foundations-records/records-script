// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// console.log("Dress The Clown!")

// head //   ----- by class name only retrun a array-like object so we need a index
let headIndex = 0
// function changeClownHead() {
//   let head = document.getElementsByClassName('dress-an-image head')[0]

//   headIndex = (headIndex + 1) % 6 // if the remainder is 0 it will back to 0 which mean it will cycle from 0-5
//   let headSrc = './images/head' + headIndex + '.png'
//   head.src = headSrc
// }

// document.addEventListener('keydown', function (event) {
//   if (event.code === 'ArrowRight') {
//     changeClownHead()
//   }
// })

// alternative     keycode metheod    above is key metheod
// document.addEventListener('keydown', function(event) {
//   if (event.keyCode === 39) {
//     changeClownHead();
//   }
// });

//body
let clothingIndex = 0
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 38) {
    clothingIndex = (clothingIndex - 1 + 3) % 3 // + 3 is to avid negative
  } else if (event.keyCode === 40) {
    clothingIndex = (clothingIndex + 1) % 3
  }
})

let bodyIndex = 0
let shoeIndex = 0

function changeClothes() {
  switch (clothingIndex) {
    //head
    case 0:
      let head = document.getElementsByClassName('dress-an-image head')[0]
      headIndex = (headIndex + 1) % 6
      let headSrc = './images/head' + headIndex + '.png'
      head.src = headSrc
      break

    //body
    case 1:
      let body = document.getElementsByClassName('dress-an-image body')[0]
      bodyIndex = (bodyIndex + 1) % 6
      let bodySrc = './images/body' + bodyIndex + '.png'
      body.src = bodySrc
    //shoes
    case 2:
      let shoes = document.getElementsByClassName('dress-an-image shoes')[0]
      shoeIndex = (shoeIndex + 1) % 6
      let shoesSrc = './images/shoes' + shoeIndex + '.png'
      shoes.src = shoesSrc
      break
  }
}
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 37) {
    changeClothes()
  } else if (event.keyCode === 39) {
    changeClothes()
  }
})
