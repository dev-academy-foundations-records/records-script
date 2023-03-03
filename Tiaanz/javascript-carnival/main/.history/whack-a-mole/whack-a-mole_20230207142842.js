// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!");
//get the audio tag
const soundEffect=document.getElementById('soundEffect')

//get the cells array
const cells = document.querySelectorAll("td");

const result = document.getElementById('result')

const highScore = document.getElementById('highestScore')


//Randomise which cell pops the mole
function molePops() {
  const mole = Math.floor(Math.random() * cells.length);
  return (
    (cells[mole].style.backgroundImage = "url('mole.png')"),
    (cells[mole].style.backgroundSize = "cover")
  );
}
//initialise the game
const button = document.querySelector('button')
button.addEventListener('click', () => {
  button
})
molePops();

//count how many times the mole has been whacked
let count = 0;
let highestScore=0
//bind onclick event to each cell
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', () => {
    if (cells[i].style.backgroundImage === 'url("mole.png")') {
      cells[i].style.backgroundImage = "none"
      soundEffect.play()
      count = count + 1
      result.innerHTML = `You have whacked the mole ${count} times`
      
      molePops()
    }
  }
    )
}

setTimeout(() => {
  alert(`You have whacked ${count} moles in 10 seconds`)
  if (highestScore <= count) {
    highestScore=count
  }
  highScore.innerHTML=`Highest score is ${highestScore}`
}, 10000);







