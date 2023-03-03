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

document.onkeyup = (e) => {
  if(e.keycode==39)
}