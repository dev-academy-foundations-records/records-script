// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')



let images = [
  './images/unicorn-1.png',
  './images/unicorn-2.png',
  './images/unicorn-3.png',
]

let uni1State = 0
let uni2State = 0
let uni3State = 0

let uni1 = document.getElementById("uni1");
let uni2 = document.getElementById("uni2");
let uni3 = document.getElementById("uni3");

uni1.addEventListener("click", function (event) {
  if (uni1State < 3) {
    event.target.src = images[uni1State];
    uni1State = (++uni1State);
  }
  console.log(uni1State)
});

uni2.addEventListener("click", function (event) {
  if (uni2State < 3) {
    event.target.src = images[uni2State];
    uni2State = (++uni2State);
  }
  console.log(uni2State)
});

uni3.addEventListener("click", function (event) {
  if (uni3State < 3) {
    event.target.src = images[uni3State];
    uni3State = (++uni3State);
  }
  console.log(uni3State)
});

