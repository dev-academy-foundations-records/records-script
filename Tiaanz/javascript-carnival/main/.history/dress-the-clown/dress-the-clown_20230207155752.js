  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

//create an array to store head images
const heads=['head0','head1','head2','head3','head4','head5']
//get the head img tag
const headImg=document.getElementById('head')

let headIndex=0

function changeClownHead() {
  if (headIndex >= 0 && headIndex < 6) {
    headImg.src = "./images/" + heads[headIndex] + ".png"
    headIndex++
  } else if () {
    
  }
  
  
}



// headImg.addEventListener("click", () => {
//   changeClownHead()
// })

document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 37:
      event.preventDefault();
      console.log("Left arrow key pressed");
      break;
    case 38:
      event.preventDefault();
      console.log("Up arrow key pressed");
      break;
    case 39:
      event.preventDefault();
      changeClownHead()
      // console.log("Right arrow key pressed");
      break;
    case 40:
      event.preventDefault();
      console.log("Down arrow key pressed");
      break;
    default:
      break;
  }
});
