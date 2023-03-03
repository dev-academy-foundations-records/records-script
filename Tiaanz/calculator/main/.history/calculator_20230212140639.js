const output = document.getElementById('answer')


const btns = document.querySelectorAll('.btn')
btns.forEach(btn => btn.addEventListener('click', () => {
    output.innerHTML=btn.innerHTML
}))

console.log("hello");