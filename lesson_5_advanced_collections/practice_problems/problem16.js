// Given the following data structure,
// write some code that defines an object
// where the key is the first item in each subarray,
// and the value is the second.

let toObject = arr => Object.fromEntries(arr);

// OR

// function toObject(arr) {
//   const obj = {};
//   arr.forEach(subArray => {
//     let [key, value] = subArray;
//     obj[key] = value;
//   });
//   return obj;
// }

// Test cases
let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

console.log(toObject(arr));

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

