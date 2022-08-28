// Write a function that takes two array arguments,
// each containing a list of numbers,
// and returns a new array containing the products of all combinations
// of number pairs  that exist between the two arrays.
// The returned array should besorted in ascending numerical order.

function multiplyAllPairs(array, array1) {
  const resultsArr = [];

  array.forEach(outerNum => {
    array1.forEach(innerNum => {
      resultsArr.push(outerNum * innerNum);
    });
  });

  return resultsArr.sort((a, b) => a - b);
}

// Understand the problem
// Input: two arrays
// Output: one array with all cross multiples sorted in ascending order
// Duplicates are allowed

// Test cases and Examples
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// Data structure
// Will keep everything as arrays
// Will output results to a new array

// Algo
// Will loop through the first array
// Will also loop through the second array
// Nested for loop will do this
// The first array will wait for inner array, then increment
// The inner array will increment by one each time
