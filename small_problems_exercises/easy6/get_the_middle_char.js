// Write a function that takes a non-empty string argument
//  and returns the middle character(s) of the string.
//  If the string has an odd length, you should return exactly one character.
//  If the string has an even length, you should return exactly two character

function centerOf(string) {
  let len = Math.floor(string.length / 2);

  if (string.length % 2 === 1) {
    return string.split('').filter((_, idx) => idx === len).join('');
  }
  return string.split('').filter((_, idx) => idx === len ||
  idx === len - 1).join('');
}

// Test cases
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
console.log(centerOf(''));