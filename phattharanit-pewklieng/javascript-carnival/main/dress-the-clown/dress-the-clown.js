  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //




console.log("Dress The Clown!")


//get element by id
//const headImage = ["./images/head0.png", "./images/head1.png", "./images/head2.png", "./images/head3.png", "./images/head4.png", "./images/head5.png"]
//const bodyImage = [".images/body0.png", ".images/body1.png" , ".images/body2.png" , ".images/body3.png", ".images/body4.png", ".images/body5.png"]

let partIndex = 0
let indexes = [0, 0, 0]
let elements = [document.getElementById("head"),document.getElementById("body"), document.getElementById("legs")  ]
let imgName = ["head", "body", "shoes"]

//change the head image of the clown by arrow key
function changeClownHead (){
  
//keydown event 
document.addEventListener("keydown", function(event){
    switch(event.keyCode){
        case 40:
          partIndex++
          if(partIndex > 2)
          partIndex = 0
          console.log('press down')
          break;
        case 38:
          partIndex--
          if(partIndex < 0)
          partIndex = 2
          console.log('press up')
        break;
        case 37:
        indexes[partIndex]--
        if(indexes[partIndex] < 0)
        indexes[partIndex] = 5
        elements[partIndex].src = "./images/" + imgName[partIndex] +  indexes[partIndex] + ".png" 
        console.log('left arrow key pressed')
        break;
        case 39:
        indexes[partIndex]++
        if(indexes[partIndex] > 5)
        indexes[partIndex] = 0

        elements[partIndex].src = "./images/" + imgName[partIndex] + indexes[partIndex] + ".png" 
        console.log('right arrow key preesd')
        break;
    }

});  
}
changeClownHead();
    // let headSrc = "./images/head" + headIndex + ".png"
    //   headIndex++   
    

//refers to the head image and change src to different picture