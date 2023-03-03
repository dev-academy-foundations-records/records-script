// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!");

//create an array to store head images
const heads = ["head0", "head1", "head2", "head3", "head4", "head5"];
//get the head img tag
const headImg = document.getElementById("head");

let headIndex = 0;
let clothingIndex = 0;

function changeClownHeadRight() {
  if (headIndex >= 0 && headIndex < 6) {
    headImg.src = "./images/" + heads[headIndex] + ".png";
    headIndex++;
  }
}

function changeClownHeadLeft() {
  if (headIndex === 6) {
    headIndex = 4;
  }
  if (headIndex >= 0) {
    headImg.src = "./images/" + heads[headIndex] + ".png";
    headIndex--;
  }
  if (headIndex < 0) {
    headIndex = 1;
  }
}

function moveBodyPartsDown() {
  if (clothingIndex >= 0 && clothingIndex < 2) {
    clothingIndex++;
  }
  console.log(clothingIndex);
}

function moveBodyPartsUp() {
  if (clothingIndex<= 2 && clothingIndex>=0) {
    clothingIndex--;
  }
  if (clothingIndex <= 0) {
    clothingIndex=0
  }
  console.log(clothingIndex);
}

document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 37:
      event.preventDefault();
      changeClownHeadLeft();
      // console.log("Left arrow key pressed");
      break;
    case 38:
      event.preventDefault();
      moveBodyPartsUp()
      // console.log("Up arrow key pressed");
      break;
    case 39:
      event.preventDefault();
      changeClownHeadRight();
      // console.log("Right arrow key pressed");
      break;
    case 40:
      event.preventDefault();
      moveBodyPartsDown()
      // console.log("Down arrow key pressed");
      break;
    default:
      break;
  }
});
