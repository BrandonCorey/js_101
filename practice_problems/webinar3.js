// given 2 strings, find out if there is a substring that ppears in both strings
// will return true if true, false if false
// Only care about subtrings more than 2 letters

// Input: string1, string2
// Output: boolean
// substring --> any combination of ordered characters within a string greater than one charcater
//   - entire string does not count as substring
//   - Ex) food --> 'fo', 'foo', 'oo', 'ood'. 'od'
 // Strings are case insensitive


// algo
// We need to loop through string that is taken as argument
// We need to look at each substring, with one more char included on each iteration until a new chracter is targeted
// We need to comapare each substring at each iteration to the original string
// If any of the substrings are equal to the original string, the result is "true".
//   - If this condition is never met, the result is "false"

// Will combine a nested loops with slice method to get substrings
// Define a loop with a target index
// Inside the loop, define a foor loop with an index that will act as the upper bound for substring
// On each iteration of the inner loop, check if the substring sliced out is equal to the input string

function substringTest(str1, str2) {
  [str1, str2] = [str1, str2].map(el => el.toLowerCase());

  for (let targetIdx = 0; targetIdx < str1.length; targetIdx++) {
    for (let upperBound = targetIdx + 1; upperBound < str1.length + 1; upperBound++) {

      let subStr = str1.slice(targetIdx, upperBound);
      let subStr2 = str2.slice(targetIdx, upperBound);

      if (subStr.length === 1) continue;
      if (subStr === subStr2) return true;
    }
  }
  return false;
}


console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', 'lllt') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === false);