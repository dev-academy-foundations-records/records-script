const output = document.getElementById('answer')


const btns = document.querySelectorAll('.btn')
btns.forEach(btn => btn.addEventListener('click', () => {
    const value = btn.innerHTML
    
    if (value === "CE") {
        output.value = "";
      } else if (value === "=") {
        output.value = eval(answer.value);
      } else {
        answer.value += value;
      }
}))

