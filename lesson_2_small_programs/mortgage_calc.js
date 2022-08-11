// Need to import readline
// Make the formula for mortgage a constant
// formula: let m = p * (j / (1 - Math.pow((1 + j), (-n))));
// Ask for loan amount
// Ask for APR (will need to convert to monthly interest for formula)
// Ask for loan duration (will need to convert from years to months)
// Print monthly payment armound as dollar and cents
// edge cases:
// Input validation --> Make sure everything is a number.
// Input validation --> Don't allow empty strings to be entered.
// Input validation --> Don't allow strings to be entered in general.
// Interest input --> Will we support 0 interest loans?
// Duration input --> Will we support non-integer number of years?

// Global variables
let loanAmount;
let rate;
let duration;
const readline = require('readline-sync');

// Main-function calls
getValidInputs();
prompt(`Your monthly payment is: ${calculate()}`);

// Function to get inputs
function getValidInputs() {
  console.log('-- Mortage Calculator 2022™ --');

  prompt('Please enter the loan amount:');
  loanAmount = readline.question();
  invalidDetection(loanAmount);

  prompt('What is the interest rate of the loan (% or decimal)?');
  rate = readline.question();
  invalidDetection(rate);

  prompt('And what is the loan duration (in years)?');
  duration = readline.question();
  invalidDetection(duration);

  let monthlyObj = conversionYtoM(rate, duration);
  rate = monthlyObj.interest;
  duration = monthlyObj.months;
}

//Function to calculate monthly payment
function calculate() {
  let pay;
  pay = Number(loanAmount * (rate / (1 - Math.pow((1 + rate), (-duration)))));
  if (Number.isNaN(pay)) return 0;
  return pay.toFixed(2);
}

// Helper functions

// Makes prompt less bland
function prompt(message) {
  console.log('=> ' + message);
}

// Handles number validation
function invalidDetection(input) {
  while (input.trimStart() === '' || Number(input) < 0 || Number.isNaN(+(input))) {
    prompt('Whoops! Please enter a valid number:');
    input = readline.question();
  }
}

// Converts inputs to monthly amounts
function conversionYtoM(interest, years) {
  let convertedObj = {};

  // Considers any value less than one a decimal interest rate
  if (interest < 1 && interest > 0) {
    interest = decimalToInt(interest);
  }

  // Converts yearly to monthly and stores in object
  interest = Number(interest);
  years = Number(years);
  convertedObj.interest = (interest / 100) / 12;
  convertedObj.months = years * 12;
  return convertedObj;
}
// Converts decimals to ints
function decimalToInt(decimalInterest) {
  let decimal = decimalInterest.indexOf('.');
  decimalInterest = decimalInterest.slice(decimal);
  let orderOfMagnitude = decimalInterest.length - 1;
  decimalInterest = Number(decimalInterest);
  decimalInterest *= Math.pow(10, orderOfMagnitude);
  return decimalInterest;
}