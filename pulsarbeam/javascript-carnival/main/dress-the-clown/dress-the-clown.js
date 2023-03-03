// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let indicator = document.getElementById('indicator')
indicator.innerHTML = 'Clothing part: HEAD'

let indexes = [0, 0, 0]
let elements = [
  document.getElementById('head'),
  document.getElementById('body'),
  document.getElementById('shoes'),
]

let partIndex = 0

function changeClothingPartIndicator() {
  if (partIndex === 0) {
    indicator.innerText = 'Clothing part: HEAD'
  } else if (partIndex === 1) {
    indicator.innerText = 'Clothing part: BODY'
  } else if (partIndex === 2) {
    indicator.innerText = 'Clothing part: SHOES'
  }
}

document.onkeydown = checkKey

function checkKey(e) {
  if (e.keyCode == '38') {
    partIndex--
    if (partIndex < 0) {
      partIndex = 2
    }
    changeClothingPartIndicator()
    // up arrow
  } else if (e.keyCode == '40') {
    partIndex++
    if (partIndex > 2) {
      partIndex = 0
    }
    changeClothingPartIndicator()
    // down arrow
  } else if (e.keyCode == '37') {
    indexes[partIndex]--

    if (indexes[partIndex] < 0) {
      indexes[partIndex] = 5
    }
    elements[partIndex].src =
      './images/' + elements[partIndex].id + indexes[partIndex] + '.png'
    // left arrow
  } else if (e.keyCode == '39') {
    indexes[partIndex]++

    if (indexes[partIndex] > 5) {
      indexes[partIndex] = 0
    }
    elements[partIndex].src =
      './images/' + elements[partIndex].id + indexes[partIndex] + '.png'
    // right arrow
  }
}
