// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Log the result to the terminal
const readline = require('readline-sync');

console.log('Weclome to Calculator!');

console.log("What's the first number?")
let firstNum = readline.question(); // Takes user input and returns it as a string
console.log("What's the second number?");
let secondNum = readline.question();
console.log("What operatio would you like to perform?\n1)Add 2)Subtract 3)Multiply 4)Divide");
let oepration = readline.question();

let output;
if (oepration === '1') {
  output = Number(firstNum) + Number(secondNum);
} else if (oepration === '2') {
  output = Number(firstNum) - Number(secondNum);
} else if (oepration === '3') {
  output = Number(firstNum) * Number(secondNum);
} else if (oepration === '4') {
  output = Number(firstNum) / Number(secondNum);
}
console.log(output);