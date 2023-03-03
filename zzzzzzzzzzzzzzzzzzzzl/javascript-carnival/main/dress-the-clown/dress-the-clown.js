  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

var clown =document.getElementsByTagName("img");
console.log(clown)
var head={
  part:clown[0],
  string:'head',
  index:0,
  arrow_style:'transform: translate(-250px,100px);'

}
var body={
  part:clown[1],
  string:'body',
  index:0,
  arrow_style:'transform: translate(-250px,225px);'
}
var shoes={
  part:clown[2],
  string:'shoes',
  index:0,
  arrow_style:'transform: translate(-250px,450px);'
}
var arr=[head,body,shoes]

var index=0//0-5
var arrow=document.getElementById('arrow')




function swap(part,direction){
  part.part.src=`./images/${part.string}${part.index}.png`
  part.index+=direction
  if(part.index==-1){part.index=5}
  if(part.index==6){part.index=0}
  return part.index
}
function change_index(dir){
  index+=dir
  if(index==-1){index=2}
  if (index==3){index=0}
  arrow.style=arr[index].arrow_style
  
  
}

swap(head,index)

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    console.log('Up arrow key pressed')
    change_index(-1)
  } else if (event.key === 'ArrowDown') {
    console.log('Down arrow key pressed')
    change_index(1)
  } else if (event.key === 'ArrowLeft') {
    console.log('Left arrow key pressed')
    arr[index].index=swap(arr[index],-1)
  } else if (event.key === 'ArrowRight') {
    console.log('Right arrow key pressed')
    arr[index].index=swap(arr[index],1)
  }
})