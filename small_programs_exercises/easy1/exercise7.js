// Takes two strings as args
// Returns the result of concat the shorter string, the longer string, and the shorter string again.


function shortLongShort(str1, str2) {
  shorter1 =  str1.length < str2.length;
  shroter2 = str2.length < str1.length;
  if (shorter1) return str1.concat(str2, str1);
  if (shroter2) return str2.concat(str1, str2);
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"