// Create a function that takes two integers as arguments.
// The first argument is a count, and the second is the starting number
// of a sequence that your function will create.
// The function should return an array containing the same number
// of elements as the count argument.
// The value of each element should be a multiple of the starting number.

function sequence(length, startingInt) {
  const arr = [];
  let increment = startingInt;
  let iterations = 0;

  while (iterations < length) {
    arr.push(startingInt);
    startingInt += increment;
    iterations += 1;
  }

  return arr;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

// Understand problem
// Input: Length of array
// Input: Starting int / increment
// Output: array of length arg incremented by starting int

// Test and Examples
// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]

// Data structure
// Will most likely be iterating through an array
// First element in the arrray will be startingInt
// The array will increment by startingInt
// Array will be as long as length argument supplied to sequence

// Algorithm
// Set an array = []
// Set a variable incremenent = startingInt
// Loop will initalize at starting int
// While loop iterations less than the length argument of sequence
// Loop will increment or decrement by the number supplied by startingInt arg
// Push each value at each increment to the empty arr []
// Return arr
