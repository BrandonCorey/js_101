
function findFibonacciIndexByLength(num) {
  const ARR = [1n, 1n];
  while (String(ARR[ARR.length - 1]).length < num) {
    ARR.push(ARR[ARR.length - 1] + ARR[ARR.length - 2]);
  }
  return BigInt(ARR.length);
}

console.log(findFibonacciIndexByLength(2));