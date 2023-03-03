let cells = Array.from(document.getElementsByTagName('td'))
let img = document.createElement('img')
img.src = './mole.PNG'
img.id = 'moley'
const counter = document.getElementById('count')
let count = (counter.innerText = 0)

const makeRandomNum = () => {
  return (randomNum = Math.floor(Math.random() * 25) + 1)
}

const pickCell = (cells) => {
  return (randomCell = cells[makeRandomNum()])
}

const chosenCell = pickCell(cells)
let currentMoleLocation = chosenCell.appendChild(img)
lastNum = currentMoleLocation

const whackMole = (evt) => {
  currentMoleLocation = evt.target
  let newMoleLocation = pickCell(cells)
  newMoleLocation.appendChild(img)
  counter.innerText++
}

for (let i = 0; i < cells.length; i++) {
  currentMoleLocation.onclick = whackMole
}
