function isPalindromicNumber(number) {
  if (!(Number.isInteger(number))) return false;

  number = String(number);
  let numberCopy = number.split('');
  number = number.split('');

  numberCopy = numberCopy.reverse();
  return number.join('') === numberCopy.join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));           // true