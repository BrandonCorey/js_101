// Write a function that takes two array arguments,
// each containing a list of numbers,
// and returns a new array that contains the product of each pair
// of numbers from the arguments that have the same index.

function multiplyList(array0, array1) {
  const combinedArr = [];
  for (let idx = 0; idx < array0.length; idx++) {
    combinedArr.push(array0[idx] * array1[idx]);
  }
  return combinedArr;
}

// Tests cases
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]