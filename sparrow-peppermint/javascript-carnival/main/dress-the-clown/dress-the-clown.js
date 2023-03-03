  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

// create clothing index
let clothingIndex = 0


//  create on clothingItem array, with values for the index of head body and shoes
let clothingItem = [0,0,0]

// add event listener to change selected body part
document.addEventListener('keydown', (event) => {
  // if up or down key pressed, change clothing index
  if(event.key === 'ArrowDown') {
    if (clothingIndex < 2){
      clothingIndex ++
    } 
    else {
      clothingIndex = 0
    }
    console.log(clothingIndex)
  }
  
  else if(event.key === 'ArrowUp') {
    if (clothingIndex > 0){
      clothingIndex --
    } 
    else {
      clothingIndex = 2
    }
  }

  // if right arrow pressed, change the img for that body part
  if(event.key === 'ArrowRight') {
    // check body part we are selecting
    if (clothingItem[clothingIndex] < 5) {
      // increase bodypart
      clothingItem[clothingIndex] ++
    }
    // or go back to 0 index
    else {
      clothingItem[clothingIndex] = 0
    }

    changebodyPart()

  }
  else if(event.key === 'ArrowLeft') {
    // check body part we are selecting
    if (clothingItem[clothingIndex] < 0) {
      // increase bodypart
      clothingItem[clothingIndex] --
    }
    // or go back to 0 index
    else {
      clothingItem[clothingIndex] = 5
    }

    changebodyPart()

  }

// function to change the img for the bodyPart
function changebodyPart() {
  console.log(clothingIndex)
  if (clothingIndex == 0) {
    head.src = `./images/head${clothingItem[0]}.png`
  }
  else if (clothingIndex == 1)
  {
    body.src = `./images/body${clothingItem[1]}.png`
  }
  else if (clothingIndex == 2) {
    shoes.src = `./images/shoes${clothingItem[2]}.png`


  }
}
}

)