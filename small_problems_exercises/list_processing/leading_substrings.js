// Write a function that takes a string argument and
//returns a list of substrings of that string.
// Each substring should begin with the first letter of the word,
// and the list should be ordered from shortest to longest.

function leadingSubstrings(string) {
  return string.split('').reduce((prev,_, idx) => {
    prev.push(string.slice(0, idx + 1));
    return prev;
  }, []);
}


// Test Cases
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// function leadingSubstrings(string) {
//   return string.split('').reduce((prev, curr, currIdx) => {
//     if (prev.length === 0) prev.push(curr);
//     else prev.push(prev[currIdx - 1] + curr);
//     return prev;
//   }, []);
// }

// function leadingSubstrings(str) {
//   let final = [];
//   let word = '';

//   str.split("").forEach(letter => {
//     word = word.concat(letter);
//     final.push(word);
//   })

//   return final;

// }