  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")



class unicorn{
  constructor(unicorn){
    this.inflated=0
    this.div=unicorn
    this.img=null

  }
  inflate(){
   
      this.deflate(arr)
      this.img=document.createElement("img")
      this.img.style='width:100%;'
      this.div.appendChild(this.img)
      this.img.src=`mole.PNG`
    
  }
  deflate(arr){
    for(let i in arr){
      arr[i].div.innerHTML=''
    }

  }
  first_baby(){
    this.img=document.createElement("img")
    this.img.style='width:100%;'
    this.div.appendChild(this.img)
    this.img.src=`mole.PNG`
}
}

var arr=[]
var table=document.getElementsByTagName("td")

for(let i=0;i<table.length;i++){
  arr.push(new unicorn(table[i]))
  table[i].addEventListener('click',function(){select(arr[i],arr,i)});
}

function select(unicorn,arr,i){
  if (unicorn.div.innerHTML!= ''){
    arr[Math.floor(Math.random()*26)].inflate()
    console.log('here',unicorn)
  }

}
arr[Math.floor(Math.random()*26)].first_baby()



