// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees and returns a string
// representing that angle in degrees, minutes, and seconds


function dms(number) {
  const TIME = 60;
  const RADIX = 10;
  let addZeros = (num => num.toString().padStart(2, '0'));

  let degree = Number.parseInt(number, RADIX);

  let percentOfMinute = number - degree;
  let minute = (percentOfMinute * TIME);
  let minuteRounded = Number.parseInt(minute, RADIX);

  let percentOfSecond = Number(minute % 1);
  let second = Number.parseInt(percentOfSecond * TIME, RADIX);

  return `${addZeros(degree)}˚${addZeros(minuteRounded)}'${addZeros(second)}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
// 76.73 --> 76
// 0.73 * 60 --> 43.8
// 0.8 * 60 --> 48

console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"


// Degrees will be same as integer input
// The decimal value will be multiplied by 60 to get minutes
// The decimal value of minutes will be multiplied to get seconds