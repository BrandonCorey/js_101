// Given the following code, what will the final values of a and b be?

// Try to answer without running the code.
let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5, 8]];

arr[0] += 2; // 4
arr[1][0] -= a; // 3

// Result
// a = 2;
// b = [5, 8];
// arr = [4, [3, 8]];