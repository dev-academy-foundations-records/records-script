// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!");

//create an object to store body parts' arrays
const parts = {
  heads: ["head0", "head1", "head2", "head3", "head4", "head5"],
  bodys: ["body0", "body1", "body2", "body3", "body4", "body5"],
  shoess: ["shoes0", "shoes1", "shoes2", "shoes3", "shoes4", "shoes5"],
};

//create an object to store img tags
const imgs = {
  headImg: document.getElementById("head"),
  bodyImg: document.getElementById("body"),
  shoesImg:document.getElementById("shoes")
}


let clothingIndex = 0;
let index = 0;

function changeClothes(part,key) {
  if (key === "ArrowRight") { 
    if (index >= 0 && index < 5) {
      index++;
      imgs[`${part}Img`].src = "./images/" + parts[`${part}s`][index] + ".png";
    }
    console.log(index);
  }else if (key === "ArrowLeft") {
    if (index > 0) {
      index--;
      imgs[`${part}Img`].src = "./images/" + parts[`${part}s`][index] + ".png";
    }
    if (index < 0) {
      index = 0;
    }
    console.log(index);
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
