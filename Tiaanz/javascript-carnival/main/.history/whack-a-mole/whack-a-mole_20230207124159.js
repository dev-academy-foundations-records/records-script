  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

//get the cells array
const cells = document.querySelectorAll('td')
cells[0].style.backgroundImage="url('mole.PNG')"

//Randomise which cell pops the mole
function molePops() {
  const mole = Math.floor(Math.random() * cells.length);
  // return cells[mole];
  return cells[mole].style.backgroundImage="url('mole.png')"
}

// molePops()



