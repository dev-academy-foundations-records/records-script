  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// console.log("Whack-a-Mole!")

let cells = document.getElementsByTagName("td");
let mole = document.createElement("img");
 
mole.src = "mole.PNG"
mole.id = "mole"
mole.onclick = clickedMole

function RandomeCell(){
  let randomNumber = Math.floor((Math.random() * cells.length) + 1);

  cells[randomNumber].appendChild(mole)
  
}
function clickedMole() {
  RandomeCell();
  let audio = new Audio("whack-audio.wav");
  audio.play();
}
RandomeCell();





// var timer; 
// var timeLeft = 60; // seconds

// // What to do when the timer runs out
// function gameOver() {
//   // This cancels the setInterval, so the updateTimer stops getting called
//   cancelInterval(timer);
  
//   // re-show the button, so they can start it again
//   $('#playAgainButton').show();
// }

// function updateTimer() {
//   timeLeft = timeLeft - 1;
//   if(timeLeft >= 0)
//     $('#timer').html(timeLeft);
//   else {
//     gameOver();
//   }
// }

// The button has an on-click event handler that calls this
function start() {
  // setInterval is a built-in function that will call the given function
  // every N milliseconds (1 second = 1000 ms)
  timer = setInterval(updateTimer, 1000);
  
  // It will be a whole second before the time changes, so we'll call the update
  // once ourselves
  updateTimer();
  
  // We don't want the to be able to restart the timer while it is running,
  // so hide the button.
   $('#playAgainButton').hide();
}












// audio.src = "whack-audio.wav"
// audio.id ="audio"

//   document.getElementById("audio").onplay

// audio.onclick = clickedAudio
// mole.forEach(mole => {
//   mole.addEventListener("click", () => {
//     audio.play();
//   });
// });
      
    
    
  


  








// let imageSource = ["./images/mole.PNG"];

// function wackedMole() {
//  let image = imageSource;
//  let randomIndex = functionToGetRandomNumber()
//  let randomCell = cells[randomIndex]
  
//  randomCell.onclick = function() {

    

//  for ( let i = "0"; i < cells.length; i++) {
//   return image;
//   // .Math.floor(Math.random() * (max - min + 5));
//  }
// }

// }
// wackedMole()