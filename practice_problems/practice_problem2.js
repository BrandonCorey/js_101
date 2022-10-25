// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Input: array of integers
// Output: number (sum of 5 least elements)

// step through array
// Look at one element
// Add the next four elements to that element, get sum
// Push that sum to an array
// Go to next elmeent, add next four elements to it, repeat step
// Return largest sum in array of five consecutive integers

function minimumSum(array) {
 
  const addElements = array => array.reduce((a, b) => a + b, 0);
  let sum;
  let sumArr = [];

  if (array.length < 5) return null;

  for (let targetIdx = 0; targetIdx < array.length - 4; targetIdx++) {
    sum = 0;
    sum += addElements(array.slice(targetIdx, targetIdx + 5))
    sumArr.push(sum)

  }
  return Math.min(...sumArr);
}



// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".