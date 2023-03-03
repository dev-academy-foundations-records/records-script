  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")


const uni1 = document.getElementById('uniOne').src = "images/unicorn-0.png"
const uni2 = document.getElementById('uniTwo').src = "images/unicorn-0.png"
const uni3 = document.getElementById('uniThree').src = "images/unicorn-0.png"
const unicorns = document.getElementsByClassName('inflate-an-image')
let unicornHorn = 0

for (let i = 0 ; i < unicorns.length; i++) {
  unicorn = unicorns[i]
  unicorn.onclick = handleClick
}

const unicornHorns = {
  'uniOne' : 0,
  'uniTwo' : 0,
  'uniThree': 0
}

function handleClick(event) {
  const id = event.currentTarget.id
  if (unicornHorns[id] < 3) {
    unicornHorns[id]++
  } else {
    unicornHorns[id] = 0
  }

  event.currentTarget.src = `images/unicorn-${unicornHorns[id]}.png`
}

