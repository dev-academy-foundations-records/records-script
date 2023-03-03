  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

const unicorns=document.querySelectorAll(".inflate-an-image")
let state = {
  
}
unicorns[0].addEventListener('click', () => {
  
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
       unicorn.src="./images/unicorn-1.png"
      break;
    case 1:
      unicorn.src = "./images/unicorn-2.png"
      break;
    case 2:
      unicorn.src = "./images/unicorn-3.png"
      break;
    default:
      break;
  }
}