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
let clothingIndex = 1;

function changeClownHead() {
  document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
      case 37:
        if (headIndex > 0) {
          headIndex--;
          headImg.src = "./images/" + heads[headIndex] + ".png"; 
        }
        if (headIndex < 0) {
          headIndex = 0;
        }
        console.log(headIndex);
        break;
      case 39:
        if (headIndex >= 0 && headIndex < 5) {
          headIndex++
          headImg.src = "./images/" + heads[headIndex] + ".png"; 
        }
          console.log(headIndex);
        break;
      default:
        break;
    }
  });
}

function changeClownBody() {
  document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
      case 37:
        if (bodyIndex > 0) {
          bodyIndex--;
          bodyImg.src = "./images/" + bodys[bodyIndex] + ".png"; 
        }
        if (bodyIndex < 0) {
          bodyIndex = 0;
        }
        console.log(bodyIndex);
        break;
      case 39:
        if (bodyIndex >= 0 && bodyIndex < 5) {
          bodyIndex++
          bodyImg.src = "./images/" + bodys[bodyIndex] + ".png"; 
        }
          console.log(bodyIndex);
        break;
      default:
        break;
    }
  });
}




function moveBodyPartsDown() {
  if (clothingIndex >= 0 && clothingIndex < 2) {
    clothingIndex++;
  }
}

function moveBodyPartsUp() {
  if (clothingIndex <= 2) {
    clothingIndex--;
  }
  if (clothingIndex <= 0) {
    clothingIndex = 0;
  }
}

if (clothingIndex === 1) {
  changeClownBody();
}

// document.addEventListener("keydown", function (event) {
//   if (clothingIndex === 0) {
//    changeClownHead()
//   } else if (clothingIndex === 1) {
//     switch (event.keyCode) {
//       case 37:
//         changeClownBodyLeft();
//         break;
//       case 39:
//         changeClownBodyRight();
//         break;
//       default:
//         break;
//     }
//   } else {
//     switch (event.keyCode) {
//       case 37:
//         changeClownShoesLeft();
//         break;
//       case 39:
//         changeClownShoesRight();
//         break;
//       default:
//         break;
//     }
//   }
//   switch (event.keyCode) {
//     case 38:
//       event.preventDefault();
//       moveBodyPartsUp();
//       // console.log("Up arrow key pressed");
//       break;
//     case 40:
//       event.preventDefault();
//       moveBodyPartsDown();
//       // console.log("Down arrow key pressed");
//       break;
//     default:
//       break;
//   }
// });
