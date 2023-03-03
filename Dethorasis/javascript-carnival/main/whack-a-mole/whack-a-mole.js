// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

const myTable = document.getElementById('myTable')
let audio = new Audio('./whack-audio.wav')

createMole()

//This function randomly puts a mole in a table cell up to the length of the table (25)
function createMole() {
  let img = document.createElement('img')
  img.src = './mole.PNG'
  img.width = 75

  const moleHoles = myTable.getElementsByTagName('td') //Table cells
  const randomMole = Math.floor(Math.random() * moleHoles.length) //Random number up to 25
  moleHoles[randomMole].appendChild(img)

  //This for loop creates a function when the mole is clicked. The function will remove the img
  //from the mole element, play audio and then execute the createMole func.
  for (let i = 0; i < moleHoles.length; i++) {
    moleHoles[i].onclick = function whackedMole() {
      if (moleHoles[i].firstChild === img) {
        moleHoles[i].removeChild(img)
        createMole()
        audio.play()
      }
    }
  }
}
