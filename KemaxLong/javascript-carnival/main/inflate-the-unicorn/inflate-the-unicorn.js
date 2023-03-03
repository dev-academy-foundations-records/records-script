// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// console.log("Inflate The Unicorn!")

let oldPics = document.getElementsByTagName('img')
for (let i = 0; i < oldPics.length; i++) {
  oldPics[i].onclick = picClick
}

///////// this function does not work ////  but why ?
// function picClick(e) {
//   let pic = e.target
//   let unicorn0 = './images/unicorn-0.png'
//   let unicorn1 = './images/unicorn-1.png'
//   let unicorn2 = './images/unicorn-2.png'
//   let unicorn3 = './images/unicorn-3.png'
//   if (pic.src === unicorn0) {
//     pic.src = unicorn1
//   } else if (pic.src === unicorn1) {
//     pic.src = unicorn2
//   } else if (pic.src === unicorn2) {
//     pic.src = unicorn3
//   } else if (pic.src === unicorn3) {
//     pic.src = unicorn0
//   }
// }

let index = 0
function picClick(e) {
  let pic = e.target
  let unicorn0 = './images/unicorn-0.png'
  let unicorn1 = './images/unicorn-1.png'
  let unicorn2 = './images/unicorn-2.png'
  let unicorn3 = './images/unicorn-3.png'

  if (index === 0) {
    pic.src = unicorn1
    index = 1
  } else if (index === 1) {
    pic.src = unicorn2
    index = 2
  } else if (index === 2) {
    pic.src = unicorn3
    index = 3
  } else if (index === 3) {
    pic.src = unicorn0
    index = 0
  }
}
