// Write a function scramble that returns true if a portion of str1 characters can
// be rearranged to match str2, otherwise return false


//input: two strings
// output: boolean value
// Can assume string 1 will be longer

// Algo
// Check all of the characters of str2
//  - See if they are all contained in str1
function scramble(str1, str2) {
  let sameChars = true;
  let str1Chars = [...str1];
  let idx = 0;

  while (sameChars && idx < [...str2].length) {
   if (!str1Chars.includes(str2[idx])) return false;
   str1Chars.splice(str1Chars.indexOf(str2[idx]), 1);
   idx += 1;
  }
  return sameChars;
}

console.log(scramble('javaass', 'jjss') === false) // true
console.log(scramble('rkqodlw','world') === true) // true
console.log(scramble('rkqodlw','worlz') === false) // true
console.log(scramble('cedewaraoossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak') === false)