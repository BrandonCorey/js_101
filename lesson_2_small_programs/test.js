let arr = [1, 2, 3, 4, 5, 6];

function getEvens(arrayArg) {
  for (let nums of arrayArg) {
    if (nums % 2 === 0) return nums;
  }
}

console.log(getEvens(arr));

function getEvens1(arrayArg) {
  arrayArg.filter(num => {
    if (num % 2 === 0) return num;
  })
}

console.log(getEvens1(arr));