// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!");

//get the cells array
const cells = document.querySelectorAll("td");
const mole = Math.floor(Math.random() * cells.length);
//Randomise which cell pops the mole
function molePops() {
  return (
    (cells[mole].style.backgroundImage = "url('mole.png')"),
    (cells[mole].style.backgroundSize = "cover")
  );
}

molePops();
cells[mole].addEventListener("click", () => {
  cells[mole].style.backgroundImage = "none";
  const mole = Math.floor(Math.random() * cells.length);
  
});
// cells[mole].addEventListener('click',()))
