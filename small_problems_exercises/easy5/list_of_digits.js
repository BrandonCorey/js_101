// Write a function that takes one argument, a positive integer,
// and returns a list of the digits in the number.

function digitList(digits) {
  let stringArr = String(digits).split('');
  return stringArr.map(num => Number(num));
}
// Test Cases
console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));
// [1, 2, 3, 4, 5]
// [7]
// [3, 7, 5, 2, 9, 0]
// [4, 4, 4]