// // -    -   -   -   -  //
// // JAVASCRIPT CARNIVAL //
// // -    -   -   -   -  //

// //Clickon image - change that images number

// imgarr = [
//   './image/unicorn-0.png',
//   './image/unicorn-1.png',
//   './image/unicorn-2.png',
//   './image/unicorn-3.png',
// ]

// let unicorns = document.getElementsByClassName('inflate-an-image')

// for (let i = 0; i < unicorns.length; i++) {
//   unicorns[i].onclick = unicornClicked
// }

// let unicornImage0 = 0

// let unicornImage1 = 0

// let unicornImage2 = 0

// function unicornClicked(e) {
//   let unicorn = e.target

//   console.log(unicorn)
// }
// function changeUnicornImage() {
//   if (unicornImage0 <= imgarr.length) unicornImage0++

//   if (unicornImage0 === imgarr.length) unicornImage0 = 0
// }

//Ways to refine code - use array index of sorts to cycle through images,
//Use function e to cycle through which unicorn is being clicked

//===ORIGINAL CODE ===//
// // -    -   -   -   -  //
// // JAVASCRIPT CARNIVAL //
// // -    -   -   -   -  //

// //Clickon image - change that images number

imgarr = [
  './image/unicorn-0.png',
  './image/unicorn-1.png',
  './image/unicorn-2.png',
  './image/unicorn-3.png',
]

let unicornImage0 = 0

let unicornImage1 = 0

let unicornImage2 = 0

//Basically giving each element a name - we could probably use the function(e) thing and use [i]

let unicorn0 = document.getElementById('unicorn0')

let unicorn1 = document.getElementById('unicorn1')

let unicorn2 = document.getElementById('unicorn2')

//When I click an element, do something <--again the function(e) thing should really shorten this

unicorn0.addEventListener('click', changeUnicorn0)

unicorn1.addEventListener('click', changeUnicorn1)

unicorn2.addEventListener('click', changeUnicorn2)

//changes the images based on the number of clicks the unicorn has had... should be able to shorten this alot. and rather than a tonne of code for each one, we should be able to cycle each unicorn through the same code

function changeUnicorn0() {
  if (unicornImage0 <= imgarr.length) unicornImage0++

  if (unicornImage0 === imgarr.length) unicornImage0 = 0

  if (unicornImage0 === 0) {
    unicorn0.src = './images/unicorn-0.png'
  }

  if (unicornImage0 === 1) {
    unicorn0.src = './images/unicorn-1.png'
  }

  if (unicornImage0 === 2) {
    unicorn0.src = './images/unicorn-2.png'
  }

  if (unicornImage0 === 3) {
    unicorn0.src = './images/unicorn-3.png'
  }

  console.log(unicornImage0)
}

function changeUnicorn1() {
  if (unicornImage1 <= imgarr.length) unicornImage1++

  if (unicornImage1 === imgarr.length) unicornImage1 = 0

  if (unicornImage1 === 0) {
    unicorn1.src = './images/unicorn-0.png'
  }

  if (unicornImage1 === 1) {
    unicorn1.src = './images/unicorn-1.png'
  }

  if (unicornImage1 === 2) {
    unicorn1.src = './images/unicorn-2.png'
  }

  if (unicornImage1 === 3) {
    unicorn1.src = './images/unicorn-3.png'
  }

  console.log(unicornImage1)
}

function changeUnicorn2() {
  if (unicornImage2 <= imgarr.length) unicornImage2++

  if (unicornImage2 === imgarr.length) unicornImage2 = 0

  if (unicornImage2 === 0) {
    unicorn2.src = './images/unicorn-0.png'
  }

  if (unicornImage2 === 1) {
    unicorn2.src = './images/unicorn-1.png'
  }

  if (unicornImage2 === 2) {
    unicorn2.src = './images/unicorn-2.png'
  }

  if (unicornImage2 === 3) {
    unicorn2.src = './images/unicorn-3.png'
  }

  console.log(unicornImage2)
}

console.log('Inflate The Unicorn!')
