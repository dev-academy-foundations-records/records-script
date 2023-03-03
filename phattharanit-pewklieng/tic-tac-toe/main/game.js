console.log("Welcome to Tic-Tac-Toe! Enjoy!")


//an array containing all the squares of the board
//declared array in element by tageName TD
//Array of TD element 


//declared noughtsTurn 
let noughtsTurn = true;
let gameIsOver = false;

//attach listener
let cells = document.getElementsByTagName("TD")
for (const cell of cells){
  cell.onclick = cellClicked
}


// function for handling clicks on cells
function cellClicked(cells) {
  
  const cell = cells.target

    for (let i = 0; i < cells.length; i++) {
      cells[i].onclick = function () {
    // if the cell is empty (check it's .innerHTML property)
   if (cells[i].innerHTML === "" ) 
    // figure out which symbol to put inside the cell 
    //("O" or "X" based on the naughtsTurn boolean)
    if (noughtsTurn) {
      cells[i].innerHTML = "O";
      noughtsTurn = false;
    } else { //// switch to the other player (using the naughtsTurn boolean again)
      cells[i].innerHTML = "X";
      noughtsTurn = true;
    }
   }
  }
   // game is over when cells is not empty or someone won!
   if(gameIsOver || cells.innerHTML != ""){
    return
  }
 
  // update the subtitle saying whose turn it is now
 const subTitle = document.getElementById('subtitle')
  checkForWin() 
  //if the game isn't over 
  if(gameIsOver){
  //check winner!
    if(noughtsTurn){
    subTitle.textContent = `Player O won!`
    }else {
      subTitle.textContent = `Player X won!`
    }
  } 
  noughtsTurn = !noughtsTurn 
}
console.log(cellClicked(cells));

 
   



 // the function takes a string as an argument ("X" or "O")
// *in this example we called the argument 'symbol' but you can call it whatever you want (hint: bananas)

function checkForWin(symbol) {

  // if a symbol appears three times in a row in the board cells i.e. a winning line
 
      // either horizontally, vertically, OR diagonally
          // HORIZONTAL LINES //

    if (cells[0].innerHTML == symbol && cells[1].innerHTML == symbol && cells[2].innerHTML == symbol)
    gameIsOver = true

    else if (cells[3].innerHTML == symbol && cells[4].innerHTML == symbol && cells[5].innerHTML == symbol)
    gameIsOver = true

    else if (cells[6].innerHTML == symbol && cells[7].innerHTML == symbol && cells[8].innerHTML == symbol)
    gameIsOver = true

    // VERTICAL LINES //
 
    if (cells[0].innerHTML == symbol && cells[3].innerHTML == symbol && cells[6].innerHTML == symbol)
    gameIsOver = true

    else if (cells[1].innerHTML == symbol && cells[4].innerHTML == symbol && cells[7].innerHTML == symbol)
    gameIsOver = true

    else if (cells[2].innerHTML == symbol && cells[5].innerHTML == symbol && cells[8].innerHTML == symbol)
    gameIsOver = true

    // DIAGONAL LINES //
    if (cells[0].innerHTML == symbol && cells[4].innerHTML == symbol && cells[8].innerHTML == symbol)
    gameIsOver = true

    else if (cells[2].innerHTML == symbol && cells[4].innerHTML == symbol && cells[6].innerHTML == symbol)
    gameIsOver = true

      

    return false
  
      }
          // update the subtitle with the winner
          //score update
          let score = 0
      
          function displayScore(){

            score.x = document.getElementById("playerX").innerHTML = "Player X : " 
            score.o = document.getElementById("playerO").innerHTML = "Player O : " 
          }
          displayScore()
    
        