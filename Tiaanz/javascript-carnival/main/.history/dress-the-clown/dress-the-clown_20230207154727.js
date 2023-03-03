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
  headImg.src="./images/"+heads[0]+".png"
}

changeClownHead()

for (let i = 0;i<headImg)

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
      console.log("Right arrow key pressed");
      break;
    case 40:
      event.preventDefault();
      console.log("Down arrow key pressed");
      break;
    default:
      break;
  }
});
