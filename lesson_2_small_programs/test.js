let arr = [1, 2, 3, 4, 5, 6];

function getEvens(arrayArg) {
  for (let nums of arrayArg) {
    if (nums % 2 === 0) {
      return nums;
    }
  }
  return 0;
}

console.log(getEvens(arr));

function getEvens1(arrayArg) {
  return arrayArg.filter(num => {
    return num % 2 === 0;
  });
}

console.log(getEvens1(arr));