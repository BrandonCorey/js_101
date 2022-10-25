// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.


// input: string
// output: string

// Step through string
// Look at current char
//  - Keep tally each char I see
//  - Every time I see a char again, increase the tally by one
// Get list of chars with lowest number of tallies
// Return the first item in that last

// Create empty object
// Loop through string
// On each iteration of loop, check to see if object property equal to char exists
// If not, create it, and incremenet a counter by 1
// Once done looping, return array version of object
// Filter object by the second index of each element in the array
//  - Want minimum values of that second index left
//  - Return first index of first element of that filtered array


function leastCommonChar(string) {
  const obj = {};
  stringCopy = string.toLowerCase();

  [...stringCopy].forEach(char => {
    obj[char] = obj[char] || 0
    obj[char] += 1;
  })
  
  let resultArr =  Object.entries(obj).sort((a, b) => a[1] - b[1]);
  return resultArr[0][0]
}


// Examples:

console.log(leastCommonChar("Hello World") === 'h');
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".