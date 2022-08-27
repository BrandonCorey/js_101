// Write a function that takes an array of integers as input,
// multiplies all of the integers together,
// divides the result by the number of entries in the array,
// and returns the result as a string

function multiplicativeAverage(array) {
  let result = array.reduce((total, nextNum) => total * nextNum);
  return Number(result / array.length).toFixed(3).toString();
}

// Test Cases
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"