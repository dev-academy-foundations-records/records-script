// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//I TRIED TO CODE ALONG WITH JOSEPH ON THIS AND GOT MYSELF REALLY CONFUSED SO I TRIED IT MYSELF AFTER THIS. PLEASE SCROLL DOWN

/*
let elements = [
  document.getElementById('head'),
  document.getElementById('body'),
  document.getElementById('shoes'),
]

//partIndex tells us which body part

let partIndex = 0

//indexes tells us which number option for the body part
let indexes = [0, 0, 0]

let headImages = [
  'head0.png',
  'head1.png',
  'head2.png',
  'head3.png',
  'head4.png',
  'head5.png',
]

let bodyImages = [
  'body0.png',
  'body1.png',
  'body2.png',
  'body3.png',
  'body4.png',
  'body5.png',
]

let shoesImages = [
  'shoes0.png',
  'shoes1.png',
  'shoes2.png',
  'shoes3.png',
  'shoes4.png',
  'shoes5.png',
]

function checkKey(e) {
  if (e.keyCode == '38') {
    partIndex--

    if (partIndex < 0) partIndex = 2

    console.log(partIndex)
  } else if (e.keyCode == '40') {
    partIndex++

    if (partIndex > 2) partIndex = 0

    console.log(partIndex)
  } else if (e.keyCode == '37') {
    indexes[partIndex]--

    if (indexes[partIndex < 0]) indexes[partIndex] = 6

    elements[partIndex].innerHTML = indexes[partIndex]
  } else if (e.keyCode == '39') {
    indexes[partIndex]++

    if (indexes[partIndex] > 6) indexes[partIndex] = 0

    elements[partIndex].innerHTML = indexes[partIndex]
  }
  console.log[indexes]
}
*/

//========MY WORKING CODE!!!!========//

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

let imageCounter = [0, 0, 0]

let parts = 0

let headImages = [
  './images/head0.png',
  './images/head1.png',
  './images/head2.png',
  './images/head3.png',
  './images/head4.png',
  './images/head5.png',
]

let bodyImages = [
  './images/body0.png',
  './images/body1.png',
  './images/body2.png',
  './images/body3.png',
  './images/body4.png',
  './images/body5.png',
]

let shoesImages = [
  './images/shoes0.png',
  './images/shoes1.png',
  './images/shoes2.png',
  './images/shoes3.png',
  './images/shoes4.png',
  './images/shoes5.png',
]

head.src = headImages[imageCounter[0]]
body.src = bodyImages[imageCounter[1]]
shoes.src = shoesImages[imageCounter[2]]

document.onkeydown = checkKey

//console loging confrims this part works fine...... So why won't the images load?
//the console log shows that the image counter is changing depending on the parts and the image number.
//If I update the image Counter Manually, it changes the image...
//WAIT.... maybe the head.src stuff needs to be inside the function???
//Yup... that was the answer lol. I am getting an error image though... I think because my image counters go too high. really they should cap out at 5... because we are including 0 and we count from 0

function checkKey(e) {
  head.src = headImages[imageCounter[0]]
  body.src = bodyImages[imageCounter[1]]
  shoes.src = shoesImages[imageCounter[2]]
  if (e.keyCode == '38') {
    parts--

    if (parts < 0) parts = 2

    console.log(parts)
    console.log(imageCounter)
  } else if (e.keyCode == '40') {
    parts++

    if (parts > 2) parts = 0

    console.log(parts)
    console.log(imageCounter)
  }

  //////////////////////////////
  else if (e.keyCode == '37') {
    imageCounter[parts]--

    if (imageCounter[parts] < 0) imageCounter[parts] = 5
    console.log(imageCounter)
  } else if (e.keyCode == '39') {
    imageCounter[parts]++

    if (imageCounter[parts] > 5) imageCounter[parts] = 0
    console.log(imageCounter)
  }
}

//okay see we don't need parts===0. just subtitute parts into the imageCounter

//=========================================//
console.log('Dress The Clown!')
