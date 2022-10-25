// You rae going to be given an array of integers. Your job is to take that array and find index N where sum of integers on left on N equal sum on right side

// Example
// Input: [1, 2, 3, 4, 3, 2, 1]
// Output: 4

// Input: [10, -80, 10, 10, 15, 35]
// Output: 0
// In the above, the left of index 0 is [], which is treated as 0, and right also adds up to 0

// Search the input array
// Going to add all elements in array
// Check if the sum is equal to 0
//   -If it is, return index is 0
// Add all elements to left index being looked at
// Add all elements to right of index being looked at
// Compare the sums of all elements of the left of target index to sum of elements on the right of target index.
// If those sums are equal, return the index of the target element


// Add array elements
// const addElements = array => array.reduce((prev, curr) => prev + curr)

// Loop from left side
// Take a slice of all elements to the right of current index
//   - Add all of those elements up
// Take a slice of all elements to the left (if any exist), add all of those up
// On each iteration, compare if those two sums are equal


function findEvenIndex(array) {
  const addElements = array => array.reduce((prev, curr) => prev + curr, 0)
  
  for (let idx = 0; idx < array.length; idx++) {

    let leftSide = array.slice(0, idx);
    let rightSide = array.slice(idx + 1);

    let leftSum = addElements(leftSide);
    let rightSum = addElements(rightSide);

    if (leftSum === rightSum) return idx;

  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log(findEvenIndex([1, 2, 1]) === 1)
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1);
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3)
