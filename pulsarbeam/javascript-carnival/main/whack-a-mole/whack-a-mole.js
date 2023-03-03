// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//we need a cell click function
//we need a mole to appear on a cell
//once the mole is clicked it moves to another randm cell
// once you click the  mole again the mole moves to another cell

console.log('Whack-a-Mole!')
const sound = document.getElementById('sound')
const cells = document.querySelectorAll('td')
const mole = document.createElement('img')

mole.src = 'mole.PNG'
mole.style.display = 'none'
mole.style.width = '70px'
document.body.appendChild(mole)

let currentCell

function randomCell() {
  const randomIndex = Math.floor(Math.random() * cells.length)
  return cells[randomIndex]
}

function hideMole() {
  currentCell.innerHTML = ''
}

function showMole() {
  currentCell = randomCell()
  currentCell.appendChild(mole)
  mole.style.display = 'inline-block'
}

mole.addEventListener('click', function () {
  hideMole()
  sound.play()
  setTimeout(showMole, 1000)
})

showMole()
