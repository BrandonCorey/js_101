function runningTotal(array) {
  let acc = 0;
  return array.map(element => {
    acc += element;
    return acc;
  });
}

console.log(
  runningTotal([2, 5, 13]),             // [2, 7, 20]
  runningTotal([14, 11, 7, 15, 20]),    // [14, 25, 32, 47, 67]
  runningTotal([3]),                    // [3]
  runningTotal([]),                     // []
);