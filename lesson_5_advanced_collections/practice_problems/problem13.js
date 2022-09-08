// Given the following data structure,
// sort the array so that the sub-arrays
// are ordered based on the sum of the odd
// numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function sortOdds(array) {
  array.sort((a, b) => {
    let oddSumA = a.reduce((prev, curr) => curr % 2 === 1 ? prev + curr : prev);
    let oddSumB = b.reduce((prev, curr) => curr % 2 === 1 ? prev + curr : prev);

    return oddSumA - oddSumB;

  });
}


sortOdds(arr);
console.log(arr);