  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

// an array of all the cells
let cells = document.getElementsByTagName("td")

// whack sound
let whackSound = new Audio("whack-audio.wav")


// fuction to generate random int
function randomInteger() {
  return Math.floor(Math.random() * cells.length)
}

// location for current visible mole
let currentMole;

//function to put mole at cell location
function showMole() {
  // generate cell for mole
  let randomCell = cells[randomInteger()];
  // assign this location to currentMole
  currentMole = randomCell;
  // add img to this location, + and whackedMole() function onclick
  currentMole.innerHTML = "<img src='mole.PNG' onclick='whackedMole()'>";

}
// function for mole to disappear onclick, and reapear in new location
function whackedMole() {
  // play whackSound
  whackSound.play();
  // remove the img and onclick function from this cell
  currentMole.innerHTML = "";
  //show mole in new location
  showMole()
}

// starting Mole
showMole()