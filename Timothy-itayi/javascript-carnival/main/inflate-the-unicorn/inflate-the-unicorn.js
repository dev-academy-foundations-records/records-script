  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// Define the unicorn images
// Define the unicorn images
const newUnicorn = document.getElementsByClassName('inflate-an-image');
for(let i = 0; i < newUnicorn.length; i++) {
  const unicorn = newUnicorn[i]
  unicorn.addEventListener('click', handleClick);
}

const unicornAll = {
  unicorn1: 0,
  unicorn2: 0,
  unicorn3: 0,
}


function handleClick(event){
  console.log(event.currentTarget.id, 'unicorn clicked');
  const id = event.currentTarget.id;
  if (unicornAll[id] < 3) {
    unicornAll[id]++;
  } else {
    unicornAll[id] = 1;
  }
  
  console.log('unicornAll:', unicornAll);
  event.currentTarget.src = `./images/unicorn-${unicornAll[id]}.png`;

}
console.log("Inflate The Unicorn!")
