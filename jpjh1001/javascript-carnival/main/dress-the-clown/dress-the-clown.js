// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

const headSelector = document.getElementById('head')
const bodySelector = document.getElementById('body')
const shoesSelector = document.getElementById('shoes')

const selectors = [headSelector, bodySelector, shoesSelector]
let selectedIndex = 0

let bodyIndex = [3, 4, 4]
let bodyName = ['head', 'body', 'shoes']

// update relavant body part to new index
function updateImage(index) {
  console.log('body = ' + bodyName[selectedIndex])
  console.log('index = ' + index)
  const imageSource = `./images/${bodyName[selectedIndex]}${index}.png`
  selectors[selectedIndex].src = imageSource
}

// console.log('selected body part is = ' + selectedIndex)
// console.log('selected bodyIndex is = ' + bodyIndex)

// when right arrow is pressed, change the head to one above
document.addEventListener('keydown', (event) => {
  console.log('You are changing the ' + selectors[selectedIndex].id)
  // if up or down key pressed, change clothing index
  console.log(event)
  if (event.key === 'ArrowRight') {
    bodyIndex[selectedIndex]++
    if (bodyIndex[selectedIndex] > 5) {
      bodyIndex[selectedIndex] = 0
    }
  }
  if (event.key === 'ArrowLeft') {
    bodyIndex[selectedIndex]--
    if (bodyIndex[selectedIndex] < 0) {
      bodyIndex[selectedIndex] = 5
    }
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    selectedIndex++
    if (selectedIndex > 2) {
      selectedIndex = 0
    }
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    selectedIndex--
    if (selectedIndex < 0) {
      selectedIndex = 2
    }
  }

  updateImage(bodyIndex[selectedIndex])

  // console.log('selected body part is = ' + selectedIndex)
  // console.log('selected bodyIndex is = ' + bodyIndex)
})

// head.src = './images/head4.png'

// function changeClownHead() {
//   headSelector.Src = './images/head' + headIndex + '.png'
//  headSelector = 'head.1'
//   if (headIndex < 0) {
//     headIndex = 0
//   } else if (headIndex > 5) {
//     headIndex = 0
//   }
// }

// for (let i = 0; i < head.length; i++) {
//   head.onclick = changeClownHead
// }

// 1. store 3 variable => head, body, shoes
// 2. load default values to the variables
// 3. create method to catch keydown
// 4. on left and right press => change the variable
// 5. on up and down press => toggle between the variables
