  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //



//replacing those with pictures of the unicorn from the /images directory. 


//console.log("Inflate The Unicorn!")

const unicores = Array.from(document.getElementsByClassName("inflate-an-image"))

//onclick method to call it, you will need to write a function that gets 
//called every time you click on one of the unicorns.
for(const unicore of unicores){
  unicore.addEventListener('click', handleClick)
}

//click the button your function should change the image of the unicorn to one of the other images.
const unicoreHeads = {
  unicoreOne :0,
  unicoreTwo :0,
  unicoreThree :0,
}

//loop the click event to different image 
function handleClick(event){
const id = event.currentTarget.id
  if(unicoreHeads[id] < 3){
  unicoreHeads[id]++
  }else{
    unicoreHeads[id] = 0
  }
  event.currentTarget.src = `./images/unicorn-${unicoreHeads[id]}.png`
}
