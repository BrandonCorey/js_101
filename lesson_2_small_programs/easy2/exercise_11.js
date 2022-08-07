//. Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

function integerToString(num) {
  let arr = [];
  let remainder;
  do {
    remainder = num % 10;
    arr.push(remainder);
    num = Math.floor(num / 10);
  } while (num > 0)
  return arr.reverse().join('');
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));
console.log(integerToString(5000));
console.log(integerToString(1234567890));
