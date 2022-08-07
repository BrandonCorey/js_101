//. Write a function that takes a signed integer and converts it to a string representation.

function signedIntegerToString(num) {
  let arr = [];
  let remainder;
  let signed = sign(num);
  do {
    num = Math.abs(num);
    remainder = num % 10;
    arr.push(remainder);
    num = Math.floor(num / 10);
  } while (num > 0)
  arr.push(signed);
  return arr.reverse().join('');
}

function sign(num) {
  if (Math.sign(num) === 1) return '+'
  if (Math.sign(num) === -1) return '-'
  return '';
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));
