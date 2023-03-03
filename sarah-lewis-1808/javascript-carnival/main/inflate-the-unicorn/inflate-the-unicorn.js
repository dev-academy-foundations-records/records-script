const unicorns = Array.from(document.getElementsByClassName('inflate-an-image'))

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].addEventListener('click', inflate)
}

//keeps track of the number image each unicorn is at
let unicornStatus = [0, 0, 0]

function inflate(evt) {
  //takes id from the clicked target unicorn
  let id = evt.target.id

  //assigns each unicorn to a position in unicornStatus array based on its id number
  if (unicornStatus[id] < 3) {
    unicornStatus[id]++
  } else unicornStatus[id] = 0
  evt.currentTarget.src = `./images/unicorn-${unicornStatus[id]}.png`
}
