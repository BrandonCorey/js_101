// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Log the result to the terminal
const readline = require('readline-sync');
let firstNum;
let secondNum;
let operation;

prompt('Weclome to Calculator!');
calculator();

// Main function
function calculator() {
  input();
  output();
  let calcAgainQ = readline.question(prompt("Would you like to perform another calculation? "));
  calcAgain(calcAgainQ);
}

// Function to ask for valid inputs
function input() {
  prompt("What's the first number? ");
  firstNum = readline.question(); // Takes user input and returns it as a string

  while (invalidNumber(firstNum)) {
    prompt("Hmmm... that doesn't look like a valid number. Try again! ");
    firstNum = readline.question();
  }

  secondNum = readline.question(prompt("What's the second number? "));
  while (invalidNumber(firstNum)) {
    prompt("Hmmm... that doesn't look like a valid number. Try again! ");
    firstNum = readline.question();
  }

  prompt("What operatio would you like to perform?\n1)Add 2)Subtract 3)Multiply 4)Divide ");
  operation = readline.question();
  while (!['1' , '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4.');
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
    prompt("Whoops! That's an invalid input. Must choose y or n");
  }
  return 0;
}