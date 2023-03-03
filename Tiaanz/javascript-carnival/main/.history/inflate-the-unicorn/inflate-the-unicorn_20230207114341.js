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
    inflate(state[`unicorn${i+1}`], unicorns[i])
    if (state[`unicorn${i+1}`] === 3) {
      state[`unicorn${i+1}`]= 0;
          } else {
            state[`unicorn${i+1}`]++
          }
  })
}



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