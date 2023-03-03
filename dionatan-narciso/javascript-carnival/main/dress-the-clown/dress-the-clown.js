// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

const imgBody = [
  `./images/body0.png`,
  `./images/body1.png`,
  `./images/body2.png`,
  `./images/body3.png`,
  `./images/body4.png`,
  `./images/body5.png`,
]
const imgShoes = [
  `./images/shoes0.png`,
  `./images/shoes1.png`,
  `./images/shoes2.png`,
  `./images/shoes3.png`,
  `./images/shoes4.png`,
  `./images/shoes5.png`,
]

const imgHead = [
  './images/head0.png',
  './images/head1.png',
  './images/head2.png',
  './images/head3.png',
  './images/head4.png',
  './images/head5.png',
]

document.getElementsByClassName('body').src = '#'
document.getElementsByClassName('shoes').src = '#'
document.getElementsByClassName('head').src = '#'

function changeHead(e) {
  head.src = imgHead[headIndex]
  if (e.keyCode == '37') {
    if (headIndex == 0) {
      headIndex = 6
    } else headIndex--
  } else if (e.keyCode == '39') {
    if (headIndex > 5) {
      headIndex = 0
    }
    headIndex++
  }
}
