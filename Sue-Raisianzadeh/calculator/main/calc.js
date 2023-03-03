// Select the screen element
let screen = document.querySelector('.calc-td');

// Select all the buttons and attach a click event listener to each one
let buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonText = button.innerHTML;

    if (buttonText === 'C') {
      // Clear the screen
      screen.innerHTML = '';
      
    } else if (buttonText === '=') {
      // Evaluate the expression on the screen
      calculate();
    } else if (buttonText === '√') {

      let expression = screen.innerHTML;
      let result = Math.sqrt(parseFloat(expression));
      screen.innerHTML = result;

  }else {
      // Append the button's text to the screen
      screen.innerHTML += buttonText;
    }
  });
});

// Evaluate the expression on the screen
function calculate() {
  try {
    // Replace all instances of 'x' with '*'
    let expression = screen.innerHTML.replace(/x/g, '*');
    // Evaluate the expression using math.js
    let result = math.evaluate(expression);
    screen.innerHTML = result;
  } catch (error) {
    screen.innerHTML = 'Error';
  }
}