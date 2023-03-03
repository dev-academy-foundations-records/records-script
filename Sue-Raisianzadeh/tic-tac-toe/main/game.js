
let cells = document.getElementsByTagName("TD")

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

let noughtsTurn = true

let gameIsOver = false

// function for handling clicks on cells
function cellClicked(e) {
 
  // create a variable for the clicked cell so I can do stuff with it
 
  // if the cell is empty (check it's .innerHTML property)

  // figure out which symbol to put inside the cell ("O" or "X" based on the naughtsTurn boolean)
 
  // put the symbol inside the cell (by using .innerHTML again)
 
  // check to see if the player won with that move (probably using a new function, like checkForWin() which I'll need to write later)
 
  // if the game isn't over 
        
  // switch to the other player (using the naughtsTurn boolean again)
 
  // update the subtitle saying whose turn it is now
 
  let cell = e.target
     if (cell.innerHTML == "") {
   
    let symbol = noughtsTurn ? "o" : "x";
      cell.innerHTML =symbol
    
      noughtsTurn = !noughtsTurn;
      noughtsTurn ? "X's turn" : "O's turn"

    checkForWin(symbol)

  }
}
// check to see if the player won with that move 
function checkForWin(symbol) {

    /// update the message saying whose turn it is now
    
  // HORIZONTAL LINES //

  if (cells[0].innerHTML == symbol && cells[1].innerHTML == symbol && cells[2].innerHTML == symbol) 
     { gameIsOver = true}

  else if (cells[3].innerHTML == symbol && cells[4].innerHTML == symbol && cells[5].innerHTML == symbol)
      {gameIsOver = true}

  else if (cells[6].innerHTML == symbol && cells[7].innerHTML == symbol && cells[8].innerHTML == symbol)
      {gameIsOver = true}

  // VERTICAL LINES //
  else if (cells[0].innerHTML == symbol && cells[3].innerHTML == symbol && cells[6].innerHTML == symbol)
  {gameIsOver = true}

else if (cells[1].innerHTML == symbol && cells[4].innerHTML == symbol && cells[7].innerHTML == symbol)
 {gameIsOver = true}

else if (cells[2].innerHTML == symbol && cells[5].innerHTML == symbol && cells[8].innerHTML == symbol)
  {gameIsOver = true}
  // DIAGONAL LINES //
  else if (cells[0].innerHTML == symbol && cells[4].innerHTML == symbol && cells[8].innerHTML == symbol)
  {gameIsOver = true}

else if (cells[2].innerHTML == symbol && cells[4].innerHTML == symbol && cells[6].innerHTML == symbol)
  {gameIsOver = true}
  
  // alarm = 

  if (gameIsOver ==false) {
     
      // update the subtitle with the winner
    
       document.getElementById("subtitle").innerHTML = `${noughtsTurn ? "o's turn" : "x's turn"}`;
  }
     else {document.getElementById("subtitle").innerHTML = "Game is over!"
 } 
  
       if (gameIsOver ===true){document.getElementById("subtitle").innerHTML = "Winner!" 
}
    }
   


