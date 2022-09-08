// Given the following data structure,
// write some code to return an array which
// contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

function oddObjects(array) {
  return array.filter(objects => {
    let subArray = Object.values(objects).flat();
    let subArrayEven = Object.values(objects).flat().filter(el => el % 2 === 0);
    if (subArray.length === subArrayEven.length) return objects;
  });
}

// BETTER SOLUTION (LAUNCH SCHOOL SOLUTION)

// function oddObjects(array) {
//   arr.filter(obj => {
//     return Object.values(obj).every(subArr => {
//       return subArr.every(num => num % 2 === 0);
//     });
//   });
// }

console.log(oddObjects(arr));