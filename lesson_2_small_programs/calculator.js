// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Log the result to the terminal
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
let firstNum;
let secondNum;
let operation;

prompt(MESSAGES['welcome']);
calculator();

// Main function
function calculator() {
  input();
  output();
  let calcAgainQ = readline.question(prompt(MESSAGES['calcAgain']));
  calcAgain(calcAgainQ);
}

// Function to ask for valid inputs
function input() {
  prompt(MESSAGES['first']);
  firstNum = readline.question(); // Takes user input and returns it as a string

  while (invalidNumber(firstNum)) {
    prompt(MESSAGES['invalidNum']);
    firstNum = readline.question();
  }

  prompt(MESSAGES['second']);
  secondNum = readline.question();

  while (invalidNumber(secondNum)) {
    prompt(MESSAGES['invalidNum']);
    secondNum = readline.question();
  }

  prompt(MESSAGES['operation']);
  operation = readline.question();
  while (!['1' , '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['invalidOperation']);
    operation = readline.question();
  }
}
// Function to produce all outputs
function output() {
  let output;
  switch (operation) {
    case '1':
      output = Number(firstNum) + Number(secondNum);
      break;
    case '2':
      output = Number(firstNum) - Number(secondNum);
      break;
    case '3':
      output = Number(firstNum) * Number(secondNum);
      break;
    case '4':
      output = Number(firstNum) / Number(secondNum);
      break;
  }
  prompt(output);
}

//Helper functions

// Adds arrow to message prompt
function prompt(message) {
  console.log(`=> ${message}`);
}

// Handles number validation
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)); // tries to coerce num to number using contructor, then uses constructer again with isNaN to check if number.
}

// Asks user if they would like to calculate another number
function calcAgain(input) {
  input = input.toLowerCase();
  if (input === 'y' || input === 'yes') return calculator();
  if (input === 'n' || input === 'no') return 1;
  else {
    prompt(MESSAGES['invalidAgain']);
  }
  return 0;
}