// Create function that rearranges number order to create next largest number possible
// If already largest number, return - 1

// 12 --> 21
// 513 --> 531
// 521 --> -1

// Input: Number
// Outpout: Number
// Only positive integers
// Returns NEXT largest number, not largest number possible

// Will be working with an array of the digits

// Lets look at example

// 12345678|6| --> Start from right, and compare with each digit from the end of the number
// 1234567|6|8 --> Less
// 123456|6|78 --> less
// 12345|6|678 --> less
// 1234|6|5678 -- More

// Algo
// Take last digit of number
// Compare it to the digit to it's left
// If less than that digit, continue to next iteration
// If greater than that digit, swap digit with last digit
// stop comparing
// returning swapped number

function nextBiggerNum(int) {
  let intArr = String(int).split('').map(strNum => Number(strNum));
  let lastIdx = intArr.length - 1
  let swapped = 0;

  while (true) {
    if (intArr.length < 2) return - 1;

    for (let idx = intArr.length - 2; idx >= 0; idx--) {
      if (intArr[idx] < intArr[lastIdx]) {
        [intArr[idx], intArr[lastIdx]] = [intArr[lastIdx], intArr[idx]];
        swapped += 1;
        break;
      } 
    }
    if (lastIdx  === 0 && swapped === 0) return -1;
    else if (swapped === 1) return Number(intArr.join(''));
    lastIdx -= 1;
  }
}



console.log(nextBiggerNum(9) === -1);
console.log(nextBiggerNum(12) === 21);
console.log(nextBiggerNum(2017) === 2071);
console.log(nextBiggerNum(513) === 531);
console.log(nextBiggerNum(123456789) === 123456798);
console.log(nextBiggerNum(786) === 876);
console.log(nextBiggerNum(111) === -1)