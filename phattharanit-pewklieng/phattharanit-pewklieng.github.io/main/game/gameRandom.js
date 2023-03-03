

let play = ["&#128548" ,"&#128522", "&#128536;", "&#128540" , "&#129297 You Win","&#128561;","&#128520", "&#128531", "&#128525", "&#128557 You Lose"];

let randomButton = document.getElementById('random');
let output2 = document.getElementById('output');

let timeoutId1 = 0;

randomButton.addEventListener('click', () =>{
    timeoutId1 = setTimeout(()=>{
      let n = play.length;
      let index = Math.floor(Math.random()*n);
      let luck = play[index];
      output2.innerHTML = luck;

    },1000);
});


