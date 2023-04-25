let finalNumber = document.querySelector(".final-number");
let calculation = document.querySelector(".calculation");
const calculatorContent = document.querySelector(".calculator-content");

const math = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) {
      return -1;
    } else {
      return a / b;
    }
  },
};

let number = '';
calculatorContent.addEventListener("click", function (event) {
  if (event.target.classList.contains("number")) {
    number += event.target.textContent;
    finalNumber.textContent = number;
  }
});
