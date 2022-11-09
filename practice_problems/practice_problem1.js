// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.


// Input: array
// Output: array

// Only consiering unique values when looking at how many numbers are smaller than given element
// Will use the count of number of smaller elements to transform each element to a new array

// Step through the array given
// For each element, check if any other elements are smaller
// Figure out how many unique elements comprise the array of elements that are smaller than current element
//  - Use that number to transform array
//  - Do for each element in the array
// Result will be entirely new array

// Notes
// Will need a function to count / get unique array elements

// Make a copy of given array
// For each element, check if greater than other elements
// If value equal to target elmeent, continue to next iteration

function smallerNumbersThanCurrent(array) {
  let result = [];
  let targetIdx = 0;
  
  while (targetIdx < array.length) {
    let sum = 0;
    for (let idx = 0; idx < array.length; idx++) {
      let currentNum = array[targetIdx];
      let deDuped = deDupeArr(array);
    
      if (currentNum > deDuped[idx]) sum += 1;
    }
    result.push(sum);
    targetIdx += 1;
  }
   return result;
}

// Examples:

function deDupeArr(array) {
  return array.reduce((acc, element) => {
    if (!acc.includes(element)) acc.push(element);
    return acc;
  }, [])
}

// Other solution
// function smallerNumbersThanCurrent(array) {
//   let result = [];
//   for (let targetIdx = 0; targetIdx < array.length; targetIdx++) {
//     let count = 0;
//     for (let otherIdx = 0; otherIdx < array.length; otherIdx++) {
//       if (
//         array.indexOf(array[otherIdx]) ===  otherIdx &&
//         array[targetIdx] > array[otherIdx]
//       ) count += 1;
//     }
//     result.push(count);
//   }
//   return result;
// }

console.log(smallerNumbersThanCurrent([2, 2, 9, 3]));
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]