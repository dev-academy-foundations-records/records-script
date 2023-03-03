// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

const unicorn1 = document.getElementById('unicorn-1')
let toggle = 0

unicorn1.addEventListener('click', function () {
  if (toggle === 0) {
    unicorn1.src = './images/unicorn-1.png'
    toggle++
  } else if (toggle === 1) {
    unicorn1.src = './images/unicorn-2.png'
    toggle++
  } else if (toggle === 2) {
    unicorn1.src = './images/unicorn-3.png'
    toggle++
  } else if (toggle === 3) {
    unicorn1.src = './images/unicorn-0.png'
    toggle = 0
  }
})

const unicorn2 = document.getElementById('unicorn-2')
let toggle2 = 0

unicorn2.addEventListener('click', function () {
  if (toggle2 === 0) {
    unicorn2.src = './images/unicorn-1.png'
    toggle2++
  } else if (toggle2 === 1) {
    unicorn2.src = './images/unicorn-2.png'
    toggle2++
  } else if (toggle2 === 2) {
    unicorn2.src = './images/unicorn-3.png'
    toggle2++
  } else if (toggle2 === 3) {
    unicorn2.src = './images/unicorn-0.png'
    toggle2 = 0
  }
})

const unicorn3 = document.getElementById('unicorn-3')
let toggle3 = 0

unicorn3.addEventListener('click', function () {
  if (toggle3 === 0) {
    unicorn3.src = './images/unicorn-1.png'
    toggle3++
  } else if (toggle3 === 1) {
    unicorn3.src = './images/unicorn-2.png'
    toggle3++
  } else if (toggle3 === 2) {
    unicorn3.src = './images/unicorn-3.png'
    toggle3++
  } else if (toggle3 === 3) {
    unicorn3.src = './images/unicorn-0.png'
    toggle3 = 0
  }
})
// let unicorns = [
//   './images/unicorn-0.png',
//   './images/unicorn-1.png',
//   './images/unicorn-2.png',
//   './images/unicorn-3.png',
// ]

// let unicorn = document.getElementsByClassName('inflate-an-image')

// for (let i = 0; i < unicorn.length; i++) {
//   let newUnicorn = unicorn[i]
//   newUnicorn.addEventListener('click', newClick)
// }

// function newClick() {
//   console.log('unicorn clicked')
//   let unicorn1 = document.getElementById('unicorn-1')
//   unicorn1.src = './images/unicorn-1.png'
// }

// let getUni = document.getElementsByClassName('inflate-an-image')
// console.log('Inflate The Unicorn!')

// for (let i = 0; i < getUni.length; i++) {
//   let newUnicorn = getUni[i]
//   newUnicorn.addEventListener('click', newClick)
// }

// function newClick() {
//   console.log('unicorn was clicked!')

//   if

//   //call function to change unicorn
// }
// //function that is called every time unicorn is clicked on

// function changeUnicorn() {
//   console.log('function was called')
//   console.log(getUni)
// }
