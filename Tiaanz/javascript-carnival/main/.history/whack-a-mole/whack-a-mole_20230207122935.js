  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

//get the cells array
const cells = document.querySelectorAll('td')

//Randomise which cell pops the mole
function molePops() {
  const firstTurn = Math.floor(Math.random() * players.length);
  return players[firstTurn];
}