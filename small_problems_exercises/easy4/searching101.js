const readline = require('readline-sync');
const numOrder = ['1st', '2nd', '3rd', '4th', '5th'];
const numArr = [];

let lastNum = getNums();
includesLastNum(lastNum);

function getNums() {
  for (let place of numOrder) {
    numArr.push(readline.question(`Enter the ${place} number: `));
  }
  let last = readline.question(`Enter the last numner: `);
  return last;
}

function includesLastNum() {
  let values = numArr;
  if (values.includes(lastNum)) {
    console.log(`The number ${lastNum} appears in ${values}.`);
    return 0;
  }
  console.log(`The number ${lastNum} does not appear in ${values}.`);
  return 1;
}
