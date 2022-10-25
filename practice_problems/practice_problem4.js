// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// input: array
// output: array


// Step through array
// Sort the array in ascending order
// Sort the sorted array
// - Take two elements of array
// - subtract one from the other
// - Get the absolute value of that difference
// - use this as the current minimum difference between values
// - If current difference is less than minimum difference, place both elements at front of array

function closestNumbers(array) {
  let diff = 0;
  let diffArr = [];
  let arrCopy = array.slice().sort((a, b) => a - b);
  for (let idx = 0; idx < arrCopy.length - 1; idx++) {
    diff = (arrCopy[idx + 1] - arrCopy[idx])
      diffArr.push(diff);
  }

  let minIdx = diffArr.indexOf(Math.min(...diffArr));
  let resultArr = [arrCopy[minIdx + 1], arrCopy[minIdx]];
  
  return resultArr.sort((a, b) => array.indexOf(a) - array.indexOf(b))
}


// Need to return array of integers
// - Return array of two elements
// - Two elements that are closest to each other in value


// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]