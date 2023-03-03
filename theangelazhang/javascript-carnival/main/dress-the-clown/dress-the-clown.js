// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!');

const clownParts = document.querySelectorAll('.dress-an-image');
const partNames = ['head', 'body', 'shoes'];
const clothesIndex = [3, 4, 4];
let partIndex = 0;
const clothes = {};

for (let i = 0; i < 3; i++) {
  clothes[partNames[i]] = [];
  for (let j = 0; j < 6; j++) {
    clothes[partNames[i]].push(`./images/${partNames[i]}${j}.png`);
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowDown') {
    partIndex = (partIndex + 1) % 3;
  } else if (e.key === 'ArrowUp') {
    partIndex = (partIndex + 2) % 3;
  } else if (e.key === 'ArrowRight' && clothesIndex[partIndex] < 5) {
    clothesIndex[partIndex]++;
  } else if (e.key === 'ArrowRight') {
    clothesIndex[partIndex] = 0;
  } else if (e.key === 'ArrowLeft' && clothesIndex[partIndex] > 0) {
    clothesIndex[partIndex]--;
  } else if (e.key === 'ArrowLeft') {
    clothesIndex[partIndex] = 5;
  }

  for (let i = 0; i < 3; i++) {
    clownParts[i].src = clothes[partNames[i]][clothesIndex[i]];
  }
});
