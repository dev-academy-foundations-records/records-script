// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!");

//get the cells array
const cells = document.querySelectorAll("td");
const mole = Math.floor(Math.random() * cells.length);
//Randomise which cell pops the mole
function molePops(mole) {
  return (
    (cells[mole].style.backgroundImage = "url('mole.png')"),
    (cells[mole].style.backgroundSize = "cover")
  );
}

molePops(mole);

for (let i = 0; i < cells.length; i++){
  cells[i].style.backgroundImage
}
// cells[mole].addEventListener("click", () => {
//   cells[mole].style.backgroundImage = "none";
//   const mole2 = Math.floor(Math.random() * cells.length);
//   molePops(mole2)
// });

