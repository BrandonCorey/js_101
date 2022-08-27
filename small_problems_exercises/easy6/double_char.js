// Write a function that takes a string, 
// doubles every character in the string, 
// and returns the result as a new string.
function repeater(string) {
  return string.split('').reduce((previous, current) => {
    return previous + current.repeat(2);
  }, '');
}
//console.log(repeater('hello'));
// Test cases
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
