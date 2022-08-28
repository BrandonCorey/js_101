// Write a function that takes a string as an argument and returns true
// if all parentheses in the string are properly balanced, false otherwise.
// To be properly balanced, parentheses must match '(' and ')' pairs.

function isBalanced(string) {
  let frequencyObj = {'(' : 0, ')' : 0};

  string.split('').forEach(prop => {
    if (prop === '(' || prop === ')') {
      if (frequencyObj['('] < frequencyObj[')']) return false;
      frequencyObj[prop] += 1;
    }
  });
  return frequencyObj['('] === frequencyObj[')'];
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// Understand the problem
// Input: string
// Output: boolean expression
// String will usually contain parenthesis
// Boolean will reflect parenthesis being balanced or not
// To determine this, left and right parenthesis must occur equally.
// Freuency of left parenthesis must always be higher or equal to right

// Test and examples
// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

// Data structures
// One object, two properties
// First prop --> openP
// Second prop --> closeP
// Will split string into an array
// Will iterate through the array
// Along the way, will check if openP or closeP exists
// If they do, update the frequency count
// If at any point the closeP is greater than openP, break and return false
// If at the end, the props are different values, return false
// If at the end, the props are the same value, return true;