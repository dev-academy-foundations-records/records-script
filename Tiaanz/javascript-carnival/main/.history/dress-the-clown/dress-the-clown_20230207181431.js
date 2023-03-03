// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!");

//create an array to store head, body and shoes images
const heads = ["head0", "head1", "head2", "head3", "head4", "head5"];
const bodys = ["body0", "body1", "body2", "body3", "body4", "body5"];
const shoes = ["shoes0", "shoes1", "shoes2", "shoes3", "shoes4", "shoes5"];
//get the head img tag, body img tag and shoes img tag
const headImg = document.getElementById("head");
const bodyImg = document.getElementById("body");
const shoesImg = document.getElementById("shoes");

let headIndex = 0;
let bodyIndex = 0;
let shoesIndex = 0;
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
    headIndex = 0;
  }
}

function changeClownBodyRight() {
  if (bodyIndex >= 0 && bodyIndex < 6) {
    bodyImg.src = "./images/" + bodys[bodyIndex] + ".png";
    bodyIndex++;
  }
}

function changeClownBodyLeft() {
  if (bodyIndex === 6) {
    bodyIndex = 4;
  }
  if (bodyIndex >= 0) {
    bodyImg.src = "./images/" + bodys[bodyIndex] + ".png";
    bodyIndex--;
  }
  if (bodyIndex < 0) {
    bodyIndex = 0;
  }
}

function changeClownShoesRight() {
  if (shoesIndex >= 0 && shoesIndex < 6) {
    shoesImg.src = "./images/" + shoes[shoesIndex] + ".png";
    shoesIndex++;
  }
}

function changeClownShoesLeft() {
  if (shoesIndex === 6) {
    shoesIndex = 4;
  }
  if (shoesIndex >= 0) {
    shoesImg.src = "./images/" + shoes[shoesIndex] + ".png";
    shoesIndex--;
  }
  if (shoesIndex < 0) {
    shoesIndex = 0;
  }
}

function moveBodyPartsDown() {
  if (clothingIndex >= 0 && clothingIndex < 2) {
    clothingIndex++;
  }
  console.log(clothingIndex);
}

function moveBodyPartsUp() {
  if (clothingIndex <= 2) {
    clothingIndex--;
  }
  if (clothingIndex <= 0) {
    clothingIndex = 0;
  }
  console.log(clothingIndex);
}

document.addEventListener("keydown", function (event) {

  if (clothingIndex === 0) {
    switch (key) {
      case value:
        
        break;
    
      default:
        break;
    }
  }
  switch (event.keyCode) {
    case 37:
      event.preventDefault();
      // changeClownHeadLeft();
      // changeClownBodyLeft()
      changeClownShoesLeft()
      // console.log("Left arrow key pressed");
      break;
    case 38:
      event.preventDefault();
      moveBodyPartsUp();
      // console.log("Up arrow key pressed");
      break;
    case 39:
      event.preventDefault();
      // changeClownBodyRight()
      // changeClownHeadRight();
      changeClownShoesRight()
      // console.log("Right arrow key pressed");
      break;
    case 40:
      event.preventDefault();
      moveBodyPartsDown();
      // console.log("Down arrow key pressed");
      break;
    default:
      break;
  }
});
