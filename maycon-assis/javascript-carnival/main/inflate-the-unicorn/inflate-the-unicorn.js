// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// ACCESS IMAGES AND ADD EVENT LISTENER TO EACH IMAGE.
let unicorns = document.getElementsByClassName('inflate-an-image')
for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].addEventListener('click', handleClick)
}

// CREATE OBJECT FOR CURRENT UNICORN STATE.
let unicornState = {
  unicornOne: 0,
  unicornTwo: 0,
  unicornThree: 0,
}

// CALLBACK FUNCTION THAT CHANGES IMAGE.
function handleClick(event) {
  console.log(event.currentTarget.id, 'was clicked')
  let id = event.currentTarget.id
  if (unicornState[id] < 3) {
    unicornState[id]++
  } else {
    unicornState[id] = 0
  }
  event.currentTarget.src = `./images/unicorn-${unicornState[id]}.png`
}
