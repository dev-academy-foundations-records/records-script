  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

//create an array to store head images
const heads=['head0','head1','head2','head3','head4','head5']
//get the head img tag
const headImg=document.getElementById('head')

function changeClownHead() {
  headImg.src=`heads[0].png`
}

// changeClownHead()