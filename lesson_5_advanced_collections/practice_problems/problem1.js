// How would you order the following array of number strings by
// descending numeric value (largest number value to smallest)?
let arr = ['10', '11', '9', '7', '8'];

let sortDesc = arr => arr.sort((a, b) => Number(b) - Number(a));

// OR
// function sortDesc(arr) {
//   return arr.sort((a,b) => Numher(b) - Number(a));
// }

sortDesc(arr);

console.log(arr);