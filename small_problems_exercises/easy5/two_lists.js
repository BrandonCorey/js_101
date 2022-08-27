// Write a function that combines two arrays passed as arguments,
// and returns a new array that contains all elements from both array arguments,
// with each element taken in alternation.

function interleave(array0, array1) {
  const combinedArr = [];

  for (let idx = 0; idx < array0.length; idx++) {
    combinedArr.push(array0[idx], array1[idx]);
  }
  return combinedArr;
}

// Test cases
console.log(interleave([1, 2, 3, 4, 5], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
