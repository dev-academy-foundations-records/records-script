function testSum(){
  let expected = 7
  let actual = sum(5, 2)

  if (actual != expected) {
      console.log("It's broken..")
  } else {
      console.log("It works!")
  }
}

//regular function
function sum(a, b){
  return a + b
}

//arrow function

const sum = (a, b) => a + b

