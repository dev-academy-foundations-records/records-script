// Selector
let display = document.querySelector(".calculator__display");
let btn = document.querySelectorAll(".btn");
let displayValue = "";
let num1 = undefined;
let num2 = undefined;
let result = 0;
let operator;

// Initial Setting
display.value = 0;
btn.forEach((el) => {
  el.addEventListener("click", () => clickBtn(el.id));
});

// Button Click 
function clickBtn(btn) {
  // Check the input
  if (btn === "ac") {
    // If it is AC
    num2 = undefined;
    num1 = undefined;
    displayValue = "";
    display.value = displayValue;
  } else if (btn === "ce") {
    // If it is CE
    displayValue = "";
    display.value = displayValue;
  } else if (btn === "decimal") {
    // If it is decimal
    displayValue = displayValue += ".";
  } else if (btn === "equal") {
    // If it is Equal
    num2 = displayValue;
    result = calculate(num1, num2, operator);
    display.value = result;
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
  } else if (isNaN(Number(btn))) {
    // If it is operator
    if(!num1) {
      num1 = displayValue;
    } else {
      num2 = displayValue;
      num1 = calculate(num1, num2, operator);
      num2 = undefined;
    } 
    operator = btn;
    displayValue = ""
    display.value = ""
  } else {
    // If it is number case
    displayValue = displayValue += btn;
    display.value = displayValue;
  }
}

function calculate(num1, num2, operatorArg) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operatorArg) {
    case "add":
      return num1 + num2;
      break;
    case "subtract":
      return num1 - num2;
      break;
    case "multiply":
      return num1 * num2;
      break;
    case "divide":
      return num1 / num2;
      break;
    case "modulus":
      return num1 % num2;
      break;
  }
}
