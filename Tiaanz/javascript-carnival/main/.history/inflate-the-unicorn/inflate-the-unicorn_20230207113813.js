  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

const unicorns=document.querySelectorAll(".inflate-an-image")
let state = {
  unicorn1: 0,
  unicorn2: 0,
  unicorn3: 0,
}
unicorns[0].addEventListener('click', () => {
  inflate(state.unicorn1, unicorns[0])
  if (state.unicorn1 === 3) {
          state.unicorn1 = 0;
        } else {
          state.unicorn1++
        }
})

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
      
    default:
      break;
  }
}