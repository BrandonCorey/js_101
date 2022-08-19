const readline = require('readline-sync');
const YEAR = getCurrentYear();
// Input validation not worried about here
let ages = getAges();
displayResult(ages);

function getCurrentYear() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}

function getAges() {
  const ages = {};
  ages.current = readline.question('What is your age? ');
  ages.retire = readline.question('What is your retire age? ');
  return ages;
}

function displayResult(agesObj) {
  let yearsToGo = agesObj.retire - agesObj.current;
  console.log(`It's ${YEAR}. You will retire in ${YEAR + (yearsToGo)}.`);
  console.log(`You only have ${yearsToGo} years of work to go!`);
}