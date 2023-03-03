// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let threeUnicorns = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < threeUnicorns.length; i++) {
  threeUnicorns[i].onclick = function () {
    changeUnicorn(i)
  }
}

let unicornAll = [0, 0, 0]

function changeUnicorn(index) {
  console.log('You have inflated the unicorn!')

  if (unicornAll[index] === 0) {
    threeUnicorns[index].src = './images/unicorn-1.png'
    unicornAll[index] = 1
  } else if (unicornAll[index] === 1) {
    threeUnicorns[index].src = './images/unicorn-2.png'
    unicornAll[index] = 2
  } else {
    threeUnicorns[index].src = './images/unicorn-3.png'
    unicornAll[index] = 0
  }

  return
}
