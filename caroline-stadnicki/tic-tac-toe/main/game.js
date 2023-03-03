console.log("Welcome to Tic-Tac-Toe! Enjoy!")

let cells = document.getElementsByTagName("TD")

for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = cellClicked
}

let noughtsTurn = true

let gameIsOver = false



   function cellClicked(e) {
    let cell = e.target
    
   if (cell.innerHTML == '') {
      if (noughtsTurn == true){
        symbol = cell.innerHTML = 'O'
      } else if (noughtsTurn == false){
        symbol = cell.innerHTML = 'X'
      }
  
    console.log(symbol)
    console.log(gameIsOver)
    checkForWin(symbol)
    switchPlayer()
    }
   
   function checkForWin(symbol) {

    // HORIZONTAL LINES //

    if (cells[0].innerHTML == symbol && cells[1].innerHTML == symbol && cells[2].innerHTML == symbol) {
      gameIsOver = true
    } 
    else if (cells[3].innerHTML == symbol && cells[4].innerHTML == symbol && cells[5].innerHTML == symbol) {
      gameIsOver = true
    } 
    else if (cells[6].innerHTML == symbol && cells[7].innerHTML == symbol && cells[8].innerHTML == symbol) {
      gameIsOver = true
    }
    // VERTICAL LINES //
    else if (cells[0].innerHTML == symbol && cells[3].innerHTML == symbol && cells[6].innerHTML == symbol) {
      gameIsOver = true
    } 
    else if (cells[1].innerHTML == symbol && cells[4].innerHTML == symbol && cells[7].innerHTML == symbol) {
     gameIsOver = true
    } 
    else if (cells[2].innerHTML == symbol && cells[5].innerHTML == symbol && cells[8].innerHTML == symbol) {
     gameIsOver = true
    }  
    // DIAGONAL LINES //
    else if (cells[0].innerHTML == symbol && cells[4].innerHTML == symbol && cells[8].innerHTML == symbol) {
     gameIsOver = true
    } 
    else if (cells[2].innerHTML == symbol && cells[4].innerHTML == symbol && cells[6].innerHTML == symbol) {
     gameIsOver = true
    } 
  }

  
  
function switchPlayer() {
  if (gameIsOver == false){
    if (noughtsTurn == true){
      document.getElementById('subtitle').innerHTML ="It's X's turn now";
      noughtsTurn = false
    } else if (noughtsTurn == false) { 
      document.getElementById('subtitle').innerHTML ="It's O's turn now";
      noughtsTurn = true
    } 
  }
}

 if (gameIsOver == true) {
   if (noughtsTurn == true) {
     document.getElementById('subtitle').innerHTML =
      "Congratulations! 'O' won the game!"
    } else if (noughtsTurn == false){
     document.getElementById('subtitle').innerHTML =
      "Congratulations! 'X' won the game!"   
    }
  }
} 
