// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let imgHead = [
  `./images/head0.png`,
  `./images/head1.png`,
  `./images/head2.png`,
  `./images/head3.png`,
  `./images/head4.png`,
  `./images/head5.png`,
]
// console.log(imgHead)

let headIndex = 0
let head = document.getElementById('1')
// I TRIED GETTING ELEMENTS BY CLASS AND LOOKING AT THE CSS FILE, HEAD IS A UNIQUE CLASS, SO WHY CAN'T I GET THE ELEMENT BY CLASS???
document.onkeydown = changeHead

function changeHead(e) {
  head.src = imgHead[headIndex]

  // for (let i = 0; i < imgHead.length; i++) {
  // left arrow
  if (e.keyCode == '37') {
    if (headIndex == 0) {
      headIndex = 6
    } else headIndex--
  } else if (e.keyCode == '39') {
    if (headIndex > 5) {
      headIndex = 0
    }
    headIndex++
    // right arrow
  }
  console.log(headIndex)
}
//  }

// const imgBody = [
//   `./images/body0.png`,
//   `./images/body1.png`,
//   `./images/body2.png`,
//   `./images/body3.png`,
//   `./images/body4.png`,
//   `./images/body5.png`,
// ]
// const imgShoes = [
//   `./images/shoes0.png`,
//   `./images/shoes1.png`,
//   `./images/shoes2.png`,
//   `./images/shoes3.png`,
//   `./images/shoes4.png`,
//   `./images/shoes5.png`,
// ]

// function checkKey(e) {
//   if (e.keyCode == '38') {
//     // up arrow
//   } else if (e.keyCode == '40') {
//     // down arrow
//   } else if (e.keyCode == '37') {
//     // left arrow
//   } else if (e.keyCode == '39') {
//     // right arrow
//   }
// }
// document.getElementsByClassName("body").src = "#"
// document.getElementsByClassName("shoes").src = "#"

// let whichBodyPart = 0
// let indexesForEachBodyPart = [0, 0, 0]
// let elements = [
//   document.getElementsByClassName('dress-an-image head'),
//   document.getElementsByClassName('dress-an-image body'),
//   document.getElementsByClassName('dress-an-image shoes'),
// ]

////////////////////////////////////////////////////////////////////////////
// you might want to look into making a button and have an onclick function
////////////////////////////////////////////////////////////////////////////

// function checkKey(e) {
//   if (e.keyCode == '38') {
//     // up arrow
//     whichBodyPart--
//     if (whichBodyPart < 0) {
//       whichBodyPart = 2
//     }
//   } else if (e.keyCode == '40') {
//     // down arrow
//     whichBodyPart++
//     if (whichBodyPart > 2) {
//       whichBodyPart = 0
//     }
//   } else if (e.keyCode == '37') {
//     // left arrow
//   } else if (e.keyCode == '39') {
//     // right arrow
//   }
// }
