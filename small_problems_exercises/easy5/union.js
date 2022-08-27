// Write a function that takes two arrays as arguments
// and returns an array containing the union of the values from the two.

function union(array0, array1) {
  let filtered = [];
  let merged = array0.concat(array1);

  merged.forEach(num => {
    if (!filtered.includes(num)) filtered.push(num);
  });

  return filtered;
}

// Test case
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]