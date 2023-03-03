const output = document.getElementById('answer')
output.value="4"

const btns = document.querySelectorAll('.btn')
btns.forEach(btn => btn.addEventListener('click', () => {
    output.innerHTML=btn.innerHTML
}))

