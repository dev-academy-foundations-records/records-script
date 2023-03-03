  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// console.log("Dress The Clown!")

let partIndex = 0;
let indexes = [0, 0, 0];

let elements = [  document.getElementsByClassName("dress-an-image head"),  document.getElementsByClassName("dress-an-image body"),  document.getElementsByClassName("dress-an-image shoes")]; 

document.onkeydown = function (e) { checkKey(e) };

function checkKey(e) {
  if (e.keyCode == '38') {
    // up arrow
    partIndex--;
    if (partIndex < 0) {
      partIndex = 2;
    }
  } else if (e.keyCode == '40') {
    // down arrow
    partIndex++;
    if (partIndex > 2) {
      partIndex = 0;
    }
    elements[partIndex][0].src = "./images/head" + indexes[partIndex] + ".png";
  } else if (e.keyCode == '37') {
    // left arrow
    indexes[partIndex]--;
    if (indexes[partIndex] < 0) { 
      indexes[partIndex] = 5;
    }
    elements[partIndex][0].src = "./images/body" + indexes[partIndex] + ".png";  
  } else if (e.keyCode == '39') {
    // right arrow
    indexes[partIndex]++;
    if (partIndex === 0 && indexes[partIndex] > 5) {
      indexes[partIndex] = 0;
    } else if (partIndex === 1 && indexes[partIndex] > 5) {
      indexes[partIndex] = 0;
    } else if (partIndex === 2 && indexes[partIndex] > 4) {
      indexes[partIndex] = 0;
    }
    elements[partIndex][0].src = "./images/shoes" + indexes[partIndex] + ".png";
  }
}


