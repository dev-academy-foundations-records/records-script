// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')
let clothingIndex = 0

const clothingElements = {
  head: document.getElementById('head'),
  body: document.getElementById('body'),
  shoes: document.getElementById('shoes'),
}
const clothingObject = {
  head: 0,
  body: 0,
  shoes: 0,
}

function changeClothes(leftOrRight) {
  let currentArticle = Object.keys(clothingObject)[clothingIndex]

  //In my effort to avoid lots of if statements, This jumbled mess dynamically changes the variable for what clothes are going to change.

  //This is specifically for the right arrow
  if (leftOrRight === 'ArrowRight') {
    clothingObject[currentArticle] < 5
      ? clothingObject[currentArticle]++
      : (clothingObject[currentArticle] = 0)
    //change the clothing of whatever clothingindex is set to.
    clothingElements[
      currentArticle
    ].src = `./images/${currentArticle}${clothingObject[currentArticle]}.png`
  }

  //This is specifically for the left arrow
  if (leftOrRight === 'ArrowLeft') {
    clothingObject[currentArticle] > 0
      ? clothingObject[currentArticle]--
      : (clothingObject[currentArticle] = 5)
    clothingElements[
      currentArticle
    ].src = `./images/${currentArticle}${clothingObject[currentArticle]}.png`
  }
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') {
    clothingIndex < 2 ? clothingIndex++ : (clothingIndex = 0)
  }
  if (event.key === 'ArrowUp') {
    clothingIndex > 0 ? clothingIndex-- : (clothingIndex = 2)
  }
  changeClothes(event.key)
})
