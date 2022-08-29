// Write a function that takes an array of numbers and returns
// the sum of the sums of each leading subsequence in that array.


function sumOfSums(array) {
  return array.reduce((prev, currIdx) => {
    prev.push(array.slice(0, currIdx + 1));
    return prev;
  }, []).flat().reduce((prev, curr) => prev + curr);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


// function sumOfSums(array) {
//   return array.reduce((prev, curr, currIdx) => {

//     if (prev.length === 0) prev.push(curr);
//     else prev.push(prev[currIdx - 1] + curr);

//     return prev;
//   }, []).reduce((prev, curr) => prev + curr);
// }