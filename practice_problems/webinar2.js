// Given a non-empty string, check if it can be contstucted bt aking a substring of it and appneding multiple copies to iself

// Example 1:

// Input: 'abab'
// Output: True
// Explanation: It is the substring 'ab' appended to itself once

// Example 2:
// Input: 'aba'
// output false


// Input: string
// output: boolean


// Algo
// 1. Target first letter of string
// 2. Take target first letter and create a new string
// 3. Append that letter to itself until it is the length of the original string
// 4. Check if original string equals new string
// 1. Repeat step one, but with target the next letter of string along with previous target

// Will need to target from 0 index of ogString up until target character for each iteration
// - Use a slice method to target these characters


function repeatedSubString(ogString) {
  let target;

  for (let outer = 0; outer < ogString.length - 1; outer++) {
    let cat = '';
    target = ogString.slice(0, outer + 1);

    if (checkSubStr(ogString, cat, target)) return true;
   
  }
  return false;
}

function checkSubStr(ogString, cat, target) {
  for (let idx = cat.length; idx < ogString.length; idx++) {
    cat += target;
    if (cat === ogString) return true;
  }
}

console.log(repeatedSubString('abab') === true);
console.log(repeatedSubString('aba') === false);
console.log(repeatedSubString('aabaaba') === false);
console.log(repeatedSubString('abaababaab') === true);
console.log(repeatedSubString('abcabcabcabc') === true);