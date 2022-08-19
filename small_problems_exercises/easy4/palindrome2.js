function isRealPalindrome(string) {
  let stringCopy = string.toLowerCase().split('');
  let reversed = stringCopy.reverse();

  string = string.toLowerCase();
  string = string.split('');

  let forward = string.filter(element => /[a-z0-9]/.test(element));
  let backward = reversed.filter(element => /[a-z0-9]/.test(element));
  return forward.join('') === backward.join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // false (case matters)
console.log(isRealPalindrome("madam i'm adam"));      // true
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));            // true
console.log(isRealPalindrome('123ab321'));