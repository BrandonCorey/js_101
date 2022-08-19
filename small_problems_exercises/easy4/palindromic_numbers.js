function isPalindromicNumber(number) {
  if (!(Number.isInteger(number))) return false;
  number = String(number);
  let reversed = number.split('').reverse('').join('');
  return number === reversed;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));           // true