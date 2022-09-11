// Write a function that computes the difference between
// the square of the sum of the first count positive integers
// and the sum of the squares of the first count positive integers.

function sumSquareDifference(num) {
  let sum = 0;
  let squareAndSum = 0;

  for (let cnt = 0; cnt <= num; cnt++) {
    sum += cnt;
    squareAndSum += square(cnt);
  }
  let sumAndSquare = square(sum);
  return sumAndSquare - squareAndSum;
}

function square(num) {
  return num ** 2;
}

// Test Cases
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150


// Input: number
// outpout: number

// We need to iterate from number 0 to the number input (inclusive)
// 1. We need to sum all numbers then square them
// 2. We need to square each number while iterating
// and sum those squared numbers
// We need to sum 1 and 2.

