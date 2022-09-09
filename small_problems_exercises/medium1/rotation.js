// Write a function that rotates an array by moving the first
// element to the end of the array. Do not modify the original array.

function rotateArray(numArray) {
  if (!Array.isArray(numArray)) return undefined;
  if (numArray.length === 0) return [];

  let copyArr = numArray.slice();
  copyArr.splice(copyArr.length - 1, 0, copyArr.shift());
  return copyArr;
}

// Test cases
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]