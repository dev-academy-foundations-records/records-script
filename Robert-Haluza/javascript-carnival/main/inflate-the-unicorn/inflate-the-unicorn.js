// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorn1 = 0
let unicorn2 = 0
let unicorn3 = 0
function inflateUnicorn(unicorn) {
  // console.log('Unicorn has been clicked')

  if (unicorn === 1) {
    unicorn1++
    if (unicorn1 > 3) {
      unicorn1 = 0
    }
    document.querySelectorAll('.inflate-an-image')[0].src =
      './images/unicorn-' + unicorn1 + '.png'
  } else if (unicorn === 2) {
    unicorn2++
    if (unicorn2 > 3) {
      unicorn2 = 0
    }
    document.querySelectorAll('.inflate-an-image')[1].src =
      './images/unicorn-' + unicorn2 + '.png'
  } else if (unicorn === 3) {
    unicorn3++
    if (unicorn3 > 3) {
      unicorn3 = 0
    }
    document.querySelectorAll('.inflate-an-image')[2].src =
      './images/unicorn-' + unicorn3 + '.png'
  }
}
