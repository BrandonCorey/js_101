// Takes one interger arg
// Returns true if abs value is odd
// Asume interger is valid arg

let isOdd = int => int % 2 === 1 || int % -2 === -1;

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true