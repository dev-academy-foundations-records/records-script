  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!") 

 let cells = document.getElementsByTagName("td")
 let mole = new Image();
 mole.src ='mole.PNG';
 mole.id = 'mole'
 mole.onclick = whackedMole
 
 function molePicture (){
  let randomIndex = Math.floor(Math.random() * 25)
  cells[randomIndex].appendChild(mole)
 }

 function whackedMole() {
  let mySound = new Audio('whack-audio.wav')
  mySound.play()
  molePicture ()
 }
 
 whackedMole()
