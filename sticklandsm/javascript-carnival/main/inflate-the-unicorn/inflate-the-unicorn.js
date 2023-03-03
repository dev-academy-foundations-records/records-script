// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')


const unicorns = document.getElementsByClassName('inflate-an-image')

function inflate(evt) {
  let unicorn = evt.target
  switch (unicorn.class) {
    case `unicorn #0`:
      unicorn.src = './images/unicorn-1.png'
      unicorn.class = `unicorn #1`
      break
    case `unicorn #1`:
      unicorn.src = './images/unicorn-2.png'
      unicorn.class = `unicorn #2`
      break
    case `unicorn #2`:
      unicorn.src = './images/unicorn-3.png'
      unicorn.class = `unicorn #3`
      break
    default:
      startConfetti()
      setTimeout(stopConfetti, 1000)
      unicorn.src = './images/unicorn-0.png'
      unicorn.class = `unicorn #0`
  }
}

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].class = `unicorn #${i}`
  unicorns[i].onclick = inflate
}

console.log(unicorns[0])
