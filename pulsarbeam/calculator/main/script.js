const screenDisplay = document.querySelector('.outputScreen')
const buttons = document.querySelectorAll('button')

let calculation = []
let accumalativeCalculation

function calculate(button) {
  const value = button.textContent

  if (value == 'AC') {
    calculation = []
    screenDisplay.textContent = 0
  } else if (value === '=') {
    screenDisplay.textContent = eval(accumalativeCalculation)
  } else {
    calculation.push(value)
    accumalativeCalculation = calculation.join('')
    screenDisplay.textContent = accumalativeCalculation
  }
}

buttons.forEach((button) =>
  button.addEventListener('click', () => calculate(button))
)
