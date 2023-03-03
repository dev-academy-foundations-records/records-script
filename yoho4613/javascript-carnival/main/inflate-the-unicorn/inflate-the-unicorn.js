  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
let img = document.querySelectorAll('.inflate-an-image');
let pic1 = 0;
let pic2 = 0;
let pic3 = 0;

img.forEach((el, i) => {
  el.addEventListener('click', (e) => changePic(e, i));
})

function changePic(e, i) {
  e.preventDefault();
  if(i === 0 && pic1 < 4) {
    e.target.src = `./images/unicorn-${pic1}.png`
    pic1++;
  } else if(i === 1 && pic2 < 4) {
    e.target.src = `./images/unicorn-${pic2}.png`
    pic2++;
  } else if(i === 2 && pic3 < 4) {
    e.target.src = `./images/unicorn-${pic3}.png`
    pic3++;
  }

  if(pic1 === 4 && pic2 === 4 && pic3 === 4) {
    setTimeout(() => {
      alert("All balloons are fully inflated!")
      resetGame();
    }, 500)
  }
  
}

function resetGame() {
  pic1 = 0;
  pic2 = 0;
  pic3 = 0;

  img.forEach((el) => {
    el.src = './images/placeholder-image.png'
  })
}
