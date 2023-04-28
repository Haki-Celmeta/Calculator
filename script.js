let finalNumber = document.querySelector(".final-number");
let calculation = document.querySelector(".calculation");
const calculatorContent = document.querySelector(".calculator-content");
const clear = document.querySelector(".clear");
const deleteNumber = document.querySelector(".delete");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const minus = document.querySelector(".minus");
const point = document.querySelector(".point");
const equal = document.querySelector(".equal");
const plus = document.querySelector(".plus");

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
let firstNumber;
let secondNumber;
let char;
let isFirst = true;
calculatorContent.addEventListener("click", function (event) {
  if (event.target.classList.contains("number")) {
    number += event.target.textContent;
    finalNumber.textContent = number;
  } else if (event.target.classList.contains("plus")) {
    char = '+';
    if (isFirst) {
      firstNumber = Number(number);
      calculation.textContent = `${firstNumber} + `;
      number = '';
      char = '+';
      isFirst = false;
    } 
  } else if (event.target.classList.contains("minus")) {
    char = '-';
    if (isFirst) {
      firstNumber = Number(number);
      calculation.textContent = `${firstNumber} - `;
      number = '';
      char = '-';
      isFirst = false;
    }
  } else if (event.target.classList.contains("divide")) {
    char = '/';
    if (isFirst) {
      firstNumber = Number(number);
      calculation.textContent = `${firstNumber} / `;
      number = '';
      char = '/';
      isFirst = false;
    }
  } else if (event.target.classList.contains("multiply")) {
    char = '*';
    if (isFirst) {
      firstNumber = Number(number);
      calculation.textContent = `${firstNumber} * `;
      number = '';
      char = '*';
      isFirst = false;
    } 
  } else if (event.target.classList.contains("point")) {
    if (number.includes('.')) {
      console.log(`Number includes point`);
    } else {
      number += '.';
      finalNumber.textContent = number;
    }
  } else if (event.target.classList.contains("equal")) {
    if (char === '+') {
      secondNumber = Number(number);
      calculation.textContent = `${firstNumber} ${char} ${secondNumber} =`;
      number = '';
      char = '+';
      firstNumber = math.add(firstNumber, secondNumber);
      finalNumber.textContent = firstNumber.toString().replace(/\.?0+$/, '');
    } else if (char === '-') {
      secondNumber = Number(number);
      calculation.textContent = `${firstNumber} ${char} ${secondNumber} =`;
      number = '';
      char = '-';
      firstNumber = math.subtract(firstNumber, secondNumber);
      finalNumber.textContent = firstNumber.toString().replace(/\.?0+$/, '');
    } else if (char === '*') {
      secondNumber = Number(number);
      calculation.textContent = `${firstNumber} ${char} ${secondNumber} =`;
      number = '';
      char = '*';
      firstNumber = math.multiply(firstNumber, secondNumber);
      finalNumber.textContent = firstNumber.toString().replace(/\.?0+$/, '');
    } else if (char === '/') {
      secondNumber = Number(number);
      calculation.textContent = `${firstNumber} ${char} ${secondNumber} =`;
      number = '';
      char = '/';
      if (math.divide(firstNumber, secondNumber) === -1) {
        finalNumber.textContent = `not divide by 0`;
      } else {
        firstNumber = math.divide(firstNumber, secondNumber);
        finalNumber.textContent = firstNumber.toString().replace(/\.?0+$/, '');
      }
    }
  } else if (event.target.classList.contains("delete")) {
    number = number.slice(0, -1);
    finalNumber.textContent = number;
  } else if (event.target.classList.contains("clear")) {
    number = '';
    firstNumber = undefined;
    secondNumber = undefined;
    char = undefined;
    isFirst = true;
    finalNumber.textContent = '';
    calculation.textContent = '';
  }
});