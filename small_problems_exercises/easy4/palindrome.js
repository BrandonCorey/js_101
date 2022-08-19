function isPalindrome(string) {
  let reversed = string.split('').reverse('').join('');
  return string === reversed;
}

console.log(isPalindrome('mom'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true