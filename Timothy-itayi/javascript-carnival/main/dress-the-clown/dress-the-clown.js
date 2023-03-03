  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//push left and right key to change outfits positions//
// push the up and down key to change which part of the body we are on//

// DOM elements
const head = document.getElementById('myHeadImage');
const body = document.getElementById('myBodyImage');
const shoes = document.getElementById('myShoesImage');

// State variables
let headIndex = 0;
let bodyIndex = 0;
let shoesIndex = 0;
let humanIndex = 0;

// Event listener for keydown events
document.addEventListener('keydown', (event) => {
  const key = event.keyCode;

  switch (key) {
    case 37: // left arrow
      changeHorizontal(-1);
      break;
    case 39: // right arrow
      changeHorizontal(1);
      break;
    case 38: // up arrow
      changeVertical(-1);
      break;
    case 40: // down arrow
      changeVertical(1);
      break;
  }
});

// Change horizontal image
function changeHorizontal(shift) {
  switch (humanIndex) {
    case 0: // head
      headIndex = (headIndex + shift + 6) % 6;
      head.src = `images/head${headIndex}.png`;
      break;
    case 1: // body
      bodyIndex = (bodyIndex + shift + 6) % 6;
      body.src = `images/body${bodyIndex}.png`;
      break;
    case 2: // shoes
      shoesIndex = (shoesIndex + shift + 6) % 6;
      shoes.src = `images/shoes${shoesIndex}.png`;
      break;
  }
}


function changeVertical(shift) {
  humanIndex = (humanIndex + shift + 3) % 3;
}

console.log("Dress The Clown!")