// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0
let clothingIndex = 0

function changeClothes(elementId, index, maxIndex, increment = 1) {
  let element = document.getElementById(elementId)
  index += increment
  if (index > maxIndex) {
    index = 0
  } else if (index < 0) {
    index = maxIndex
  }
  let src = './images/' + elementId + index + '.png'
  element.src = src
  return index
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowRight') {
    switch (clothingIndex) {
      case 0:
        headIndex = changeClothes('head', headIndex, 5)
        break
      case 1:
        bodyIndex = changeClothes('body', bodyIndex, 5)
        break
      case 2:
        shoesIndex = changeClothes('shoes', shoesIndex, 5)
        break
    }
  }
  if (event.code === 'ArrowLeft') {
    switch (clothingIndex) {
      case 0:
        headIndex = changeClothes('head', headIndex, 5, -1)
        break
      case 1:
        bodyIndex = changeClothes('body', bodyIndex, 5, -1)
        break
      case 2:
        shoesIndex = changeClothes('shoes', shoesIndex, 5, -1)
        break
    }
  }

  if (event.code === 'ArrowUp') {
    clothingIndex--
    if (clothingIndex < 0) {
      clothingIndex = 2
    }
  }
  if (event.code === 'ArrowDown') {
    clothingIndex++
    if (clothingIndex > 2) {
      clothingIndex = 0
    }
  }
})
