// Write a function that returns a list of all substrings of a string
function substrings(str) {
  const arr = [];
  let acc = '';

  for (let idx = 0; idx < str.length; idx++) {
    acc = '';
    for (let jdx = idx; jdx < str.length; jdx++) {
      acc += str[jdx];
      arr.push(acc);
    }
  }
  return arr;
}

console.log(substrings('abcde'));


