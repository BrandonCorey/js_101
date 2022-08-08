// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Log the result to the terminal
const readline = require('readline-sync');

prompt('Weclome to Calculator!');

prompt("What's the first number?");
let firstNum = readline.question(); // Takes user input and returns it as a string

while (invalidNumber(firstNum)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  firstNum = readline.question();
}

prompt("What's the second number?");
let secondNum = readline.question();

while (invalidNumber(firstNum)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  firstNum = readline.question();
}

prompt("What operatio would you like to perform?\n1)Add 2)Subtract 3)Multiply 4)Divide");
let operation = readline.question();

while (!['1' , '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, or 4.');
  operation = readline.question();
}

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

//functions
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)); // tries to coerce num to number using contructor, then uses constructer again with isNaN to check if number.
}