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

molePops();

for (let i = 0; i < cells.length; i++){
  cells[i].addEventListener('click', () => {
    if(cells[i].style.backgroundImage!=)
    cells[i].style.backgroundImage = "none"
  molePops()
  })
}
// cells[mole].addEventListener("click", () => {
//   cells[mole].style.backgroundImage = "none";
//   const mole2 = Math.floor(Math.random() * cells.length);
//   molePops(mole2)
// });

