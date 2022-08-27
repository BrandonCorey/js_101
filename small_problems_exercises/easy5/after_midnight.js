// Write a function that takes a time using this minute-based format
//and returns the time of day in 24 hour format (hh:mm).
// Your function should work with any integer input.

function timeOfDay(minutes) {
  const MINUTES_IN_DAY = 1440;
  const TIME_BASE = 60;

  if (minutes < 0) {
    minutes = MINUTES_IN_DAY - (Math.abs(minutes) % MINUTES_IN_DAY);
  } else minutes %= MINUTES_IN_DAY;

  let hour = Math.floor(minutes / TIME_BASE);
  let minutesInHour = minutes % TIME_BASE;

  let formatTime = (hour, min) => {
    [hour, min] = [String(hour), String(min)];
    hour = hour.padStart(2, 0);
    min = min.padStart(2,0);
    return [hour, min].join(':');
  };
  return formatTime(hour, minutesInHour);
}


// Understand the problem

// Input: A number
// Outpout: Minutes before or after midnight
// Number input is convered to time
// The time can be positive for minutes after midnight
// the time can be negative for minutes before midnight
// There are 1440 minutes in a day
// The timeOfDay function accepts minute values over this limit
// The time of day will just loop based on 1440 minute intervals to the next day


// Examples test cases
// These are inutes before / after midnight
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

// Algorithm
// 1. Constant number 1440 representing minutes in a day
//  2. Minutes will be equal to the remainder of number input into 1440
//   - This will give us number of minutes after midnight
//    Examples for this step
//     0 % 1440 --> 0
//     -3 % 1440 --> -3
//     35 % 1440 --> 35
//     -1437 % 1440 --> -1437
//     3000 % 1440 --> 120
//     800 % 1440 --> 800
//     -4231 % 1440 ---> -1351
// If minutes are negative
//   - Convert to positive
//   - Find remiander for minutes in a day
//   - Subtract that value from minutes in a day
// To get hours, divide minutes by 60 and round down
// Minutes in hour will equal remainder after dividng by 60