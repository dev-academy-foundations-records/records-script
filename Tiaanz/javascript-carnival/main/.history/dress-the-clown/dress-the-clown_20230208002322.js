// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!");

const parts = {
  heads: ["head0", "head1", "head2", "head3", "head4", "head5"],
  bodys: ["body0", "body1", "body2", "body3", "body4", "body5"],
  shoes: ["shoes0", "shoes1", "shoes2", "shoes3", "shoes4", "shoes5"],
};

const imgs = {
  headImg: document.getElementById("head"),
  bodyImg: document.getElementById("body"),
  shoesImg:document.getElementById("shoes")
}
// //create an array to store head, body and shoes images
// const heads = ["head0", "head1", "head2", "head3", "head4", "head5"];
// const bodys = ["body0", "body1", "body2", "body3", "body4", "body5"];
// const shoes = ["shoes0", "shoes1", "shoes2", "shoes3", "shoes4", "shoes5"];
//get the head img tag, body img tag and shoes img tag
// const headImg = document.getElementById("head");
// const bodyImg = document.getElementById("body");
// const shoesImg = document.getElementById("shoes");

const part = "body";
// console.log(parts[`${part}s`]);

let headIndex = 0;
let bodyIndex = 0;
let shoesIndex = 0;
let clothingIndex = 0;
let index = 0;

function changeClothes(part, direction) {
  switch (direction) {
    case "left":
      if (index > 0) {
        index--;
        imgs[`${part}Img`].src = "./images/" + parts[`${part}s`][index] + ".png";
      }
      if (index < 0) {
        index = 0;
      }
      console.log(index);
      break;
    case "right":
      if (index >= 0 && index < 5) {
        index++;
        imgs[`${part}Img`].src = "./images/" + parts[`${part}s`][index] + ".png";
      }
      console.log(index);
      break;
    default:
      break;
  }
}

function changeClownHead(direction) {
  switch (direction) {
    case "left":
      if (headIndex > 0) {
        headIndex--;
        headImg.src = "./images/" + heads[headIndex] + ".png";
      }
      if (headIndex < 0) {
        headIndex = 0;
      }
      console.log(headIndex);
      break;
    case "right":
      if (headIndex >= 0 && headIndex < 5) {
        headIndex++;
        headImg.src = "./images/" + heads[headIndex] + ".png";
      }
      console.log(headIndex);
      break;
    default:
      break;
  }
}

function changeClownBody(direction) {
  switch (direction) {
    case "left":
      if (bodyIndex > 0) {
        bodyIndex--;
        bodyImg.src = "./images/" + bodys[bodyIndex] + ".png";
      }
      if (bodyIndex < 0) {
        bodyIndex = 0;
      }
      console.log(bodyIndex);
      break;
    case "right":
      if (bodyIndex >= 0 && bodyIndex < 5) {
        bodyIndex++;
        bodyImg.src = "./images/" + bodys[bodyIndex] + ".png";
      }
      console.log(bodyIndex);
      break;
    default:
      break;
  }
}

function changeClownShoes(direction) {
  switch (direction) {
    case "left":
      if (shoesIndex > 0) {
        shoesIndex--;
        shoesImg.src = "./images/" + shoes[shoesIndex] + ".png";
      }
      if (shoesIndex < 0) {
        shoesIndex = 0;
      }
      console.log(shoesIndex);
      break;
    case "right":
      if (shoesIndex >= 0 && shoesIndex < 5) {
        shoesIndex++;
        shoesImg.src = "./images/" + shoes[shoesIndex] + ".png";
      }
      console.log(shoesIndex);
      break;
    default:
      break;
  }
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

document.addEventListener("keydown", function (event) {
  if (clothingIndex === 0) {
    if (event.key === "ArrowRight") {
      changeClothes("head","right")
    } else if (event.key === "ArrowLeft") {
      changeClothes("head","left")
    }
  } else if (clothingIndex === 1) {
    if (event.key === "ArrowRight") {
      changeClothes("body","right")
    } else if (event.key === "ArrowLeft") {
      changeClothes("body","right")
    }
  } else if (clothingIndex === 2) {
    if (event.key === "ArrowRight") {
      changeClownShoes("right");
    } else if (event.key === "ArrowLeft") {
      changeClownShoes("left");
    }
  }
  switch (event.key) {
    case "ArrowUp":
      event.preventDefault();
      moveBodyPartsUp();

      break;
    case "ArrowDown":
      event.preventDefault();
      moveBodyPartsDown();
      break;
    default:
      break;
  }
});
