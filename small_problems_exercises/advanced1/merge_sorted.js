// Write a function that takes two sorted arrays 
// as arguments and returns a new array that contains 
// all the elements from both input arrays in sorted order.

function merge(arr0, arr1) {
  let result = [];
  let arr0Cnt = 0;

  let arr1Cnt = 0;

  if (arr0.length === 0) return arr1;
  if (arr1.length === 0) return arr0;

  while (result.length < arr0.concat(arr1).length - 1) {
    switch (true) {
      case (arr0[arr0Cnt] < arr1[arr1Cnt]):
        result.push(arr0[arr0Cnt]);
        if (arr0Cnt < arr0.length) arr0Cnt += 1;
        break;
      case (arr0[arr0Cnt] > arr1[arr1Cnt]):
        result.push(arr1[arr1Cnt]);
        if (arr1Cnt < arr0.length) arr1Cnt += 1;
        break;
    }
  }
  result.push(Math.max(arr0[arr0.length - 1], arr1[arr1.length - 1]))
  return result;
}

// Launch school solution is kinda nasty

// function merge(array1, array2) {
//   let copy1 = array1.slice();
//   let copy2 = array2.slice();
//   let result = [];

//   while (copy1.length > 0 && copy2.length > 0) {
//     result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
//   }

//   return result.concat(copy1.length === 0 ? copy2 : copy1);
// }

// Test cases
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
// Loop through first array in outer loop
// Loop through subsequent array in inner loop
// At first index, find the lower value
// That value will be index 0
// Now, compare index 1 of the arr with the lowest value to index 0 of the array that did not have the lowest value
// The lowest value will be index 0
// Continue this pattern until array is built