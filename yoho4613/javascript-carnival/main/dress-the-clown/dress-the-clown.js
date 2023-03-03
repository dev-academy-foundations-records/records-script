// Selector
const bodyPart = document.querySelector('#body-part');
const btn = document.querySelector('#btn--save');
let headImg = document.querySelector('.head');
let bodyImg = document.querySelector('.body');
let shoesImg = document.querySelector('.shoes');
let currentBodyPart = 0;
let head = 0;
let body = 0;
let shoes = 0;

// Head = 0 Cloth = 1 Shoes = 2
bodyPart.innerHTML = "Head"
window.document.addEventListener('keydown', changePart) 
btn.addEventListener('click', () => {
  html2canvas(document.body).then(canvas => {
    let a = document.createElement("a");
    a.download = "My-Character-Screenshot.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });
})
    
// functions
function changePart(e) {
  if(e.keyCode === 38) {
    currentBodyPart === 0 ? currentBodyPart = 2 : currentBodyPart--;
  } else if(e.keyCode === 40) {
    currentBodyPart === 2 ? currentBodyPart = 0 : currentBodyPart++;
  } else if(e.keyCode === 37) {
    changeStyle(e.keyCode, currentBodyPart)
  } else if(e.keyCode === 39) {
    changeStyle(e.keyCode, currentBodyPart)
  }

  switch (currentBodyPart) {
    case 0:
      bodyPart.innerHTML = "Head"
      break;
    case 1:
      bodyPart.innerHTML = "Body"
      break;
    case 2:
      bodyPart.innerHTML = "Shoes"
    default:
      break;
  }
}

function changeStyle(keyCode, part) {
  if(keyCode === 37) {
    switch (part) {
      case 0:
        head === 0 ? head = 5 : head--;
        headImg.src = `./images/head${head}.png`;
        break;
      case 1:
        body === 0 ? body = 5 : body--;
        bodyImg.src=`./images/body${body}.png`;
        break;
      case 2:
        shoes === 0 ? shoes = 5 : shoes--;
        shoesImg.src= `./images/shoes${shoes}.png`
      default:
        break;
    }
  } else {
    switch (part) {
      case 0:
        head === 5 ? head = 0 : head++;
        headImg.src = `./images/head${head}.png`; 
        break;
      case 1:
        body === 5 ? body = 0 : body++;
        bodyImg.src=`./images/body${body}.png`;
        break;
      case 2:
        shoes === 5 ? shoes = 0 : shoes++;
        shoesImg.src= `./images/shoes${shoes}.png`
      default:
        break;
    }
  }
}