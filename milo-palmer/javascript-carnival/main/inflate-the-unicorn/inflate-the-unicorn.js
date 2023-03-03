// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

const unicorns = document.getElementsByTagName('img')

// let unicorn0 = 1

// let unicorn1 = 1

// let unicorn2 = 1

// This array lets us count what image we have reached

unicornCount = [1, 1, 1]

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = inflate
}

function inflate(e) {
  //Lots of repition did this initially and then turned into a loop to see if that would work it did
  // Leaving it in to show myself how the loop logic works

  // if (e.target.id == 'unicorn0' && unicorn0 <= 3) {
  //   e.target.src = `./images/unicorn-${unicorn0}.png`
  //   unicorn0++
  // } else if (e.target.id == 'unicorn1' && unicorn1 <= 3) {
  //   e.target.src = `./images/unicorn-${unicorn1}.png`
  //   unicorn1++
  // } else if (e.target.id == 'unicorn2' && unicorn2 <= 3) {
  //   e.target.src = `./images/unicorn-${unicorn2}.png`
  //   unicorn2++
  // }

  for (let i = 0; i < 3; i++) {
    if (e.target.id == `unicorn${i}` && unicornCount[i] <= 3) {
      e.target.src = `./images/unicorn-${unicornCount[i]}.png`
      unicornCount[i]++
    }
  }
}
