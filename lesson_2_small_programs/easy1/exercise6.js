// Ask to enterr num greater than 0
// Ask whether useer wants to determine the sum or product between 1 and entered number
// The product is equivalent to the factorial
// Sum can use reduce

// PSUEDO
// SET readline
// function calcNum
// GET numQ = Number(Enter a number greater than 0)
// GET operation = (Enter s for sum, p for product)
// SET fact = (num) => 
// IF num === 1 return 1
// ELSE return num * fact(num - 1)
// SET sumnums
// SET acc = 0;
// loop until num
// add each increment to acc along the way
// return acc

const readline = require('readline-sync');

function calcNum() {
  let numQ = Number(readline.question('Enter a number greater than 0: '));
  let operation = readline.question("Enter 's' to compute sum, or 'p' to compute product: ");
  let fact = num => num === 1 ? 1 : num *  fact(num - 1);
  let sumNums = num => num === 1 ? 1 : num + sumNums(num -1);
  
  if (operation === 'p') console.log(fact(numQ));
  if (operation === 's') console.log(sumNums(numQ));
}
calcNum();