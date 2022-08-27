// Write a function that takes an array as an argument and returns
// an array that contains two elements, each of which is an array.

function halvsies(array) {
  const halfway = Math.ceil(array.length / 2);
  return [array.splice(0,halfway), array];
}

// Test cases
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

// Function takes array argument
// Make copy of array argument
// Get length of array
// Halfway point is Math.ceil(length / 2)
// Use filtered to create two new arrays before and after that point
// Push each array to a new empty array, one after the other