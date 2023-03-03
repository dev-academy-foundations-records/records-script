  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")
var unicorns=document.getElementsByTagName("img")
console.log(unicorns)

class unicorn{
  constructor(unicorn){
    this.inflated=0
    this.div=unicorn
  }
  inflate(){
    if(this.inflated==4){return}
    this.inflated++
    this.div.src=`./images/unicorn-${this.inflated}.png`
  }
}
arr=[]
for(let i=0;i<unicorns.length;i++){
  arr.push(new unicorn(unicorns[i]))
  unicorns[i].addEventListener('click',function(){select(arr[i])});
}


function select(unicorn){
  unicorn.inflate()

}