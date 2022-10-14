// Write a program that takes one argument-the total number of switches-and returns an array of the lights that are on after count passes.

// Inputs and outputs
// Input: Number
// Output: Array of Numbers
// No side effects to be seen
// what is a switch? It is something that have an "on" or "off" state (boolean)
// what is a pass? It is one iteration of a cyle or loop

// Data structures --> Will be working with arrays
// Could possibly use an object to store true/false states of a particular switch
// Could then transform all switch keys that are "on" into an array and return it

// Algorithm
// 0. Take in number argument
//   - This will act as upper bound of loop condition
// 1. Create empty object for switches
// 2. Define a loop that goes until number argument
// 3. At each iteration, create an object object property of counter = false
//   - This will create object of light switches, set to 'off' by default
 // 4. Use loop that checks for multiples to flip switch of light if counter is a multiple of property (as a number)
 // 5. Return all properties with true values as an array


// Check if something is a multiple
// 0. Create new loop
// 1. Counter of a loop will be multiple checked for
// 2. Will divide property by counter of loop
//   - If property % counter === 0, property is a multiple of counter

function lightsOn(switches) {
  const bank = createLightBank(switches);
  updateLightBank(switches, bank);

  return turnedOnLights(bank);
}
// Creates Object to store light switch state (on or off)
function createLightBank(switches) {
  const bank = {}
  for (let counter = 1; counter <= switches; counter++) {
    bank[counter] = false;
  }
  return bank;
}
// Flips light switch if multiple of counter
function updateLightBank(switches, bank) {
  let counter = 1;
  while (counter <= switches) {
    for (let num in bank) {
      if (Number(num) % counter === 0) bank[num] = !bank[num];
    }
    counter += 1;
  }
}

function turnedOnLights(bank) {
  return  Object.entries(bank).filter(nestedArr => {
    return nestedArr[1]}).map(key => {
      return key = Number(key[0]);
  });
}

console.log(lightsOn(5));



// Test Cases
// function lightsOn(switches) {
//   // ...
// }

// lightsOn(5);        // [1, 4]
// // Detailed result of each round for `5` lights
// // Round 1: all lights are on
// // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]