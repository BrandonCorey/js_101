// Write two functions that each take a time of day in 24 hour format,
// and return the number of minutes before and after midnight.
// Both functions should return a value in the range 0..1439.

const TIME_BASE = 60;
const HOURS_IN_DAY = 24;

function afterMidnight(time) {
  let [hour, minute] = time.split(':');
  if (hour === String(HOURS_IN_DAY)) hour = 0;
  let result = (Number(hour * TIME_BASE) + Number(minute));
  return result;
}

function beforeMidnight(time) {
  let [hour, minute] = time.split(':');
  if (hour === String(HOURS_IN_DAY)) hour = 0;
  let result = (Number(hour * TIME_BASE) - Number(minute));
  return result;
}

// Test Cases
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);