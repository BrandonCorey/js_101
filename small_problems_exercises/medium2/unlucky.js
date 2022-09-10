// Write a function that takes a year as an argument and
//  returns the number of Friday the 13ths in that year.

function fridayThe13ths(year) {
  const FRI = 5;
  let thirteens = [];

  for (let month = 0; month <= 12; month++) {
    thirteens.push(new Date(year, month, 13));
  }
  return thirteens.filter(day => day.getDay() === FRI).length;
}


// Test cases
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2)