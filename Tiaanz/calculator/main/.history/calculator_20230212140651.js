const output = document.getElementById('answer')
console.log(output);

const btns = document.querySelectorAll('.btn')
btns.forEach(btn => btn.addEventListener('click', () => {
    output.innerHTML=btn.innerHTML
}))

