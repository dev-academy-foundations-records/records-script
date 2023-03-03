console.log("Welcome to Tic-Tac-Toe! Enjoy!")

let noughtsTurn = true

//get the array of all the cells
const cells = document.querySelectorAll('td')

if (noughtsTurn) {
    //binding the onclick method to each cell
for (let x of cells) {
    x.addEventListener("click", () => {
        x.innerHTML = "O"
        noughtsTurn=false
    })
}
} else {
    for (let x of cells) {
        x.addEventListener("click", () => {
            x.innerHTML = "O"
            noughtsTurn=true
        })
}



