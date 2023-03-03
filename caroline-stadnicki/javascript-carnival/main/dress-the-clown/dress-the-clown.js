  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

let wardrobe = ['head', 'body', 'shoes']
let bodyPartIndex = 0
let indexes = [0, 0, 0]
let elements = [document.getElementById('head'),
                document.getElementById('body'), 
                document.getElementById('shoes')]

document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        bodyPartIndex--

        if (bodyPartIndex < 0)
            bodyPartIndex = 2 
    }
    else if (e.keyCode == '40') {
        // down arrow
        bodyPartIndex++

        if (bodyPartIndex > 2)
            bodyPartIndex = 0
    }
    else if (e.keyCode == '37') {
       // left arrow
       indexes[bodyPartIndex]--

       if (indexes[bodyPartIndex] < 0)
          indexes[bodyPartIndex] = 5
    }
    else if (e.keyCode == '39') {
       // right arrow
       indexes[bodyPartIndex]++

       if (indexes[bodyPartIndex] > 5)
          indexes[bodyPartIndex] = 0
    }
    elements[bodyPartIndex].src = `images/${wardrobe[bodyPartIndex]}${indexes[bodyPartIndex]}.png`
  }