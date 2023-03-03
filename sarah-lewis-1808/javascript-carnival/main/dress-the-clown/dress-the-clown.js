const clown = [
  { area: 'head', outfit: 0 },
  { area: 'body', outfit: 0 },
  { area: 'shoes', outfit: 0 },
]
let bodyPart = 0
const changeOutfitRight = () => {
  if (clown[bodyPart.outfit] < 5) {
    clown[bodyPart.outfit]++
  } else clown[bodyPart.outfit] = 0
  document.getElementById(clown[bodyPart].area).src = `./images/${
    clown[bodyPart].area
  }${clown[bodyPart.outfit]}.png`
}
const changeOutfitLeft = () => {
  if (clown[bodyPart.outfit] > 0) {
    clown[bodyPart.outfit]--
  } else clown[bodyPart.outfit] = 5
  document.getElementById(clown[bodyPart].area).src = `./images/${
    clown[bodyPart].area
  }${clown[bodyPart.outfit]}.png`
}
const changeLocationDown = () => {
  if (bodyPart < 2) {
    bodyPart++
  } else bodyPart = 0
}
const changeLocationUp = () => {
  if (bodyPart > 0) {
    bodyPart--
  } else bodyPart = 2
}
document.onkeydown = checkKey
function checkKey(e) {
  if (e.keyCode == '38') {
    changeLocationUp()
  } else if (e.keyCode == '40') {
    changeLocationDown()
  } else if (e.keyCode == '37') {
    changeOutfitLeft()
  } else if (e.keyCode == '39') {
    changeOutfitRight()
  }
}
