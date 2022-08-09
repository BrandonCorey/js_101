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
let loanAmount; //
let rate; // monthly (convert from annual to monthly)
let duration; // years (convert to monthly for calcs)
const readline = require('readline-sync');
const MPAYMENT = loanAmount * (rate / (1 - Math.pow((1 + rate), (-duration))));

function getValidInputs() {

}

function prompt(message) {
  return '=>' + message;
}