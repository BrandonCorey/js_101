// CASUAL
// Create a function called sum that takes two arguments
// Add those two arguments
// Return the result of adding the two arugments

// FORMAL PSUEDO
// START
// SET sum = function that takes two args
//   SET result = arg1 + arg2
//   PRINT result
// END

function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

let cleanSum = ((num1, num2) => num1 + num2);

console.log(sum(5,5));
console.log(cleanSum(5,5));