// A featured number (something unique to this exercise) is an odd number
// that is a multiple of 7,
// with all of its digits occurring exactly once each.
const MAX = 9876543201;

function featured(num) {
  for (let currentNum = num + 1; currentNum <= MAX; currentNum++) {
    if (isValid(currentNum)) return currentNum;
    continue;
  }
  return "There is no possible number that fulfills those requirements.";
}

function isValid(num) {
  return ((num % 7 === 0 && num % 2 === 1) && isUnique(num));
}

function isUnique(num) {
  num = String(num).split('');
  for (let idx = 0; idx < num.length; idx++) {
    if (num.indexOf(num[idx]) !== idx) return false;
  }
  return true;
}

/*
function calculateFeatured(currentNum, numFreq) {
  String(currentNum).split('').forEach(digit => {
    numFreq[digit] = numFreq[digit] || 0;
    numFreq[digit] += 1;
  });
}
*/
//console.log((isUnique(1015)));

// Test cases
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."