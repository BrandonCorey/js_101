// Write a function that takes a string as an argument
// and returns that string with a staggered capitalization scheme.

function staggeredCase(string) {
  return [...string].map((char, idx) => {
    return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

// Test Cases
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"