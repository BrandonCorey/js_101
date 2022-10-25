// Given an array of strings made only from the lowercase letters
// return an array of all characters that show up in all strings within the given array
// (including duplicates).

// input: array of chars
// output: array of chars

// algo
// Look at char of element
// ['ab' , 'bc'] --> 'b'
// Check if exists in every other element of array
// ['bc'] --> exists
// push letter that exists in every element to new array
// ['b']
// return new array ['b']

// Only concern self with first element of array
// Iterate through chars of first element
//  - For each char, check if all other elements contain this char
//  - If true, push this char to a result array

function commonChars(array) {
  let result = [];
  let [firstEl, restOfArr] = [array[0], array.slice(1)];

  [...firstEl].forEach((char, idx) => {
    if (compareWith(char, restOfArr)) {
      result.push(firstEl[idx])
      restOfArr = restOfArr.map(element => element.replace(char), '')
    }
  });
  return result;
}

function compareWith(targetChar, restOfArr) {
  for (let idx = 0; idx < restOfArr.length; idx++) {
    return restOfArr.every(element => element.includes(targetChar));
  }
}

console.log(commonChars(['a', 'b']));
console.log(commonChars(['ab', 'bc']));
console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['cool', 'lock', 'cook']));
console.log(commonChars(['hello', 'goodbye', 'booya', 'random']));
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz']));


