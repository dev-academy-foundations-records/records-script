// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//===============Get unicorn pics as an array==============//

let unicorns = document.getElementsByClassName('inflate-an-image')
console.log(unicorns)

//============add event to the elements of array===========//

for (let i = 0; i < unicorns.length; i++) {
  const unicorn = unicorns[i]
  unicorn.addEventListener('click', unicornClicked)
}

//=============fire the event============//

let allUnicorns = { unicorn1: 0, unicorn2: 0, unicorn3: 0 }
function unicornClicked(e) {
  let unicorn = e.target.id
  console.log('unicorn ' + unicorn + ' was clicked')
  e.target.src = `/inflate-the-unicorn/images/unicorn-0.png`
  if (allUnicorns[unicorn] < 3) {
    allUnicorns[unicorn]++
  } else if ((allUnicorns[unicorn] = 3)) allUnicorns[unicorn] = 0
  console.log('bollom is at stage ' + allUnicorns[unicorn])
  e.target.src = `/inflate-the-unicorn/images/unicorn-${allUnicorns[unicorn]}.png`
}
