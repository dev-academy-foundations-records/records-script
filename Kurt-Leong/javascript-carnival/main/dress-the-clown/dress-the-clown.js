// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

//------------highlight words----------------//
let highlight1 = document.getElementById('highlight1')
let highlight2 = document.getElementById('highlight2')
let highlight3 = document.getElementById('highlight3')
highlight1.style.color = 'black'

let Index = [0, 0, 0]
let partIndex = 0
let elements = [head, body, shoes]
let bodyPart = ['head', 'body', 'shoes']
let highlight = [highlight1, highlight2, highlight3]

// let pressKeys.addEventListener('keyCode', checkKey)

document.onkeydown = checkKey

function checkKey(e) {
  highlight[partIndex].style.color = 'LightPink'
  if (e.keyCode == '38') {
    partIndex--
    if (partIndex < 0) {
      partIndex = 2
    }
    console.log(partIndex)
  } else if (e.keyCode == '40') {
    partIndex++
    if (partIndex > 2) {
      partIndex = 0
    }
    console.log(partIndex)
  } else if (e.keyCode == '37') {
    Index[partIndex]--
    if (Index[partIndex] < 0) {
      Index[partIndex] = 5
    }
    elements[partIndex].src =
      'images/' + bodyPart[partIndex] + Index[partIndex] + '.png'
    console.log(bodyPart[partIndex])

    console.log('left')
  } else if (e.keyCode == '39') {
    console.log('right')
    Index[partIndex]++
    if (Index[partIndex] > 5) {
      Index[partIndex] = 0
    }
    elements[partIndex].src =
      'images/' + bodyPart[partIndex] + Index[partIndex] + '.png'
    console.log(bodyPart[partIndex])
  }
  highlight[partIndex].style.color = 'Black'
}
