console.log("Inflate The Unicorn!")

// test console.log function
function sayHello () {
  console.log("hello")
}

// create inflate function, which takes the id of the clicked unicorn as parameter
function inflate(id) {

  // create unicorn variable for the clicked unicorn
  let unicorn = document.getElementById(id);

  // cheack current status of balloon state, and increase size of balloon if possible
  if (unicorn.src.match("./images/unicorn-0.png")) {
    unicorn.src = "./images/unicorn-1.png"
  }
  else if (unicorn.src.match("./images/unicorn-1.png")) {
    unicorn.src = "./images/unicorn-2.png"
  }
  else if (unicorn.src.match("./images/unicorn-2.png")) {
    unicorn.src = "./images/unicorn-3.png"
  }
}