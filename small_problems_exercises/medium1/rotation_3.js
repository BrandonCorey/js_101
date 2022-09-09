// This is a weirder one
// For the first iteration, we just rotate like nomral
// Then we iterate by one and lock in each incremental number each iteration
// 735291 --> 352917 Normal rotation
// 352917 --> 329175 First number locked in, rest rotated
// 329175 --> 321759 First two numbers locked in, rest rotated
// 321759 --> 321597 First three numbers locked in, rest rotated
// 321597 --> 321579 --> First four locked in, last two rotated (max rotation)

function maxRotation(digits) {
  digits = String(digits);
  let digitsToRotate = [...String(digits)].slice();

  for (let idx = 0; idx < digitsToRotate.length - 1; idx++) {
    digitsToRotate.splice(
      digitsToRotate.length - 1, 0, iterativeUnshift(digitsToRotate, idx));
  }

  return Number(digitsToRotate.join(''));
}

function iterativeUnshift(array, idx) {
  let removed = array.splice(idx, 1).join();
  return removed;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845