// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

function closestNumbers(array) {
  let diffs = {};
  let sortedArr = array.slice().sort((a, b) => a - b);

  for (let idx = 0; idx < sortedArr.length - 1; idx++) {
    let diff = sortedArr[idx + 1] - sortedArr[idx];
    diffs[diff] = [sortedArr[idx], sortedArr[idx + 1]];
  }
  
  return Object.values(diffs)[0].sort((a, b) => array.indexOf(a) - array.indexOf(b));

}


// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]