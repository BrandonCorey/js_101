// Write a function that takes an array of strings and returns an array
//  of the same string values, but with all vowels (a, e, i, o, u) removed.

function removeVowels(array) {
  let filtered = array.map(str => str.match(/[^aeiou]/gi));
  return filtered.map(nested => {
    return nested === null ? '' : nested.join('');
  });
}

// Test Cases
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]