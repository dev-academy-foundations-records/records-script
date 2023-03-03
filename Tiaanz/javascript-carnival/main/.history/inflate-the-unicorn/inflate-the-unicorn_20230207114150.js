  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

const unicorns=document.querySelectorAll(".inflate-an-image")
let state = {
  unicorn1: 1,
  unicorn2: 1,
  unicorn3: 1,
}

for (let i = 0; i < unicorns.length; i++){
  unicorns[i].addEventListener('click', () => {
    inflate(state['unicorn'], unicorns[0])
    if (state.unicorn1 === 3) {
            state.unicorn1 = 0;
          } else {
            state.unicorn1++
          }
  })
}


// for (let x of unicorns) {
 
//   x.addEventListener('click', () => {
//     inflate(state, x)
//     if (state === 3) {
//       state = 0;
//     } else {
//       state++
//     }
//     console.log(state);
//   })
// }


function inflate(state,unicorn) {
  switch (state) {
    case 0:
       unicorn.src="./images/unicorn-0.png"
      break;
    case 1:
      unicorn.src = "./images/unicorn-1.png"
      break;
    case 2:
      unicorn.src = "./images/unicorn-2.png"
      break;
    case 3:
      unicorn.src = "./images/unicorn-3.png"
      break;
    default:
      break;
  }
}