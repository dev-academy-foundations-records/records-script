console.log("Welcome to Tic-Tac-Toe! Enjoy!")

//get the array of all the cells
const cells = document.querySelectorAll('td')

//binding the onclick method to each cell
for (let x of cells) {
    x.addEventListener("click", () => {
        x.innerHTML="X"
    })
}

