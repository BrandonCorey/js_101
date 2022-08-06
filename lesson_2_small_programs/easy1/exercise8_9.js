// If not divisble by 4, false
// If divisble by 4, true
// Unless divisble by 100 AND not divisble by 400

function isLeapYear(year) {
  while (year > 0) {
    if (year < 1752 && year % 4 === 0) return true
    if (year % 4 !== 0) return false;
    if (year % 400 === 0) return true;
    if (year % 4 === 0 && year % 100 !== 0) return true;
    return false;
  }
  console.log("Error: Year must be greater than 0");
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(01));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true