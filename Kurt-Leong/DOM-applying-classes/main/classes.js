// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start() {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()

  // Your turn! Create a new function called `two`, then call it from here.
  two()
  Three()
  makeVisible()
}

function one() {
  // First, we have to find the element:
  let one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE
function two() {
  let two = document.getElementById('two')
  two.classList.add('green')
}
// CREATE FUNCTION three HERE
function Three() {
  let Three = document.getElementById('three')
  Three.classList.add('black')
}
// CREATE FUNCTION makeVisible HERE
function invisible() {}
function makeVisible() {
  let makeVisible = document.getElementsByClassName('invisible')[0]
  makeVisible.classList.add('visible')
}
