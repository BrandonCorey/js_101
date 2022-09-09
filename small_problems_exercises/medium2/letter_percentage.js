// Write a function that takes a string and
// returns an object containing the following three properties:

function letterPercentages(string) {
  const len = string.length;
  let upper = 0;
  let lower = 0;
  let other = 0;

  [...string].forEach(element => {
    if (/[^A-Z]/gi.test(element)) other += 1;
    else if (/[A-Z]/g.test(element)) upper += 1;
    else lower += 1;
  });

  let format = expression => Number(expression * 100).toFixed(2).toString();

  return {
    lowercase: format(lower / len),
    uppercase: format(upper / len),
    neither: format(other / len)
  };

}

// Test Cases
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
console.log(
letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }