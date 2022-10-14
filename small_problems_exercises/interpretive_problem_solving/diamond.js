// Make a diamond

// Input: take odd number
// Output: return diamond with width of odd number input

// Algo
// 1. Start loop with counter at 1
//  - Print Math.ceil(width / 2) - counter spaces " "
//  - Print a star counter number of times
// 2. Add 2 until get to correct width
//  - Print Math.ceil(width / 2) - counter spaces " "
//  - Print a star counter number of times for each iteration
// 3. start subtracting 2 until back to 1
//  - Print Math.ceil(width / 2) - counter spaces " "
//  - Print a star counter number of times for each iteration

function diamond(width) {
  let space = " ";
  let star = "*";
  let subtractSpace = 1;
  let numOfSpaces = 0;

  for (let counter = 1; counter <= width; counter += 2) {
    numOfSpaces = Math.ceil(width / 2) - subtractSpace;

    console.log(space.repeat(numOfSpaces) + star.repeat(counter))

    subtractSpace += 1;
  }

  for (let counter = width - 2; counter > 0; counter -= 2) {

    numOfSpaces += 1;

    console.log(space.repeat(numOfSpaces) + star.repeat(counter))

    subtractSpace -= 1;
  }
}
// Test cases
console.log(diamond(1));
// logs
//*

console.log(diamond(3))
// // logs
//  *
// ***
//  *

console.log(diamond(9));
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *