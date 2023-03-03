// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!");

const parts = {
  heads: ["head0", "head1", "head2", "head3", "head4", "head5"],
  bodys: ["body0", "body1", "body2", "body3", "body4", "body5"],
  shoess: ["shoes0", "shoes1", "shoes2", "shoes3", "shoes4", "shoes5"],
};

const imgs = {
  headImg: document.getElementById("head"),
  bodyImg: document.getElementById("body"),
  shoesImg:document.getElementById("shoes")
}


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

function change(part,key) {
  if (key === "ArrowRight") {
    changeClothes(part,"right")
  } else if (key === "ArrowLeft") {
    changeClothes(part,"left")
  }
}

function toggleParts(key) {
  if (clothingIndex === 0) {
    change("head",event.key)
  } else if (clothingIndex === 1) {
    change("body",event.key)
  } else if (clothingIndex === 2) {
    change("shoes",event.key)
  }
}

document.addEventListener("keydown", function (event) {
  
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
