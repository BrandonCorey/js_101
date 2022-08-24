function multiply(array,timesBy) {
  let result = [];
  array.forEach(num => result.push(num * timesBy));
  return result;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]