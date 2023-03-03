// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!");

//get the cells array
const cells = document.querySelectorAll("td");

//Randomise which cell pops the mole
function molePops() {
  const mole = Math.floor(Math.random() * cells.length);
  return (
    (cells[mole].style.backgroundImage = "url('mole.png')"),
    (cells[mole].style.backgroundSize = "cover")
  );
}
//initialise the game
molePops();

for (let i = 0; i < cells.length; i++) {

  
  cells[i].addEventListener('click', () => {
    if (cells[i].style.backgroundImage === 'url("mole.png")') {
      cells[i].style.backgroundImage = "none"
      molePops()
    }
  }
    )
}
  
const soundEffect=document.getElementById()



