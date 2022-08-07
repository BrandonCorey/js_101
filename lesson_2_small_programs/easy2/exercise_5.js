const readline = require('readline-sync');
let firstNum;
let secondNum;

function ask() {
firstNum = readline.question("Enter the first number: "); 
secondNum = readline.question("Enter the second number: ");
}

function outputs() {
  let output;
output = Number(firstNum) + Number(secondNum);
console.log(output);
output = Number(firstNum) - Number(secondNum);
console.log(output);
output = Number(firstNum) * Number(secondNum);
console.log(output);
output = Math.floor(Number(firstNum) / Number(secondNum));
console.log(output);
output = Number(firstNum) % Number(secondNum);
console.log(output);
output = Number(firstNum) ** Number(secondNum);
console.log(output);
}

ask();
outputs();
