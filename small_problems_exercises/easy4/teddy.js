// Build a program that generates Teddy's age, and logs it to the console.
// Have the age be a random number between 20 and 120 (inclusive).
function howOld() {
  let min = 20;
  let max = 121; //random isn't inclusive at upper bound
  let age = Math.floor((Math.random() * (max - min)) + min);
  console.log(age);
}

howOld();

// Math.random gets random num 0 --> 1
// Multiply by Max age - min range, plus min
// Think like, 0.999999 * 100, + 20 --> 119.9999
// 0.0 * 100 + 20 --> 20
// Random isn't inclusive, to get that 119 to 120, multipy by 101, not 100.
// Then use floor on all of this to make it work.