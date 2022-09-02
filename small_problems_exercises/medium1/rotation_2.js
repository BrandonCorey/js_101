// Write a function that rotates the last count digits of a number.
// To perform the rotation, move the first of the digits that you want
//  to rotate to the end and shift the remaining digits to the left.

// Okay, we are doing the same thing as last time, but for a set number
// The number of digits is specified in the second argument of the function
// Remeber the algorithm
// Remove the first element of the array/string, and append it to the end
function rotateRightmostDigits(digits, numToRotate) {
  digits = String(digits);
  let digitsToRotate = [...String(digits)].slice(-numToRotate);
  digitsToRotate.splice(digitsToRotate.length - 1, 1, digitsToRotate.shift()); // Rotated digits
  return digits.slice(0, digits.length - numToRotate) + digitsToRotate.join('');
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917