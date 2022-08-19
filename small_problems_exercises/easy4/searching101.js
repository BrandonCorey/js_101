const readline = require('readline-sync');
const numOrder = ['1st', '2nd', '3rd', '4th', '5th'];
const numArr = [];

getNums();
let getLastNum = () => readline.question(`Enter the last number: `);
includesLastNum(getLastNum());

function getNums() {
  for (let place of numOrder) {
    numArr.push(readline.question(`Enter the ${place} number: `));
  }
}

function includesLastNum(lastNum) {
  let values = numArr;
  if (values.includes(lastNum)) {
    console.log(`The number ${lastNum} appears in ${values}.`);
    return 0;
  }
  console.log(`The number ${lastNum} does not appear in ${values}.`);
  return 1;
}